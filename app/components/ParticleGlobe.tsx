"use client";

import { useEffect, useRef } from "react";

// Rotating sphere of sparkle particles, drawn on a 2D canvas.
// White dots on a transparent background — sits on dark sections.
export default function ParticleGlobe({
  className = "",
}: {
  className?: string;
}) {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    let w = 0,
      h = 0,
      cx = 0,
      cy = 0,
      R = 0;

    function resize() {
      const rect = canvas!.getBoundingClientRect();
      w = rect.width;
      h = rect.height;
      canvas!.width = Math.max(1, Math.floor(w * dpr));
      canvas!.height = Math.max(1, Math.floor(h * dpr));
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);
      cx = w / 2;
      cy = h / 2;
      R = Math.min(w, h) * 0.4;
    }
    resize();
    window.addEventListener("resize", resize);

    // Even point distribution on a sphere (Fibonacci spiral)
    const N = 1600;
    const golden = Math.PI * (1 + Math.sqrt(5));
    const pts = Array.from({ length: N }, (_, i) => {
      const phi = Math.acos(1 - (2 * (i + 0.5)) / N);
      const theta = golden * i;
      return {
        x: Math.sin(phi) * Math.cos(theta),
        y: Math.sin(phi) * Math.sin(theta),
        z: Math.cos(phi),
        tw: Math.random() * Math.PI * 2,
        disp: 0.25 + Math.random() * 0.85, // how far this particle spreads
      };
    });

    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const tilt = 0.42;
    const cosT = Math.cos(tilt);
    const sinT = Math.sin(tilt);
    let raf = 0;
    let t = reduce ? 0.6 : 0;

    function draw() {
      t += 0.0011;
      ctx!.clearRect(0, 0, w, h);
      const cosA = Math.cos(t);
      const sinA = Math.sin(t);

      // breathing: particles spread outward and pull back in
      const bt = reduce ? Math.PI / 2 : t * 13;
      const breath = Math.sin(bt) * 0.5 + 0.5; // 0 (tight) .. 1 (spread)
      const breathVel = reduce ? 0 : Math.cos(bt); // motion direction/speed
      const sign = breathVel >= 0 ? 1 : -1;

      ctx!.lineCap = "round";

      for (const p of pts) {
        // unit-sphere rotation (depth/shading stays in [0,1])
        const ux = p.x * cosA - p.z * sinA;
        const uz = p.x * sinA + p.z * cosA;
        const uy = p.y;
        const uy2 = uy * cosT - uz * sinT;
        const uz2 = uy * sinT + uz * cosT;

        const depth = (uz2 + 1) / 2; // 0 = back, 1 = front
        const persp = 0.62 + depth * 0.55;
        const rf = 1 + p.disp * breath * 0.85; // radial expansion (screen only)
        const sx = cx + ux * rf * R * persp;
        const sy = cy + uy2 * rf * R * persp;

        const twinkle = reduce ? 1 : 0.55 + 0.45 * Math.sin(t * 32 + p.tw);
        const alpha = (0.1 + depth * 0.9) * twinkle;
        const size = Math.max(0.2, 0.35 + depth * 1.5);
        const color = "#ffffff";

        // motion streak along the radial direction while spreading/contracting
        const streak = Math.abs(breathVel) * p.disp * depth * 17;
        if (streak > 1.3) {
          let dx = sx - cx;
          let dy = sy - cy;
          const d = Math.hypot(dx, dy) || 1;
          dx /= d;
          dy /= d;
          ctx!.globalAlpha = alpha * 0.45;
          ctx!.strokeStyle = color;
          ctx!.lineWidth = size;
          ctx!.beginPath();
          ctx!.moveTo(sx - dx * streak * sign, sy - dy * streak * sign);
          ctx!.lineTo(sx, sy);
          ctx!.stroke();
        }

        ctx!.globalAlpha = alpha;
        ctx!.beginPath();
        ctx!.arc(sx, sy, size, 0, Math.PI * 2);
        ctx!.fillStyle = color;
        ctx!.fill();
      }
      ctx!.globalAlpha = 1;
      if (!reduce) raf = requestAnimationFrame(draw);
    }
    draw();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return <canvas ref={ref} className={className} aria-hidden="true" />;
}
