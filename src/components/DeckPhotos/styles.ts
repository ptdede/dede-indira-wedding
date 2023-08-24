import { css } from "@emotion/react";

export const styContainer = css`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  height: 100vh;
  justify-content: center;
  overflow: hidden;
`;

export const styDeck = css`
  position: absolute;
  width: 100%;
  height: auto;
  will-change: transform;
  display: flex;
  align-items: center;
  justify-content: center;
  touch-action: none;

  > div {
    background-color: white;
    background-size: auto 85%;
    background-repeat: no-repeat;
    background-position: center center;
    width: 100%;
    height: 100vh;
    will-change: transform;
    border-radius: 10px;
    box-shadow: 0 12.5px 100px -10px rgba(50, 50, 73, 0.4),
      0 10px 10px -10px rgba(50, 50, 73, 0.3);
  }
`;
