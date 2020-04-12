import * as React from "react";
import { useMemo, useEffect } from "react";
import { flipclockStyle } from "./styled";
import { useClockDigit } from "./hooks";
import CountdownTimerItem from "./CountdownTimerItem";

const dynamicStyle = document.createElement("style");
dynamicStyle.type = "text/css";

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

  useEffect(() => {
    const head = document.querySelector("head") as HTMLHeadElement;
    dynamicStyle.innerHTML = flipclockStyle({
      fontSize,
      dark
    });
    head.append(dynamicStyle);
    return () => {
      dynamicStyle.remove();
    };
  }, []);

  const {
    day1TranslateY,
    day2TranslateY,
    day3TranslateY,
    hour1TranslateY,
    hour2TranslateY,
    minute1TranslateY,
    minute2TranslateY,
    second1TranslateY,
    second2TranslateY
  } = useClockDigit({ seconds, duration });

  return (
    <div className="react-simple-flipclock">
      {duration === "days" && (
        <>
          <CountdownTimerItem translateY={day1TranslateY} />
          <CountdownTimerItem translateY={day2TranslateY} />
          <CountdownTimerItem translateY={day3TranslateY} />
          <span className="countdown-separator">:</span>
        </>
      )}
      {(duration === "days" || duration === "hours") && (
        <>
          <CountdownTimerItem translateY={hour1TranslateY} />
          <CountdownTimerItem translateY={hour2TranslateY} />
          <span className="countdown-separator">:</span>
        </>
      )}
      <CountdownTimerItem translateY={minute1TranslateY} />
      <CountdownTimerItem translateY={minute2TranslateY} />
      <span className="countdown-separator">:</span>
      <CountdownTimerItem translateY={second1TranslateY} />
      <CountdownTimerItem translateY={second2TranslateY} />
    </div>
  );
};

export default Flipclock;
