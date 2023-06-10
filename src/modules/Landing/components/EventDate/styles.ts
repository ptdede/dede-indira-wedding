import { css } from "@emotion/react";

export const styEventDateWrapper = css`
  background-color: var(--color-secondary);
  padding: 1rem 1.5rem;

  .image-slider {
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
`;
