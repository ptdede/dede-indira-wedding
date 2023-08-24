import { css } from "@emotion/react";

export const styGalleryWrapper = css`
  padding: 1rem;

  .slider {
    position: relative;
    margin-bottom: 1rem;

    img {
      width: 100%;
      border-radius: 32px;
      /* border-top-right-radius: 32px;
      border-bottom-left-radius: 32px; */
    }

    .swiper-button-prev,
    .swiper-button-next {
      position: absolute;
      top: 50%;
      transform: translate3d(0, -50%, 0);
      width: 30px;
      height: 30px;
      color: #fff;
      opacity: 0.5;
      transition: all 300ms ease-in-out;

      &:hover {
        opacity: 1;
      }

      &::after {
        font-size: 1em;
      }
    }
  }

  .thumb {
    img {
      width: 100%;
      border-radius: 16px;
      /* border-top-right-radius: 16px;
      border-bottom-left-radius: 16px; */
      opacity: 0.7;
      transition: all 300ms ease-in-out;
    }

    .swiper-slide-thumb-active {
      img {
        opacity: 1;
      }
    }
  }
`;
