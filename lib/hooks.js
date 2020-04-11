import { useEffect, useRef, useState } from "react";
import moment from "moment";

export const useClockDigit = seconds => {
  const digit1 = useRef(null);
  const digit2 = useRef(null);
  const digit3 = useRef(null);
  const digit4 = useRef(null);

  useEffect(() => {
    let flipClockInterval = setInterval(function() {
      seconds--;
      const formatted = moment.utc(seconds * 1000).format("mm:ss");

      const minute1 = formatted[0];
      const minute2 = formatted[1];
      const second1 = formatted[3];
      const second2 = formatted[4];

      digit1.current.style.transform = `translateY(-${9 - minute1}0%)`;
      digit1.current.style.transitionDuration = `${
        minute1 === "9" ? 200 : 500
      }ms`;

      digit2.current.style.transform = `translateY(-${9 - minute2}0%)`;
      digit2.current.style.transitionDuration = `${
        minute2 === "9" ? 200 : 500
      }ms`;

      digit3.current.style.transform = `translateY(-${9 - second1}0%)`;
      digit3.current.style.transitionDuration = `${
        second1 === "9" ? 200 : 500
      }ms`;

      digit4.current.style.transform = `translateY(-${9 - second2}0%)`;
      digit4.current.style.transitionDuration = `${
        second2 === "9" ? 200 : 500
      }ms`;

      if (seconds < 0) {
        clearInterval(flipClockInterval);
      }
    }, 1000);

    return () => {
      clearInterval(flipClockInterval);
    };
  }, [seconds]);

  return { digit1, digit2, digit3, digit4 };
};
