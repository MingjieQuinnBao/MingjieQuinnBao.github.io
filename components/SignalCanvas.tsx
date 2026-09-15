"use client";
import { useEffect, useRef, useState } from "react";
export default function SignalCanvas({
  compact = false,
}: {
  compact?: boolean;
}) {
  const ref = useRef<HTMLCanvasElement>(null);
  const [paused, setPaused] = useState(false);
  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    let frame = 0,
      time = 0,
      previous = 0,
      mode = "research",
      pointer = 0.5,
      visible = true;
    let width = 1,
      height = 1;
    const resize = () => {
      width = canvas.clientWidth;
      height = canvas.clientHeight;
      const dpr = Math.min(devicePixelRatio, 2);
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      draw();
    };
    const draw = () => {
      ctx.clearRect(0, 0, width, height);
      ctx.strokeStyle = "#ffffff12";
      ctx.lineWidth = 1;
      for (let x = 0; x < width; x += 64) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }
      for (let y = 0; y < height; y += 50) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }
      const layers = mode === "about" ? 3 : mode === "writing" ? 8 : 19;
      for (let layer = 0; layer < layers; layer++) {
        ctx.beginPath();
        ctx.strokeStyle =
          layer === Math.floor(layers / 2)
            ? "#c1ef58"
            : `rgba(203,211,187,${0.16 + (layer / layers) * 0.25})`;
        ctx.lineWidth = layer === Math.floor(layers / 2) ? 1.7 : 0.8;
        for (let x = 0; x <= width; x += mode === "build" ? 18 : 3) {
          const u = x / width,
            envelope = Math.pow(Math.sin(u * Math.PI), 2);
          const wave =
            Math.sin(u * (mode === "music" ? 65 : 29) + time + layer * 0.16) *
            Math.cos(u * 9 - time * 0.35 + layer * 0.08);
          const y =
            height / 2 +
            wave *
              envelope *
              height *
              (mode === "about" ? 0.12 : 0.32) *
              (0.7 + pointer * 0.5) +
            (layer - layers / 2) * 3;
          if (x === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.stroke();
      }
    };
    const tick = (stamp: number) => {
      if (stamp - previous > 40 && visible && !document.hidden) {
        if (!media.matches && !paused) time += 0.017;
        draw();
        previous = stamp;
      }
      if (!media.matches && !paused) frame = requestAnimationFrame(tick);
    };
    const start = () => {
      cancelAnimationFrame(frame);
      draw();
      if (!media.matches && !paused) frame = requestAnimationFrame(tick);
    };
    const change = (event: Event) => {
      mode = (event as CustomEvent<string>).detail;
      draw();
    };
    const move = (event: PointerEvent) => {
      if (!media.matches && !paused)
        pointer = (event.clientX - canvas.getBoundingClientRect().left) / width;
    };
    const observer = new ResizeObserver(resize);
    observer.observe(canvas);
    const intersection = new IntersectionObserver((entries) => {
      visible = entries[0].isIntersecting;
    });
    intersection.observe(canvas);
    window.addEventListener("signal-mode", change);
    canvas.addEventListener("pointermove", move);
    media.addEventListener("change", start);
    start();
    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
      intersection.disconnect();
      window.removeEventListener("signal-mode", change);
      canvas.removeEventListener("pointermove", move);
      media.removeEventListener("change", start);
    };
  }, [paused]);
  return (
    <div className={`signal-panel ${compact ? "compact" : ""}`}>
      <div className="signal-caption">
        <span>FIG. 01 — A TRANSLATION IN PROGRESS</span>
        <span aria-hidden="true">↗ LIVE TRACE</span>
      </div>
      <canvas ref={ref} aria-label="Abstract layered signal trace" role="img" />
      <div className="signal-bottom">
        <span>PHYSICAL SIGNAL ≠ PERCEIVED SIGNAL</span>
        <button onClick={() => setPaused(!paused)} aria-pressed={paused}>
          {paused ? "Resume motion" : "Pause motion"}
        </button>
      </div>
    </div>
  );
}
