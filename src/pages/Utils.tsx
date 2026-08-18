import { useMemo, useState } from "react";
import { Plate } from "../components/content/Plate";
import { Bulb } from "../components/forfriends/Bulb";
import { SwitchButton } from "../components/forfriends/SwitchButton";
import { Guestbook } from "../components/forfriends/Guestbook";

// The 4 colors that must be lit. Feel free to reshuffle which colors
// are "required" vs "decoy" — the puzzle logic doesn't care about order.
const REQUIRED = [
  { color: "Red", hex: "#ef4444" },
  { color: "Blue", hex: "#3fa9dc" },
  { color: "Green", hex: "#00b81c" },
  { color: "Amber", hex: "#e8b84b" },
];

const DECOY = [
  { color: "Purple", hex: "#8b5cf6" },
  { color: "Orange", hex: "#f97316" },
  { color: "Teal", hex: "#14b8a6" },
  { color: "Pink", hex: "#ec4899" },
];

function shuffled<T>(arr: T[]): T[] {
  return [...arr].sort(() => Math.random() - 0.5);
}

export function Utils() {
  const [lit, setLit] = useState<Record<string, boolean>>({});

  // Shuffle switch order once per mount so it's not always in the same
  // arrangement, while the required-vs-decoy set stays fixed.
  const switches = useMemo(() => shuffled([...REQUIRED, ...DECOY]), []);

  const solved = REQUIRED.every((b) => lit[b.color]);

  const handleSwitch = (color: string) => {
    const isRequired = REQUIRED.some((b) => b.color === color);
    if (!isRequired) return; // decoy switches do nothing, on purpose

    setLit((prev) => ({ ...prev, [color]: !prev[color] }));
  };

  return (
    <div className="w-full max-w-lg mx-auto">
      <Plate sheet="Off the Record — Sheet F-01" title="For Friends">
        {!solved ? (
          <>
            <p className="font-mono text-xs text-[#5a7a8c] text-center mb-6">
              Light all four bulbs. Not every switch does something.
            </p>

            <div className="flex justify-center gap-6 mb-8">
              {REQUIRED.map((b) => (
                <Bulb key={b.color} color={b.color} hex={b.hex} lit={!!lit[b.color]} />
              ))}
            </div>

            <div className="grid grid-cols-4 gap-x-4 gap-y-5 justify-items-center">
              {switches.map((s) => (
                <SwitchButton
                  key={s.color}
                  color={s.color}
                  hex={s.hex}
                  onClick={() => handleSwitch(s.color)}
                />
              ))}
            </div>
          </>
        ) : (
          <Guestbook />
        )}
      </Plate>
    </div>
  );
}
