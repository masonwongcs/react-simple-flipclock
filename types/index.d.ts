import { CSSProperties, ComponentType } from "react";

interface FlipclockProps {
  seconds: number;
  dark?: boolean;
  fontSize?: boolean;
  style?: CSSProperties;
}
declare const Flipclock: ComponentType<FlipclockProps>;

export default Flipclock;
