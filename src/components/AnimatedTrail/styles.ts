import { css } from "@emotion/react";

export const styTrailWrapper = css`
  position: relative;
  will-change: transform, opacity;
  overflow: hidden;

  > div {
    padding-right: 0.05em;
    overflow: hidden;
  }
`;
