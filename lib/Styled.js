import styled from "styled-components";

export const FlipclockStyled = styled.div`
  display: flex;
  align-items: center;
  //width: 2em;
  //height: 1em;
  height: ${props => (props.fontSize ? props.fontSize * 1.75 + "px" : "28px")};
  overflow: hidden;
  font-family: "Arial", sans-serif;
  &.dark {
    .countdown-timer-item {
      background: rgba(0, 0, 0, 0.7);
      color: #fff;
    }
    .countdown-separator {
      color: #fff;
    }
  }
  .countdown-separator {
    font-size: ${props => (props.fontSize ? props.fontSize + "px" : "16px")};
    padding: ${props => (props.fontSize ? props.fontSize / 16 + "px" : "1px")};
    box-sizing: border-box;
  }
  .countdown-timer-item {
    background: rgba(0, 0, 0, 0.2);
    border-radius: 4px;
    overflow: hidden;
    width: ${props =>
      props.fontSize ? props.fontSize * 1.125 + "px" : "18px"};
    height: 100%;
    //padding: 2px;
    position: relative;
    box-sizing: border-box;
    margin: 0 2px;
    .digit-wrapper {
      position: absolute;
      width: 100%;
      transition: all 500ms $materialCubicBezier;
      transform: translateY(-90%);
      will-change: transform;
      > span {
        position: relative;
        //height: 1em;
        height: ${props =>
          props.fontSize ? props.fontSize * 1.75 + "px" : "28px"};
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: ${props =>
          props.fontSize ? props.fontSize + "px" : "16px"};
      }
    }
  }
`;
