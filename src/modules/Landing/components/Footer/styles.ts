import { css } from "@emotion/react";

export const styFooterWrapper = css`
  background-color: var(--color-secondary);
  position: relative;
  min-height: 40rem;

  &:after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    width: 100%;
    height: 100%;
    background: rgb(145, 127, 179);
    background: linear-gradient(
      0deg,
      rgba(145, 127, 179, 1) 30%,
      rgba(255, 255, 255, 0) 93%
    );
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: absolute;
    top: 0;
    left: 0;
  }

  .description {
    position: absolute;
    bottom: 2rem;
    left: 0;
    right: 0;
    z-index: 1;
    color: var(--color-white);
    text-align: center;
    padding: 1rem 1.5rem;

    .regards {
      margin-top: 1rem;
    }

    h1 {
      font-family: var(--font-custom-smooch);
      font-size: 2em;
      margin-bottom: 2rem;
    }

    p {
      font-size: 0.8em;
      line-height: 1.5rem;
    }

    b {
      font-weight: 700;
    }
  }
`;
