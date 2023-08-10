import { css } from "@emotion/react";

export const styCoupleIntroWrapper = css`
  position: relative;
  width: 100%;
  overflow: hidden;

  .top-intro {
    display: flex;
    width: 100%;

    .right-container {
      position: relative;
      width: 100%;
    }
  }

  .image-slider {
    position: relative;
    width: 85%;
    height: 70vh;
    flex-grow: 0;
    flex-shrink: 0;
    overflow: hidden;
    border-bottom-right-radius: 48px;

    .slider {
      position: relative;
      width: 100%;
      height: 100%;
      z-index: 0;
      overflow: hidden;
    }

    .image {
      object-fit: cover;
      object-position: center;
      width: 100%;
      height: 100%;
    }

    .wedding-name {
      position: absolute;
      bottom: 0;
      background: var(--color-secondary);
      color: var(--color-white);
      padding: 0.8em 1.4em;
      text-align: center;
      letter-spacing: 0.2em;
      font-weight: 400;
      font-size: 0.9em;
      font-weight: 300;
      border-top-right-radius: 24px;
    }
  }

  .parallax-wrapper {
    position: relative;
    width: 100%;
    height: 100%;
    z-index: 0;
    top: 0;
  }

  .parallax {
    position: relative;
    height: 100%;
  }

  .intro-text {
    font-size: 0.8em;
    letter-spacing: 0.3em;
  }

  .decorative-1 {
    position: absolute;
    top: 1rem;
    left: 1.4rem;
    transform: rotate(90deg);
    transform-origin: 0% 0%;
    white-space: nowrap;
  }

  .quote-intro {
    position: relative;
    margin: 2.5rem;
    font-size: 0.9em;
    font-style: italic;

    &::before {
      position: absolute;
      top: 1.5rem;
      left: -0.5rem;
      content: "”";
      display: block;
      font-size: 6em;
      font-weight: 700;
      transform: scaleX(-1);
      line-height: 0;
      letter-spacing: 0;
      opacity: 0.2;
      z-index: 1;
    }
  }
`;
