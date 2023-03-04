import { css } from "@emotion/css";

import media from "src/helpers/media-query";

export const styWrapper = css`
  position: relative;
  height: 100vh;
  background-color: transparent;
  margin: auto;
  display: flex;
  justify-content: center;
  overflow: hidden;

  .left,
  .right {
    position: relative;
    flex: 1;
    z-index: 0;
  }
`;

export const styContainer = css`
  position: relative;
  background-color: white;
  width: 100%;
  max-width: 100%;
  border-radius: 0;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 50px;
  overflow: scroll;
  z-index: 1;
  flex-shrink: 0;

  -ms-overflow-style: none; /* Internet Explorer 10+ */
  scrollbar-width: none; /* Firefox */
  ::-webkit-scrollbar {
    display: none; /* Safari and Chrome */
  }

  ${media.tab`
    margin: 24px;
    max-width: 390px;
    border-radius: 12px;
  `}
`;

export const styImageDecorator = (
  orientation: "left" | "right" = "left"
) => css`
  position: absolute;
  bottom: 0;
  right: -6em;
  width: 400px;
  transform: rotate(25deg);

  ${orientation === "right" &&
  css`
    right: 0;
    left: -6em;
    transform: rotate(-205deg);
  `}
`;
