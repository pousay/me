import { BLUEPRINT_THEME } from "./theme";

interface WallProps {
  x1: number | string;
  y1: number | string;
  x2: number | string;
  y2: number | string;
}

export function Wall({ x1, y1, x2, y2 }: WallProps) {
  return (
    <line
      x1={x1}
      y1={y1}
      x2={x2}
      y2={y2}
      stroke={BLUEPRINT_THEME.wall}
      strokeWidth={BLUEPRINT_THEME.wallWidth}
      strokeLinecap="square"
    />
  );
}
