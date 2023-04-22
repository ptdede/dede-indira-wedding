import { css } from "@emotion/react";

export const styQuoteIntroWrapper = css`
  background: var(--color-secondary);
  color: var(--color-white);
  padding: 2rem 2rem;

  .quote-title {
    position: relative;
    font-size: 0.8em;
    font-style: italic;
    margin-bottom: 1rem;
    padding-left: 3rem;
    font-weight: 700;

    &::before {
      content: "";
      display: block;
      background: var(--color-white);
      width: 2.7rem;
      height: 1px;
      position: absolute;
      top: 50%;
      left: 0;
      transform: translate(0, -50%);
    }
  }

  .quote-main {
    font-size: 0.9em;
    margin-bottom: 1rem;
    font-weight: 700;
  }

  .quote-translate {
    font-size: 0.8em;
  }
`;
