import { ImageResponse } from "next/og";

// On-demand generator for the LinkedIn cover image (1584×396, 4:1 — the size
// LinkedIn's cover/background frame expects). Hit /linkedin-cover to render the
// PNG, then upload it. Same brand system + SVG-embed approach as
// app/opengraph-image.tsx.

export const contentType = "image/png";

const W = 1584;
const H = 396;

// Brand palette (mirrors app/globals.css @theme)
const PAPER = "#ffffff"; // white
const INK = "#0e0e0f";
const GRAPHITE = "#7b7b7b";
const CORAL = "#ff5436";

// Request a specific Google Fonts axis spec (e.g. "Hanken+Grotesk:wght@800"
// or "Instrument+Serif:ital@1"), returning raw TTF for satori to embed.
async function loadGoogleFont(spec: string, text: string) {
  const url = `https://fonts.googleapis.com/css2?family=${spec}&text=${encodeURIComponent(
    text,
  )}`;
  const css = await (await fetch(url)).text();
  const src = css.match(
    /src: url\((.+?)\) format\('(?:opentype|truetype)'\)/,
  )?.[1];
  if (!src) throw new Error(`Could not load font ${spec}`);
  return (await fetch(src)).arrayBuffer();
}

// Deterministic PRNG so the particle field is identical on every render.
function mulberry32(seed: number) {
  let a = seed;
  return function () {
    a |= 0;
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function smoothstep(e0: number, e1: number, x: number) {
  const t = Math.min(1, Math.max(0, (x - e0) / (e1 - e0)));
  return t * t * (3 - 2 * t);
}

// A dense, dispersed particle WAVE (black + grey only): particles scatter
// (bell-curve) around an undulating sine path, densest along the crest line and
// hazing outward. Built as an SVG <img> because satori can't run canvas.
function buildWaveSvg() {
  const rand = mulberry32(20260620);
  const midY = H * 0.66;
  const A1 = H * 0.26;
  const k1 = (Math.PI * 2 * 1.7) / W;
  const p1 = 3.45; // phase tuned so the wave drops into a trough at the right edge (keeps the top-right lockup clean)
  const A2 = H * 0.11;
  const k2 = (Math.PI * 2 * 3.6) / W;
  const p2 = 2.3;
  const waveY = (x: number) =>
    midY + A1 * Math.sin(x * k1 + p1) + A2 * Math.sin(x * k2 + p2);
  // gentle fade at the far left/right so the wave breathes into the edges
  const env = (x: number) =>
    smoothstep(0, W * 0.05, x) * (1 - smoothstep(W * 0.95, W, x));

  let circles = "";

  // Dense ribbon: bell-curve scatter hugging the wave line, so the sine shape
  // stays legible. Ink at the core, graphite toward the fringe for softness.
  const N = 5200;
  for (let i = 0; i < N; i++) {
    const x = rand() * W;
    const g = (rand() + rand() + rand() + rand() - 2) / 2; // ~[-1,1], peaked at 0
    const y = waveY(x) + g * (H * 0.4);
    if (y < -6 || y > H + 6) continue;
    const core = 1 - Math.min(1, Math.abs(g));
    const e = env(x);
    const fill = core > 0.5 ? INK : GRAPHITE;
    const a =
      (core > 0.5 ? 0.12 + core * 0.42 : 0.05 + core * 0.32) * (0.4 + 0.6 * e);
    if (a < 0.02) continue;
    const r = (0.7 + core * 2.1 * (0.7 + 0.6 * rand())).toFixed(2);
    circles += `<circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="${r}" fill="${fill}" fill-opacity="${a.toFixed(
      3,
    )}"/>`;
  }

  // Dispersed haze: sparse faint dots spread far above/below for atmosphere.
  const M = 2400;
  for (let i = 0; i < M; i++) {
    const x = rand() * W;
    const d = rand() * 2 - 1;
    const y = waveY(x) + d * (H * 0.92);
    if (y < -6 || y > H + 6) continue;
    const e = env(x);
    const a = (0.03 + 0.1 * rand()) * (1 - Math.abs(d) * 0.45) * (0.4 + 0.6 * e);
    if (a < 0.02) continue;
    const r = (0.6 + 1.0 * rand()).toFixed(2);
    circles += `<circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="${r}" fill="${GRAPHITE}" fill-opacity="${a.toFixed(
      3,
    )}"/>`;
  }

  return `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">${circles}</svg>`;
}

export async function GET() {
  const headline = "AI-powered products, designed with taste";
  const wordmark = "Thomas Ninh";
  const eyebrow = "THOMASNINH.COM";
  const sansGlyphs = `${wordmark}${eyebrow}`;

  let fonts:
    | {
        name: string;
        data: ArrayBuffer;
        weight: 400 | 600 | 800;
        style: "normal" | "italic";
      }[]
    | undefined;
  let wordmarkSrc: string | null = null;
  try {
    const [semibold, extrabold, serifItalic] = await Promise.all([
      loadGoogleFont("Hanken+Grotesk:wght@600", sansGlyphs),
      loadGoogleFont("Hanken+Grotesk:wght@800", sansGlyphs),
      loadGoogleFont("Instrument+Serif:ital@1", headline),
    ]);
    fonts = [
      { name: "Hanken Grotesk", data: semibold, weight: 600, style: "normal" },
      { name: "Hanken Grotesk", data: extrabold, weight: 800, style: "normal" },
      { name: "Instrument Serif", data: serifItalic, weight: 400, style: "italic" },
    ];

    // Wordmark lockup: "Thomas" outlined, "Ninh" solid — resvg paints the
    // stroked vector text that satori can't (no CSS text-stroke support).
    const fontB64 = Buffer.from(new Uint8Array(extrabold)).toString("base64");
    const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="380" height="56" viewBox="0 0 380 56">
  <style>
    @font-face { font-family:'HK'; font-weight:800; src:url(data:font/ttf;base64,${fontB64}) format('truetype'); }
    text { font-family:'HK'; font-weight:800; font-size:43px; letter-spacing:-1.5px; }
  </style>
  <text x="3" y="41">
    <tspan fill="none" stroke="${INK}" stroke-width="1.3">Thomas</tspan>
    <tspan dx="11" fill="${INK}">Ninh</tspan>
  </text>
</svg>`;
    wordmarkSrc = `data:image/svg+xml;base64,${Buffer.from(svg).toString("base64")}`;
  } catch {
    fonts = undefined;
    wordmarkSrc = null;
  }

  const waveSrc = `data:image/svg+xml;base64,${Buffer.from(
    buildWaveSvg(),
  ).toString("base64")}`;

  const serif = fonts ? "Instrument Serif" : undefined;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          position: "relative",
          background: PAPER,
          overflow: "hidden",
        }}
      >
        {/* Particle wave — full-bleed, painted first so type sits on top */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={waveSrc}
          alt=""
          width={W}
          height={H}
          style={{ position: "absolute", top: 0, left: 0 }}
        />

        {/* Soft paper halo to lift the centered headline off the wave */}
        <div
          style={{
            position: "absolute",
            top: 78,
            left: W / 2 - 660,
            width: 1320,
            height: 300,
            background:
              "radial-gradient(ellipse at center, rgba(255,255,255,0.92) 0%, rgba(255,255,255,0.78) 42%, rgba(255,255,255,0) 72%)",
          }}
        />

        {/* Headline — centered, Instrument Serif italic. "taste" in coral. */}
        <div
          style={{
            position: "absolute",
            top: 96,
            left: 0,
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            fontFamily: serif,
            fontStyle: "italic",
          }}
        >
          <div style={{ fontSize: 78, lineHeight: 1, color: INK }}>
            AI-powered products,
          </div>
          <div style={{ display: "flex", fontSize: 78, lineHeight: 1.06, marginTop: 4, color: INK }}>
            <span>designed with</span>
            <span style={{ color: CORAL, marginLeft: 24 }}>taste</span>
          </div>
          <div style={{ width: 84, height: 5, background: CORAL, marginTop: 22 }} />
        </div>

        {/* Brand lockup — top-right, inset from the edge so a zoom-to-fill
            crop in LinkedIn's editor can't clip it. */}
        <div
          style={{
            position: "absolute",
            top: 40,
            right: 96,
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-end",
            fontFamily: fonts ? "Hanken Grotesk" : undefined,
          }}
        >
          {/* Soft paper halo behind the lockup */}
          <div
            style={{
              position: "absolute",
              top: -28,
              right: -96,
              width: 540,
              height: 180,
              background:
                "radial-gradient(ellipse at 72% 38%, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.7) 45%, rgba(255,255,255,0) 75%)",
            }}
          />
          {wordmarkSrc ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={wordmarkSrc} alt="Thomas Ninh" width={336} height={50} />
          ) : (
            <div style={{ display: "flex", fontSize: 40, fontWeight: 800, color: INK }}>
              Thomas Ninh
            </div>
          )}
          <div
            style={{
              marginTop: 11,
              fontSize: 17,
              fontWeight: 600,
              letterSpacing: 5,
              color: GRAPHITE,
            }}
          >
            {eyebrow}
          </div>
        </div>
      </div>
    ),
    { width: W, height: H, fonts },
  );
}
