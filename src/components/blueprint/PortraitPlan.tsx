import { Wall } from "./Wall";
import { Door } from "./Door";
import { RoomLabel } from "./RoomLabel";
import { Pin } from "./Pin";
import { BLUEPRINT_THEME } from "./theme";
import type { OpenHandler } from "../../types";
interface PlanProps {
  onOpen: OpenHandler;
}
export function PortraitPlan({ onOpen }: PlanProps) {
  return (
    <svg
      viewBox="0 0 560 900"
      className="w-full h-full"
      preserveAspectRatio="xMidYMid meet"
    >
      <rect
        x="30"
        y="30"
        width="500"
        height="840"
        fill={BLUEPRINT_THEME.fill}
        stroke={BLUEPRINT_THEME.wall}
        strokeWidth="7"
      />
      <Wall x1="30" y1="320" x2="380" y2="320" />
      <Wall x1="430" y1="320" x2="530" y2="320" />
      <Wall x1="230" y1="550" x2="530" y2="550" />
      <Wall x1="30" y1="550" x2="180" y2="550" />
      <Wall x1="380" y1="30" x2="380" y2="230" />
      <Door x={427} y={320} rotate={180} w={50} />
      <Door x={180} y={550} rotate={0} w={50} />
      <Door x={377} y={235} rotate={90} w={80} />
      <RoomLabel x={205} y={150} label="About me" />
      <RoomLabel x={455} y={140} label="Skills" />
      <RoomLabel x={280} y={390} label="Works" />
      <RoomLabel x={280} y={605} label="Contact" />
      <Pin cx={205} cy={190} id="about" name="About me" onOpen={onOpen} />
      <Pin cx={455} cy={80} id="skills" name="Skills" onOpen={onOpen} />
      <Pin cx={280} cy={440} id="works" name="Works" onOpen={onOpen} />
      <Pin cx={280} cy={650} id="contact" name="Contact" onOpen={onOpen} />
    </svg>
  );
}
