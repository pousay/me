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
      <Wall x1="30" y1="260" x2="380" y2="260" />
      <Wall x1="430" y1="260" x2="530" y2="260" />
      <Wall x1="30" y1="520" x2="530" y2="520" />
      <Wall x1="30" y1="700" x2="530" y2="700" />
      <Wall x1="380" y1="30" x2="380" y2="230" />
      <Door x={200} y={260} rotate={0} w={26} />
      <Door x={405} y={260} rotate={0} w={22} />
      <Door x={200} y={520} rotate={0} w={26} />
      <Door x={200} y={700} rotate={0} w={26} />
      <RoomLabel x={205} y={150} label="About me" />
      <RoomLabel x={455} y={140} label="Skills" />
      <RoomLabel x={280} y={390} label="Works" />
      <RoomLabel x={280} y={605} label="Contact" />
      <RoomLabel x={280} y={760} label="For Friends" />
      <Pin cx={205} cy={190} id="about" name="About me" onOpen={onOpen} />
      <Pin cx={455} cy={180} id="skills" name="Skills" onOpen={onOpen} />
      <Pin cx={280} cy={440} id="works" name="Works" onOpen={onOpen} />
      <Pin cx={280} cy={650} id="contact" name="Contact" onOpen={onOpen} />
      <Pin cx={280} cy={820} id="utils" name="For Friends" onOpen={onOpen} />
    </svg>
  );
}
