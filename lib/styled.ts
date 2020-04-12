import styled from "styled-components";
import {
  CountdownTimerItemStyled,
  DigitWrapper
} from "./CountdownTimerItem/styled";

export const CountdownSeparator = styled.span`
  box-sizing: border-box;
`;
export const FlipclockStyled = styled.div<{
  fontSize?: number;
  dark?: boolean;
}>`
  display: flex;
  align-items: center;
  height: ${props => (props.fontSize ? props.fontSize * 1.75 + "px" : "28px")};
  overflow: hidden;
  font-family: "Arial", sans-serif;
  &.dark {
    ${CountdownTimerItemStyled} {
      background: rgba(0, 0, 0, 0.7);
      color: #fff;
    }
    ${CountdownSeparator} {
      color: #fff;
    }
  }
  ${CountdownSeparator} {
    font-size: ${props => (props.fontSize ? props.fontSize + "px" : "16px")};
    padding: ${props => (props.fontSize ? props.fontSize / 16 + "px" : "1px")};
    color: ${props => (props.dark ? "#fff" : undefined)};
  }
  ${CountdownTimerItemStyled} {
    background: ${props => (props.dark ? "rgba(0, 0, 0, 0.7)" : undefined)};
    color: ${props => (props.dark ? "#fff" : undefined)};
    width: ${props =>
      props.fontSize ? props.fontSize * 1.125 + "px" : "18px"};
    ${DigitWrapper} {
      > span {
        height: ${props =>
          props.fontSize ? props.fontSize * 1.75 + "px" : "28px"};
        font-size: ${props =>
          props.fontSize ? props.fontSize + "px" : "16px"};
      }
    }
  }
`;
