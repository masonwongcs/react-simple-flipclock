import * as React from "react";
import PropTypes from "prop-types";
import { FlipclockStyled } from "./Styled";
import { useClockDigit } from "./hooks";

const Flipclock = ({ dark, seconds, fontSize }) => {
  const duration =
    seconds > 24 * 60 * 60 ? "days" : seconds > 3600 ? "hours" : "seconds";
  const {
    day1Ref,
    day2Ref,
    day3Ref,
    hour1Ref,
    hour2Ref,
    minute1Ref,
    minute2Ref,
    second1Ref,
    second2Ref
  } = useClockDigit({ seconds, duration });

  const renderDigit = () => {
    switch (duration) {
      case "days":
        return (
          <>
            <div className="countdown-timer-item">
              <div className="digit-wrapper" ref={day1Ref}>
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
            </div>
            <div className="countdown-timer-item">
              <div className="digit-wrapper" ref={day2Ref}>
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
            </div>
            <div className="countdown-timer-item">
              <div className="digit-wrapper" ref={day3Ref}>
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
            </div>
            <span>:</span>
            <div className="countdown-timer-item">
              <div className="digit-wrapper" ref={hour1Ref}>
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
            </div>
            <div className="countdown-timer-item">
              <div className="digit-wrapper" ref={hour2Ref}>
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
            </div>
            <span>:</span>
            <div className="countdown-timer-item">
              <div className="digit-wrapper" ref={minute1Ref}>
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
            </div>
            <div className="countdown-timer-item">
              <div className="digit-wrapper" ref={minute2Ref}>
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
            </div>
            <span>:</span>
            <div className="countdown-timer-item">
              <div className="digit-wrapper" ref={second1Ref}>
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
            </div>
            <div className="countdown-timer-item">
              <div className="digit-wrapper" ref={second2Ref}>
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
            </div>
          </>
        );
      case "hours":
        return (
          <>
            <div className="countdown-timer-item">
              <div className="digit-wrapper" ref={hour1Ref}>
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
            </div>
            <div className="countdown-timer-item">
              <div className="digit-wrapper" ref={hour2Ref}>
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
            </div>
            <span>:</span>
            <div className="countdown-timer-item">
              <div className="digit-wrapper" ref={minute1Ref}>
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
            </div>
            <div className="countdown-timer-item">
              <div className="digit-wrapper" ref={minute2Ref}>
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
            </div>
            <span>:</span>
            <div className="countdown-timer-item">
              <div className="digit-wrapper" ref={second1Ref}>
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
            </div>
            <div className="countdown-timer-item">
              <div className="digit-wrapper" ref={second2Ref}>
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
            </div>
          </>
        );
      case "seconds":
      default:
        return (
          <>
            <div className="countdown-timer-item">
              <div className="digit-wrapper" ref={minute1Ref}>
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
            </div>
            <div className="countdown-timer-item">
              <div className="digit-wrapper" ref={minute2Ref}>
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
            </div>
            <span>:</span>
            <div className="countdown-timer-item">
              <div className="digit-wrapper" ref={second1Ref}>
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
            </div>
            <div className="countdown-timer-item">
              <div className="digit-wrapper" ref={second2Ref}>
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
            </div>
          </>
        );
    }
  };
  return (
    <FlipclockStyled className={`countdown-timer ${dark ? " dark" : ""}`} fontSize={fontSize}>
      {renderDigit()}
    </FlipclockStyled>
  );
};

Flipclock.propTypes = {
  dark: PropTypes.bool,
  seconds: PropTypes.number.isRequired,
  style: PropTypes.object
};

export default Flipclock;
