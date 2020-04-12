import * as React from "react";
import { CountdownTimerItemStyled, DigitWrapper } from "./styled";

interface CountdownTimerItem {
  translateY: number;
}
const CountdownTimerItem: React.FC<CountdownTimerItem> = ({ translateY }) => (
  <CountdownTimerItemStyled>
    <DigitWrapper
      style={{
        transform: `translateY(-${translateY}0%`,
        transitionDuration: `${translateY === 0 ? 200 : 500}ms`
      }}
    >
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
    </DigitWrapper>
  </CountdownTimerItemStyled>
);

export default CountdownTimerItem;
