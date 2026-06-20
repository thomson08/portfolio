import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

// Branded social-share card for thomasninh.com
// Rendered at build time by next/og (satori) — flexbox + a subset of CSS only.

export const alt =
  "Thomas Ninh — Product Designer & AI Builder. AI-powered products, designed in Figma and shipped to production end to end.";

export const size = { width: 1200, height: 630 };

export const contentType = "image/png";

// Brand palette (mirrors app/globals.css @theme)
const PAPER = "#f3f2f0";
const INK = "#0e0e0f";
const GRAPHITE = "#7b7b7b";
const CORAL = "#ff5436";

// Fetch a Google font as raw TTF so satori can embed it. Requesting the css2
// endpoint with a plain (non-browser) UA returns truetype rather than woff2.
async function loadGoogleFont(family: string, weight: number, text: string) {
  const url = `https://fonts.googleapis.com/css2?family=${family}:wght@${weight}&text=${encodeURIComponent(
    text,
  )}`;
  const css = await (await fetch(url)).text();
  const src = css.match(
    /src: url\((.+?)\) format\('(?:opentype|truetype)'\)/,
  )?.[1];
  if (!src) throw new Error(`Could not load font ${family}`);
  return (await fetch(src)).arrayBuffer();
}

export default async function Image() {
  const headline = "Thomas Ninh";
  const roles = "Product Designer · Software Engineer · AI Builder";
  const tagline =
    "AI-powered products, designed in Figma and shipped to production end to end.";
  const eyebrow = "THOMASNINH.COM";
  const glyphs = `${headline}${roles}${tagline}${eyebrow}`;

  // Portrait reused from the live hero. Inlined as a data URL (Node runtime).
  const portraitData = await readFile(
    join(process.cwd(), "public/portrait.png"),
  );
  const portraitSrc = `data:image/png;base64,${portraitData.toString("base64")}`;

  // Fonts are best-effort: fall back to the next/og default if the network
  // is unavailable so the build never fails on the OG image.
  let fonts:
    | { name: string; data: ArrayBuffer; weight: 400 | 600 | 800; style: "normal" }[]
    | undefined;
  // SVG wordmark mirroring the hero ("Thomas" outlined, "Ninh" solid). Built
  // as an SVG image because satori can't paint CSS text-stroke; resvg renders
  // stroked vector text. Null if fonts fail to load → solid-text fallback.
  let wordmarkSrc: string | null = null;
  try {
    const [regular, semibold, extrabold] = await Promise.all([
      loadGoogleFont("Hanken+Grotesk", 400, glyphs),
      loadGoogleFont("Hanken+Grotesk", 600, glyphs),
      loadGoogleFont("Hanken+Grotesk", 800, glyphs),
    ]);
    fonts = [
      { name: "Hanken Grotesk", data: regular, weight: 400, style: "normal" },
      { name: "Hanken Grotesk", data: semibold, weight: 600, style: "normal" },
      { name: "Hanken Grotesk", data: extrabold, weight: 800, style: "normal" },
    ];

    const fontB64 = Buffer.from(new Uint8Array(extrabold)).toString("base64");
    const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="780" height="150" viewBox="0 0 780 150">
  <style>
    @font-face { font-family:'HK'; font-weight:800; src:url(data:font/ttf;base64,${fontB64}) format('truetype'); }
    text { font-family:'HK'; font-weight:800; font-size:118px; letter-spacing:-4px; }
  </style>
  <text x="3" y="116">
    <tspan fill="none" stroke="${INK}" stroke-width="2">Thomas</tspan>
    <tspan dx="26" fill="${INK}">Ninh</tspan>
  </text>
</svg>`;
    wordmarkSrc = `data:image/svg+xml;base64,${Buffer.from(svg).toString("base64")}`;
  } catch {
    fonts = undefined;
    wordmarkSrc = null;
  }

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          background: PAPER,
          fontFamily: fonts ? "Hanken Grotesk" : undefined,
          position: "relative",
        }}
      >
        {/* Coral accent rails — inset from BOTH edges and mirrored so the
            framing survives LinkedIn's center-crop of the wide card (which
            shaves the outer ~15–20% on narrow grid layouts). Both rails sit
            at the safe-zone boundary (≈x:120 / ≈x:1062). The right rail is
            painted first so the portrait cut-out renders on top of it,
            letting coral peek through the figure's transparent negative
            space rather than striping across him. */}
        <div
          style={{
            position: "absolute",
            top: 0,
            right: 120,
            width: 18,
            height: "100%",
            background: CORAL,
          }}
        />
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 120,
            width: 18,
            height: "100%",
            background: CORAL,
          }}
        />

        {/* Text column — all critical copy kept inside the center safe zone
            (≈x:156 → x:740) so nothing important is lost to the crop. */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            padding: "72px 60px 72px 156px",
            width: 760,
            height: "100%",
          }}
        >
          <div
            style={{
              fontSize: 22,
              letterSpacing: 6,
              fontWeight: 600,
              color: GRAPHITE,
            }}
          >
            {eyebrow}
          </div>

          <div style={{ display: "flex", flexDirection: "column" }}>
            {/* Mirrors the hero: "Thomas" outlined, "Ninh" solid ink */}
            {wordmarkSrc ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={wordmarkSrc} alt="Thomas Ninh" width={560} height={108} />
            ) : (
              <div
                style={{
                  fontSize: 116,
                  fontWeight: 800,
                  letterSpacing: -4,
                  lineHeight: 1,
                  display: "flex",
                }}
              >
                <span style={{ color: INK }}>Thomas</span>
                <span style={{ color: CORAL, marginLeft: 28 }}>Ninh</span>
              </div>
            )}
            <div
              style={{
                marginTop: 28,
                fontSize: 30,
                fontWeight: 600,
                color: INK,
              }}
            >
              {roles}
            </div>
            <div
              style={{
                marginTop: 22,
                fontSize: 26,
                lineHeight: 1.35,
                color: GRAPHITE,
                maxWidth: 600,
              }}
            >
              {tagline}
            </div>
          </div>

          <div style={{ display: "flex", alignItems: "center" }}>
            <div
              style={{
                width: 12,
                height: 12,
                borderRadius: 12,
                background: CORAL,
                marginRight: 12,
              }}
            />
            <div style={{ fontSize: 20, fontWeight: 600, color: INK }}>
              Available for new work
            </div>
          </div>
        </div>

        {/* Portrait column — scaled up and top-anchored so the clasped
            hands fall below the card edge and get clipped, then faded out. */}
        <div
          style={{
            display: "flex",
            flex: 1,
            height: "100%",
            position: "relative",
            justifyContent: "center",
            alignItems: "flex-start",
            overflow: "hidden",
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={portraitSrc}
            alt=""
            height={880}
            style={{ objectFit: "contain", objectPosition: "top" }}
          />
          {/* Bottom fade blends the cropped portrait into the paper */}
          <div
            style={{
              position: "absolute",
              bottom: 0,
              left: 0,
              width: "100%",
              height: 240,
              background: `linear-gradient(to bottom, rgba(243,242,240,0), ${PAPER})`,
            }}
          />
        </div>
      </div>
    ),
    { ...size, fonts },
  );
}
