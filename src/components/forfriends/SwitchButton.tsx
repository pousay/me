interface SwitchButtonProps {
  color: string;
  hex: string;
  onClick: () => void;
}

/**
 * A single colored switch. Purely a trigger — it doesn't show on/off
 * state itself, since several switches (the decoys) never do anything
 * and shouldn't visually imply they're "armed."
 */
export function SwitchButton({ color, hex, onClick }: SwitchButtonProps) {
  return (
    <button
      onClick={onClick}
      aria-label={`${color} switch`}
      className="group flex flex-col items-center gap-1.5"
    >
      <span
        className="w-9 h-9 rounded-sm border-2 transition-transform duration-150 group-active:scale-90 group-hover:brightness-125"
        style={{ backgroundColor: hex, borderColor: "#0f1c2e" }}
      />
      <span className="font-mono text-[9px] tracking-[0.1em] uppercase text-[#3a5568] group-hover:text-[#5a7a8c] transition-colors">
        {color}
      </span>
    </button>
  );
}
