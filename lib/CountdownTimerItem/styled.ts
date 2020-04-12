import styled from "styled-components";
const materialCubicBezier = "cubic-bezier(0.4, 0.0, 0.2, 1)";
export const CountdownTimerItemStyled = styled.div`
  background: rgba(0, 0, 0, 0.2);
  border-radius: 4px;
  overflow: hidden;
  height: 100%;
  position: relative;
  box-sizing: border-box;
  margin: 0 2px;
`;

export const DigitWrapper = styled.div`
  position: absolute;
  width: 100%;
  transition: all 500ms ${materialCubicBezier};
  transform: translateY(-90%);
  will-change: transform;
  > span {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
