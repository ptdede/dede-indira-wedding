import { css } from "@emotion/react";

export const galleryWrapper = css`
  font-family: var(--font-secondary);
  text-align: center;
  padding: 2.5rem;
  font-size: 1.3em;
  text-transform: uppercase;
  font-weight: 700;
  overflow: hidden;

  h1 {
    margin-bottom: 3rem;
  }

  .slider {
    width: 100%;
    height: 420px;
    overflow: initial;
    margin-bottom: 2rem;

    .swiper-wrapper {
      margin: 0 -16px;
      padding: 0 16px;
    }

    .swiper-slide {
      overflow: hidden;
      height: auto;
      transform: scale(0.85);
      filter: grayscale(100%);
      opacity: 0.4;
      transition: all 400ms cubic-bezier(0.455, 0.03, 0.515, 0.955);

      border-top-left-radius: 28px;
      border-bottom-right-radius: 28px;
      border-top-right-radius: 92px;
      border-bottom-left-radius: 92px;

      &:nth-of-type(even) {
        border-top-left-radius: 92px;
        border-bottom-right-radius: 92px;
        border-top-right-radius: 28px;
        border-bottom-left-radius: 28px;
      }

      &.swiper-slide-active {
        transform: scale(1);
        filter: grayscale(0%);
        opacity: 1;
      }
    }

    img {
      object-fit: cover;
      object-position: center;
      width: 100%;
      height: 100%;
    }
  }
`;
