import { css } from "@emotion/react";

export const sendGiftWrapper = (isOpen: boolean) => css`
  position: relative;
  padding: 2rem 1.5rem;
  overflow: hidden;
  background-color: rgba(0, 0, 0, 0.05);

  img {
    display: block;
    left: 0;
    top: 0;
    width: 100%;
    height: 230px;
    object-fit: cover;
    z-index: 0;
    border-top-right-radius: 48px;
  }

  .gift-container {
    text-align: center;
    background: var(--color-secondary);
    transition: all 300ms ease-in-out;
    border-bottom-left-radius: ${isOpen ? "16px" : "48px"};
    border-bottom-right-radius: ${isOpen ? "16px" : "0px"};
    padding: 1rem 0;
  }

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
    margin: 1rem 2rem;
    font-size: 0.9em;
    font-style: italic;
    text-align: center;
    color: var(--color-white);
  }

  button {
    outline: none;
    border: none;
    background: var(--color-white);
    padding: 0.5rem 1rem;
    border-radius: 9999px;
    text-align: center;
    margin: 1rem 0;
    cursor: pointer;
  }
`;

export const bankAccountWrapper = css`
  text-align: center;
  margin-top: 1rem;
  position: relative;
  overflow: hidden;
  transition: all 300ms ease-in-out;

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
