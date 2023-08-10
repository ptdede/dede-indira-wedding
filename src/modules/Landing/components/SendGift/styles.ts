import { css } from "@emotion/react";

export const sendGiftWrapper = css`
  background-color: var(--color-secondary);
  padding: 2rem 1.5rem;

  h1 {
    font-family: var(--font-secondary);
    color: var(--color-white);
    text-align: center;
    padding: 1rem 0;
    font-size: 1.3em;
    text-transform: uppercase;
    font-weight: 700;
  }

  .intro-gift {
    position: relative;
    margin: 1rem 2rem;
    font-size: 0.9em;
    font-style: italic;
    text-align: center;
    color: var(--color-white);
  }
`;

export const bankAccountWrapper = css`
  text-align: center;
  margin-top: 2rem;

  .bank-card {
    background-color: var(--color-white);
    border-radius: 16px;
    padding: 1.2rem 1rem;
    margin: 1rem;
    cursor: pointer;

    > p {
      margin-bottom: 0.5rem;
    }

    .vendor {
      font-size: 1.1em;
    }

    .acc-number {
      font-weight: 700;
    }

    .name {
      font-size: 0.9em;
    }

    .copy-button {
      display: inline-block;
      background-color: var(--color-primary);
      color: var(--color-white);
      border-radius: 999px;
      padding: 0.3rem 1rem;
      font-size: 0.8em;
      transition: all 300ms ease-in-out;
    }
  }
`;
