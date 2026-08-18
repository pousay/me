import { useEffect, useRef, useState } from "react";
import type { Point } from "../../types";

interface LightningBoltProps {
  origin: Point;
  onTraced?: () => void;
}

/**
 * Draws a single jagged bolt from `origin` (the pin the user clicked, in
 * screen coordinates) to the center of the viewport, then reports back
 * once it has finished tracing so the caller can move to the next phase.
 */
export function LightningBolt({ origin, onTraced }: LightningBoltProps) {
  const pathRef = useRef<SVGPathElement | null>(null);
  const [d, setD] = useState<string>("");
  const [length, setLength] = useState<number>(0);
  const [drawn, setDrawn] = useState<boolean>(false);

  useEffect(() => {
    const target: Point = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    setD(buildJaggedPath(origin, target));
  }, [origin]);

  // Once the path is in the DOM, measure it and kick off the draw transition.
  useEffect(() => {
    if (!d || !pathRef.current) return;
    const total = pathRef.current.getTotalLength();
    setLength(total);

    const raf = requestAnimationFrame(() => setDrawn(true));
    const timer = setTimeout(() => onTraced?.(), 280);
    return () => {
      cancelAnimationFrame(raf);
      clearTimeout(timer);
    };
  }, [d]);

  if (!d) return null;

  return (
    <svg
      className="fixed inset-0 z-30 pointer-events-none"
      width="100%"
      height="100%"
    >
      <path
        ref={pathRef}
        d={d}
        fill="none"
        stroke="#e8b84b"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="bp-bolt-path"
        style={{
          strokeDasharray: length,
          strokeDashoffset: drawn ? 0 : length,
        }}
      />
    </svg>
  );
}

function buildJaggedPath(origin: Point, target: Point): string {
  const segments = 5;
  const points: Point[] = [origin];

  for (let i = 1; i < segments; i++) {
    const t = i / segments;
    const baseX = origin.x + (target.x - origin.x) * t;
    const baseY = origin.y + (target.y - origin.y) * t;

    // jitter perpendicular to the origin->target direction
    const dx = target.x - origin.x;
    const dy = target.y - origin.y;
    const len = Math.hypot(dx, dy) || 1;
    const nx = -dy / len;
    const ny = dx / len;
    const jitter = (Math.random() - 0.5) * 40;

    points.push({ x: baseX + nx * jitter, y: baseY + ny * jitter });
  }

  points.push(target);

  return points
    .map((p, i) => `${i === 0 ? "M" : "L"} ${p.x.toFixed(1)} ${p.y.toFixed(1)}`)
    .join(" ");
}
