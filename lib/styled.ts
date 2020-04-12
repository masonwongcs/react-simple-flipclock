export const flipclockStyle = ({
  fontSize,
  dark
}: {
  fontSize?: number;
  dark?: boolean;
}) => {
  return `
    .react-simple-flipclock {
      display: flex;
      align-items: center;
      height: ${fontSize ? fontSize * 1.75 : 28}px;
      overflow: hidden;
      font-family: "Arial", sans-serif;
    }
    .react-simple-flipclock .countdown-separator {
      font-size: ${fontSize ? fontSize : 16}px;
      padding: ${fontSize ? fontSize / 16 : 1}px;
      box-sizing: border-box;
      color: ${dark ? "#fff" : "#000"};
    }
    .react-simple-flipclock .countdown-timer-item {
      background: ${dark ? "rgba(0, 0, 0, 0.7)" : "rgba(0, 0, 0, 0.2)"};
      border-radius: 4px;
      overflow: hidden;
      width: ${fontSize ? fontSize * 1.25 : 18}px;
      height: 100%;
      position: relative;
      box-sizing: border-box;
      margin: 0 2px;
      color: ${dark ? "#fff" : "#000"};
    }
    .react-simple-flipclock .countdown-timer-item .digit-wrapper {
      position: absolute;
      width: 100%;
      transition: all 500ms cubic-bezier(0.4, 0, 0.2, 1);
      transform: translateY(-90%);
      will-change: transform;
    }
    .react-simple-flipclock .countdown-timer-item .digit-wrapper > span {
      position: relative;
      height: ${fontSize ? fontSize * 1.75 : 28}px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: ${fontSize ? fontSize : 16}px;
    }
  `;
};
