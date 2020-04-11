import * as React from "react";
import PropTypes from "prop-types";
import { Flipclock} from "./Styled";
import { useClockDigit } from "./hooks";

const digit = (
  <div className="digit-wrapper">
    <span>9</span>
    <span>8</span>
    <span>7</span>
    <span>6</span>
    <span>5</span>
    <span>4</span>
    <span>3</span>
    <span>2</span>
    <span>1</span>
    <span>0</span>
  </div>
);
const Flipclock = ({ dark, seconds }) => {
  const { digit1, digit2, digit3, digit4 } = useClockDigit(seconds);
  return (
    <Flipclock className={`countdown-timer ${dark ? " dark" : ""}`}>
      <div className="countdown-timer-item minute-1" ref={digit1}>
        {digit}
      </div>
      <div className="countdown-timer-item minute-2" ref={digit2}>
        {digit}
      </div>
      <span>:</span>
      <div className="countdown-timer-item seconds-1" ref={digit3}>
        {digit}
      </div>
      <div className="countdown-timer-item seconds-2" ref={digit4}>
        {digit}
      </div>
    </Flipclock>
  );
};

Flipclock.propTypes = {
  dark: PropTypes.bool,
  seconds: PropTypes.number.isRequired,
  style: PropTypes.object
};

export default Flipclock;
