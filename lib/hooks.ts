import { useEffect, useState } from "react";
import moment from "moment";

type Duration = "days" | "hours" | "seconds";

export const useClockDigit = ({
  seconds,
  duration,
}: {
  seconds: number;
  duration: Duration;
}) => {
  const [currentSeconds, setCurrentSeconds] = useState(seconds);
  const [day1TranslateY, setDay1TranslateY] = useState(9);
  const [day2TranslateY, setDay2TranslateY] = useState(9);
  const [day3TranslateY, setDay3TranslateY] = useState(9);
  const [hour1TranslateY, setHour1TranslateY] = useState(9);
  const [hour2TranslateY, setHour2TranslateY] = useState(9);
  const [minute1TranslateY, setMinute1TranslateY] = useState(9);
  const [minute2TranslateY, setMinute2TranslateY] = useState(9);
  const [second1TranslateY, setSecond1TranslateY] = useState(9);
  const [second2TranslateY, setSecond2TranslateY] = useState(9);

  useEffect(() => {
    setCurrentSeconds(seconds);
  }, [seconds]);

  useEffect(() => {
    const flipClockInterval = setInterval(function () {
      if (currentSeconds < 0) {
        clearInterval(flipClockInterval);
        return;
      }

      const formatted = moment
        .utc(currentSeconds * 1000)
        .subtract(1, "days")
        .format("DDDD:HH:mm:ss");

      const day1 = Number(formatted[0]);
      const day2 = Number(formatted[1]);
      const day3 = Number(formatted[2]);

      const hour1 = Number(formatted[4]);
      const hour2 = Number(formatted[5]);

      const minute1 = Number(formatted[7]);
      const minute2 = Number(formatted[8]);

      const second1 = Number(formatted[10]);
      const second2 = Number(formatted[11]);
      if (duration === "days") {
        setDay1TranslateY(9 - day1);
        setDay2TranslateY(9 - day2);
        setDay3TranslateY(9 - day3);
      }
      if (duration === "days" || duration === "hours") {
        setHour1TranslateY(9 - hour1);
        setHour2TranslateY(9 - hour2);
      }
      setMinute1TranslateY(9 - minute1);
      setMinute2TranslateY(9 - minute2);

      setSecond1TranslateY(9 - second1);
      setSecond2TranslateY(9 - second2);

      setCurrentSeconds(currentSeconds - 1);
    }, 1000);

    return () => {
      clearInterval(flipClockInterval);
    };
  }, [currentSeconds, duration]);

  return {
    day1TranslateY,
    day2TranslateY,
    day3TranslateY,
    hour1TranslateY,
    hour2TranslateY,
    minute1TranslateY,
    minute2TranslateY,
    second1TranslateY,
    second2TranslateY,
  };
};
