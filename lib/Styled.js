import styled from "styled-components";

export const Flipclock = styled.div`
  display: flex;
  align-items: center;
  //width: 2em;
  //height: 1em;
  height: 28px;
  overflow: hidden;
  &.dark {
    .countdown-timer-item {
      background: rgba(0, 0, 0, 0.7);
      color: #fff;
    }
  }
  .countdown-timer-item {
    background: rgba(0, 0, 0, 0.2);
    border-radius: 4px;
    overflow: hidden;
    width: 18px;
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
      > span {
        //height: 1em;
        height: 28px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 16px;
      }
    }
  }
`;
