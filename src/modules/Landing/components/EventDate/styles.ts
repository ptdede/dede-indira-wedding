import { css } from "@emotion/react";

export const styEventDateWrapper = css`
  background-color: var(--color-secondary);
  padding: 2rem 1.5rem;
  overflow: hidden;

  h1 {
    font-family: var(--font-secondary);
    color: var(--color-white);
    text-align: center;
    padding: 1rem 0;
    font-size: 1.3em;
    text-transform: uppercase;
    letter-spacing: 1.4;
    font-weight: 700;
  }

  .dates {
    padding: 2rem 0;
  }

  .image-slider {
    position: relative;
    z-index: 0;
    width: 100%;

    .slider {
      width: 100%;
      height: 240px;

      .image {
        object-fit: cover;
        object-position: center;
        width: 100%;
        height: 100%;
      }
    }
  }

  .description {
    position: relative;
    z-index: 1;
    display: flex;

    .description-content {
      background-color: var(--color-white);
      width: 80%;
      padding: 2rem 1.5rem;
      margin-top: -3rem;
      margin-right: 0;

      .title {
        color: var(--color-primary);
        font-weight: 600;
        text-transform: uppercase;
        font-size: 1em;
        margin-bottom: 1rem;
        letter-spacing: 0.15em;
      }

      p {
        font-size: 0.9em;
        line-height: 1.8;
      }

      > div {
        margin-bottom: 1rem;
      }

      .vendor {
        color: var(--color-primary);
        font-weight: 600;
      }

      a {
        display: inline-block;
        color: var(--color-primary);
        text-transform: uppercase;
        text-decoration: none;
        font-size: 0.9em;
        font-weight: 600;

        &:after {
          content: "";
          display: block;
          width: 100%;
          height: 1px;
          background-color: var(--color-primary);
        }
      }

      .note {
        font-size: 0.7em;
        opacity: 0.7;
      }

      .dresscode {
        font-style: italic;
        color: var(--color-primary);
      }
    }

    .description-date {
      width: 20%;
      color: var(--color-white);
      display: flex;
      justify-content: center;
      align-items: center;
      text-align: center;
      text-transform: uppercase;

      span {
        font-size: 1em;
        font-weight: 600;
        opacity: 0.7;

        /* &.month {
          font-size: 1em;
          font-weight: 600;
        } */
      }
    }
  }

  .dates {
    .image-slider {
      overflow: hidden;
      border-top-right-radius: 32px;
    }

    .description-content {
      border-bottom-left-radius: 32px;

      .dates-wrapper {
        display: flex;
        align-items: center;

        .dates-cal {
          font-weight: bold;
          text-align: center;
          color: var(--color-white);
          background-color: var(--color-primary);
          padding: 0.5rem 1rem;
          margin-right: 1rem;
          line-height: 0;
        }

        .dates-date {
          font-size: 2em;
        }
      }
    }

    &:nth-of-type(even) {
      .description {
        flex-direction: row-reverse;
      }

      .image-slider {
        overflow: hidden;
        border-top-left-radius: 32px;
        border-top-right-radius: 0;
      }

      .description-content {
        border-bottom-right-radius: 32px;
        border-bottom-left-radius: 0;
      }
    }
  }
`;
