import { css } from "@emotion/react";

export const styCoupleInfoWrapper = css`
  padding: 4rem 0;
  width: 100%;
  overflow-x: hidden;

  .profile {
    margin-bottom: 5rem;

    &:last-child {
      margin-bottom: 0;
    }
  }

  .image-slider {
    position: relative;
    width: 240px;
    height: 320px;
    flex-grow: 0;
    flex-shrink: 0;

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
  }

  .profile-information {
    padding: 0 1.5rem;
    text-align: left;
    margin-top: 1rem;
  }

  .instagram {
    display: inline-block;
    background: linear-gradient(
      45deg,
      #f09433 0%,
      #e6683c 25%,
      #dc2743 50%,
      #cc2366 75%,
      #bc1888 100%
    );
    color: var(--color-white);
    border-radius: 999px;
    margin-bottom: 1rem;
    cursor: pointer;
    font-size: 0.8em;

    > div {
      display: flex;
      align-items: center;
      padding: 0.3rem 1rem;
    }

    path {
      fill: #fff;
    }

    svg {
      width: 0.8rem;
      height: 0.8rem;
      margin-right: 0.5rem;
    }
  }

  .profile-name {
    /* font-family: var(--font-custom-italianno); */
    font-family: var(--font-primary);
    font-size: 2em;
    font-weight: 600;
    color: #a7036b;
    margin-bottom: 1rem;
  }

  .profile-subname {
    font-size: 0.8em;
    font-weight: 700;
    margin-bottom: 0.5rem;
    color: var(--color-primary);
  }

  .profile-parent {
    font-size: 0.9em;
  }

  .right-dir {
    .profile-information {
      text-align: right;
    }

    .image-slider {
      overflow: hidden;
      border-bottom-left-radius: 48px;
    }
  }

  .left-dir {
    .image-slider {
      overflow: hidden;
      border-bottom-right-radius: 48px;
    }
  }
`;

export const styProfilesWrapper = css`
  display: flex;
  width: 100%;

  > div {
    flex-grow: 0;
    flex-shrink: 0;
    position: relative;
  }

  &.right-dir {
    justify-content: flex-end;
  }

  .text-decorative {
    position: absolute;
    top: 6rem;
    transform: rotate(270deg);
    transform-origin: 0% 100%;
    white-space: nowrap;
    font-weight: 300;
    font-size: 0.9em;
    letter-spacing: 0.2em;
  }

  &.left-dir {
    .text-decorative {
      top: -1.3rem;
      transform: rotate(90deg);
    }
  }
`;
