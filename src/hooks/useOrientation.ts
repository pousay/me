import { useEffect, useState } from "react";

/**
 * Tracks whether the viewport is currently portrait or landscape.
 * Re-evaluates on resize/orientation change.
 */
export function useOrientation(): boolean {
  const [isPortrait, setIsPortrait] = useState<boolean>(
    typeof window !== "undefined"
      ? window.innerHeight >= window.innerWidth
      : true
  );

  useEffect(() => {
    const onResize = () =>
      setIsPortrait(window.innerHeight >= window.innerWidth);

    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return isPortrait;
}
