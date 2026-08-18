import { Wall } from "./Wall";
import { Door } from "./Door";
import { RoomLabel } from "./RoomLabel";
import { Pin } from "./Pin";
import { BLUEPRINT_THEME } from "./theme";
import type { OpenHandler } from "../../types";
interface PlanProps {
  onOpen: OpenHandler;
}
export function LandscapePlan({ onOpen }: PlanProps) {
  return (
    <svg
      viewBox="0 0 900 560"
      className="w-full h-full"
      preserveAspectRatio="xMidYMid meet"
    >
      <rect
        x="30"
        y="30"
        width="840"
        height="500"
        fill={BLUEPRINT_THEME.fill}
        stroke={BLUEPRINT_THEME.wall}
        strokeWidth="7"
      />
      <Wall x1="330" y1="30" x2="330" y2="230" />
      <Wall x1="330" y1="280" x2="330" y2="530" />
      <Wall x1="600" y1="30" x2="600" y2="220" />
      <Wall x1="600" y1="270" x2="600" y2="530" />
      <Wall x1="330" y1="290" x2="600" y2="290" />
      <Wall x1="650" y1="290" x2="870" y2="290" />
      <Door x={330} y={250} rotate={90} w={28} />
      <Door x={600} y={240} rotate={90} w={28} />
      <Door x={450} y={290} rotate={0} w={26} />
      <Door x={760} y={290} rotate={0} w={26} />
      <RoomLabel x={180} y={260} label="Skills" sub="work area" />
      <RoomLabel x={735} y={410} label="For Friends" sub="open kitchen" />
      <RoomLabel x={465} y={140} label="About" sub="bedroom" />
      <RoomLabel x={465} y={410} label="Contact" sub="dining" />
      <RoomLabel x={735} y={160} label="Works" sub="wash room" />
      <Pin cx={180} cy={310} id="skills" name="Skills" onOpen={onOpen} />
      <Pin cx={735} cy={460} id="utils" name="For Friends" onOpen={onOpen} />
      <Pin cx={465} cy={190} id="about" name="About Me" onOpen={onOpen} />
      <Pin cx={465} cy={460} id="contact" name="Contact" onOpen={onOpen} />
      <Pin cx={735} cy={210} id="works" name="Works" onOpen={onOpen} />
    </svg>
  );
}
