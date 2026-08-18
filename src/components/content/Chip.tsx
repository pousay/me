interface ChipProps {
  label: string;
}

/** Small bordered tag — echoes the room labels on the floor plan. */
export function Chip({ label }: ChipProps) {
  return (
    <span className="inline-block font-mono text-xs tracking-wide text-[#cfe3ee] border border-[#2a4459] bg-[#0f1c2e] rounded-sm px-2.5 py-1">
      {label}
    </span>
  );
}
