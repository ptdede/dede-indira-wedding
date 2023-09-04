import { css } from "@emotion/react";

export const styCaptureMomentWrapper = css`
  .photo-wrapper {
    display: flex;
  }

  .title {
    width: 15vw;
    flex-grow: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    text-transform: uppercase;
    background-color: #000;
    color: var(--color-white);
  }

  h1 {
    font-family: var(--font-text);
    font-size: 1.2em;
    letter-spacing: 0.3em;
    transform: rotate(270deg);
    white-space: nowrap;
    transform-origin: 50% 50%;
  }

  .photo {
    width: 85vw;

    > div {
      height: 400px;
    }
  }

  .text-description {
    position: absolute;
    bottom: 1rem;
    margin: 0 1rem;

    .hashtag {
      background-color: rgba(0, 0, 0, 0.7);
      color: var(--color-white);
      display: inline-block;
      font-weight: 600;
      padding: 0.2rem 1rem;
      border-radius: 999px;
      margin-bottom: 0.5rem;
    }

    .text {
      font-size: 0.8em;
      padding: 1rem;
      background-color: rgba(0, 0, 0, 0.5);
      color: var(--color-white);
      border-radius: 16px;
    }
  }
`;
