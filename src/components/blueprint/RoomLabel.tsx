interface RoomLabelProps {
  x: number;
  y: number;
  label: string;
  sub?: string;
}

export function RoomLabel({ x, y, label }: RoomLabelProps) {
  return (
    <text
      x={x}
      y={y}
      textAnchor="middle"
      className="fill-[#5a7a8c] font-mono uppercase select-none"
      style={{ fontSize: 20, letterSpacing: "0.15em" }}
    >
      {label}
    </text>
  );
}
