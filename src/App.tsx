import { useState } from "react";
import { useOrientation } from "./hooks/useOrientation";
import { BlueprintGrid } from "./components/BlueprintGrid";
import { SiteHeader } from "./components/SiteHeader";
import { SiteFooter } from "./components/SiteFooter";
import { LandscapePlan } from "./components/blueprint/LandscapePlan";
import { PortraitPlan } from "./components/blueprint/PortraitPlan";
import { PageOverlay } from "./components/overlay/PageOverlay";
import { PAGES } from "./pages";
import type { Point, RoomId } from "./types";
import "./styles/cursor.css";

interface ActiveRoom {
  id: RoomId;
  origin: Point;
}

export default function App() {
  const isPortrait = useOrientation();
  const [active, setActive] = useState<ActiveRoom | null>(null);

  const handleOpen = (id: RoomId, origin: Point) => setActive({ id, origin });
  const handleClose = () => setActive(null);

  const activePage = active ? PAGES[active.id] : null;
  const ActiveComponent = activePage?.Component;

  return (
    <div className="h-screen w-screen overflow-hidden bg-[#0a1420] text-[#cfe3ee] flex flex-col relative">
      <BlueprintGrid />

      <SiteHeader />

      <div className="relative z-10 flex-1 min-h-0 flex items-center justify-center px-4 pb-4">
        <div className="h-full w-full max-w-4xl flex items-center justify-center">
          {isPortrait ? (
            <PortraitPlan onOpen={handleOpen} />
          ) : (
            <LandscapePlan onOpen={handleOpen} />
          )}
        </div>
      </div>

      <SiteFooter />

      {active && activePage && ActiveComponent && (
        <PageOverlay
          title={`${activePage.title} — room entered`}
          origin={active.origin}
          onClose={handleClose}
        >
          <ActiveComponent />
        </PageOverlay>
      )}
    </div>
  );
}
