import { BLUEPRINT_THEME } from "./theme";

interface DoorProps {
  x: number;
  y: number;
  w?: number;
  rotate?: number;
  flip?: boolean;
}

/**
 * Draws a door leaf + dashed swing arc, positioned at (x, y),
 * matching how doorways are annotated on architectural drawings.
 */
export function Door({ x, y, w = 34, rotate = 0, flip = false }: DoorProps) {
  const scaleX = flip ? -1 : 1;

  return (
    <g transform={`translate(${x} ${y}) rotate(${rotate}) scale(${scaleX} 1)`}>
      <line x1="0" y1="0" x2="0" y2={-w} stroke={BLUEPRINT_THEME.wall} strokeWidth="2" />
      <path
        d={`M 0 0 A ${w} ${w} 0 0 1 ${w} 0`}
        fill="none"
        stroke={BLUEPRINT_THEME.wall}
        strokeWidth="1"
        strokeDasharray="3 3"
        opacity="0.6"
      />
    </g>
  );
}
