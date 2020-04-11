import { useEffect, useRef, useState } from "react";
import moment from "moment";

export const useClockDigit = ({ seconds, duration }) => {
  const day1Ref = useRef(null);
  const day2Ref = useRef(null);
  const day3Ref = useRef(null);
  const hour1Ref = useRef(null);
  const hour2Ref = useRef(null);
  const minute1Ref = useRef(null);
  const minute2Ref = useRef(null);
  const second1Ref = useRef(null);
  const second2Ref = useRef(null);

  useEffect(() => {
    let flipClockInterval = setInterval(function() {
      seconds--;
      let formatted = "",
        day1,
        day2,
        day3,
        hour1,
        hour2,
        minute1,
        minute2,
        second1,
        second2;

      switch (duration) {
        case "days":
          formatted = moment
            .utc(seconds * 1000)
            .subtract(1, "days")
            .format("DDD:HH:mm:ss");

          if (formatted.length > 11) {
            day1 = formatted[0];
            day2 = formatted[1];
            day3 = formatted[2];

            hour1 = formatted[4];
            hour2 = formatted[5];

            minute1 = formatted[7];
            minute2 = formatted[8];

            second1 = formatted[10];
            second2 = formatted[11];
          } else if (formatted.length > 10) {
            day1 = "0";
            day2 = formatted[0];
            day3 = formatted[1];

            hour1 = formatted[3];
            hour2 = formatted[4];

            minute1 = formatted[6];
            minute2 = formatted[7];

            second1 = formatted[9];
            second2 = formatted[10];
          } else {
            day1 = "0";
            day2 = "0";
            day3 = formatted[0];

            hour1 = formatted[2];
            hour2 = formatted[3];

            minute1 = formatted[5];
            minute2 = formatted[6];

            second1 = formatted[8];
            second2 = formatted[9];
          }

          day1Ref.current.style.transform = `translateY(-${9 - day1}0%)`;
          day1Ref.current.style.transitionDuration = `${
            minute1 === "9" ? 200 : 500
          }ms`;

          day2Ref.current.style.transform = `translateY(-${9 - day2}0%)`;
          day2Ref.current.style.transitionDuration = `${
            minute1 === "9" ? 200 : 500
          }ms`;

          day3Ref.current.style.transform = `translateY(-${9 - day3}0%)`;
          day3Ref.current.style.transitionDuration = `${
            minute1 === "9" ? 200 : 500
          }ms`;

          hour1Ref.current.style.transform = `translateY(-${9 - hour1}0%)`;
          hour1Ref.current.style.transitionDuration = `${
            minute1 === "9" ? 200 : 500
          }ms`;

          hour2Ref.current.style.transform = `translateY(-${9 - hour2}0%)`;
          hour2Ref.current.style.transitionDuration = `${
            minute1 === "9" ? 200 : 500
          }ms`;

          minute1Ref.current.style.transform = `translateY(-${9 - minute1}0%)`;
          minute1Ref.current.style.transitionDuration = `${
            minute1 === "9" ? 200 : 500
          }ms`;

          minute2Ref.current.style.transform = `translateY(-${9 - minute2}0%)`;
          minute2Ref.current.style.transitionDuration = `${
            minute2 === "9" ? 200 : 500
          }ms`;

          second1Ref.current.style.transform = `translateY(-${9 - second1}0%)`;
          second1Ref.current.style.transitionDuration = `${
            second1 === "9" ? 200 : 500
          }ms`;

          second2Ref.current.style.transform = `translateY(-${9 - second2}0%)`;
          second2Ref.current.style.transitionDuration = `${
            second2 === "9" ? 200 : 500
          }ms`;
          break;
        case "hours":
          formatted = moment.utc(seconds * 1000).format("HH:mm:ss");

          hour1 = formatted[0];
          hour2 = formatted[1];
          minute1 = formatted[3];
          minute2 = formatted[4];
          second1 = formatted[6];
          second2 = formatted[7];

          hour1Ref.current.style.transform = `translateY(-${9 - hour1}0%)`;
          hour1Ref.current.style.transitionDuration = `${
            minute1 === "9" ? 200 : 500
          }ms`;

          hour2Ref.current.style.transform = `translateY(-${9 - hour2}0%)`;
          hour2Ref.current.style.transitionDuration = `${
            minute1 === "9" ? 200 : 500
          }ms`;

          minute1Ref.current.style.transform = `translateY(-${9 - minute1}0%)`;
          minute1Ref.current.style.transitionDuration = `${
            minute1 === "9" ? 200 : 500
          }ms`;

          minute2Ref.current.style.transform = `translateY(-${9 - minute2}0%)`;
          minute2Ref.current.style.transitionDuration = `${
            minute2 === "9" ? 200 : 500
          }ms`;

          second1Ref.current.style.transform = `translateY(-${9 - second1}0%)`;
          second1Ref.current.style.transitionDuration = `${
            second1 === "9" ? 200 : 500
          }ms`;

          second2Ref.current.style.transform = `translateY(-${9 - second2}0%)`;
          second2Ref.current.style.transitionDuration = `${
            second2 === "9" ? 200 : 500
          }ms`;
          break;
        case "seconds":
        default:
          formatted = moment.utc(seconds * 1000).format("mm:ss");

          minute1 = formatted[0];
          minute2 = formatted[1];
          second1 = formatted[3];
          second2 = formatted[4];

          minute1Ref.current.style.transform = `translateY(-${9 - minute1}0%)`;
          minute1Ref.current.style.transitionDuration = `${
            minute1 === "9" ? 200 : 500
          }ms`;

          minute2Ref.current.style.transform = `translateY(-${9 - minute2}0%)`;
          minute2Ref.current.style.transitionDuration = `${
            minute2 === "9" ? 200 : 500
          }ms`;

          second1Ref.current.style.transform = `translateY(-${9 - second1}0%)`;
          second1Ref.current.style.transitionDuration = `${
            second1 === "9" ? 200 : 500
          }ms`;

          second2Ref.current.style.transform = `translateY(-${9 - second2}0%)`;
          second2Ref.current.style.transitionDuration = `${
            second2 === "9" ? 200 : 500
          }ms`;
          break;
      }

      if (seconds < 0) {
        clearInterval(flipClockInterval);
      }
    }, 1000);

    return () => {
      clearInterval(flipClockInterval);
    };
  }, [seconds]);

  return {
    day1Ref,
    day2Ref,
    day3Ref,
    hour1Ref,
    hour2Ref,
    minute1Ref,
    minute2Ref,
    second1Ref,
    second2Ref
  };
};
