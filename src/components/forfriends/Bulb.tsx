import { useEffect, useRef, useState } from "react";
import "./forfriends.css";

interface BulbProps {
  color: string;
  hex: string;
  lit: boolean;
}

/**
 * A single bulb. Plays a quick "approve" pop when it turns on and a
 * "disapprove" shake-dim when it turns off, then settles into a plain
 * lit/unlit state.
 */
export function Bulb({ color, hex, lit }: BulbProps) {
  const [animClass, setAnimClass] = useState("");
  const isFirstRender = useRef(true);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    setAnimClass(lit ? "bulb-approve" : "bulb-disapprove");
    const timer = setTimeout(() => setAnimClass(""), 500);
    return () => clearTimeout(timer);
  }, [lit]);

  return (
    <div className="flex flex-col items-center gap-2">
      <div
        className={`w-12 h-12 rounded-full border-2 transition-colors duration-300 ${animClass}`}
        style={{
          backgroundColor: lit ? hex : "#0f1c2e",
          borderColor: hex,
          boxShadow: lit ? `0 0 22px ${hex}, 0 0 8px ${hex}` : "none",
        }}
        aria-label={`${color} bulb ${lit ? "lit" : "unlit"}`}
      />
      <span className="font-mono text-[10px] tracking-[0.15em] uppercase text-[#5a7a8c]">
        {color}
      </span>
    </div>
  );
}
