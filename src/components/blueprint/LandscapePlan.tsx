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
      <Wall x1="270" y1="30" x2="270" y2="230" />
      <Wall x1="270" y1="280" x2="270" y2="530" />
      <Wall x1="600" y1="30" x2="600" y2="220" />
      <Wall x1="600" y1="270" x2="600" y2="530" />
      <Wall x1="650" y1="290" x2="870" y2="290" />
      <Door x={267} y={233} rotate={90} w={45} />
      <Door x={598} y={223} rotate={90} w={45} />
      <Door x={648} y={290} rotate={180} w={50} />
      <RoomLabel x={150} y={260} label="Skills" sub="work area" />
      <RoomLabel x={435} y={240} label="About" sub="bedroom" />
      <RoomLabel x={735} y={410} label="Contact" sub="dining" />
      <RoomLabel x={735} y={160} label="Works" sub="wash room" />
      <Pin cx={150} cy={310} id="skills" name="Skills" onOpen={onOpen} />
      <Pin cx={435} cy={290} id="about" name="About Me" onOpen={onOpen} />
      <Pin cx={735} cy={460} id="contact" name="Contact" onOpen={onOpen} />
      <Pin cx={735} cy={210} id="works" name="Works" onOpen={onOpen} />
    </svg>
  );
}
