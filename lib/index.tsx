import * as React from "react";
import { useMemo } from "react";
import { CountdownSeparator, FlipclockStyled } from "./styled";
import { useClockDigit } from "./hooks";
import CountdownTimerItem from "./CountdownTimerItem";

interface FlipclockProps {
  dark?: boolean;
  seconds: number;
  fontSize?: number;
}
const Flipclock: React.FC<FlipclockProps> = ({ dark, seconds, fontSize }) => {
  const duration = useMemo(
    () =>
      seconds > 24 * 60 * 60 ? "days" : seconds > 3600 ? "hours" : "seconds",
    [seconds]
  );
  const {
    day1TranslateY,
    day2TranslateY,
    day3TranslateY,
    hour1TranslateY,
    hour2TranslateY,
    minute1TranslateY,
    minute2TranslateY,
    second1TranslateY,
    second2TranslateY,
  } = useClockDigit({ seconds, duration });

  return (
    <FlipclockStyled dark={dark} fontSize={fontSize}>
      {duration === "days" && (
        <>
          <CountdownTimerItem translateY={day1TranslateY} />
          <CountdownTimerItem translateY={day2TranslateY} />
          <CountdownTimerItem translateY={day3TranslateY} />
          <CountdownSeparator>:</CountdownSeparator>
        </>
      )}
      {(duration === "days" || duration === "hours") && (
        <>
          <CountdownTimerItem translateY={hour1TranslateY} />
          <CountdownTimerItem translateY={hour2TranslateY} />
          <CountdownSeparator>:</CountdownSeparator>
        </>
      )}
      <CountdownTimerItem translateY={minute1TranslateY} />
      <CountdownTimerItem translateY={minute2TranslateY} />
      <CountdownSeparator>:</CountdownSeparator>
      <CountdownTimerItem translateY={second1TranslateY} />
      <CountdownTimerItem translateY={second2TranslateY} />
    </FlipclockStyled>
  );
};

export default Flipclock;
