import { css } from "@emotion/react";

interface MediaQueries {
  mbl: typeof css;
  tab: typeof css;
  desk: typeof css;
  deskL: typeof css;
  deskXL: typeof css;
}

const sizes = {
  // Default styles written mobile-first assuming 320px width
  mbl: 320,
  tab: 481,
  desk: 769,
  deskL: 1025,
  deskXL: 1201,
};

// Iterate through the sizes and create a media template
const media: MediaQueries = Object.keys(sizes).reduce(
  (acc: any, label: any) => {
    acc[label] = (...args: any) => css`
      @media (min-width: ${(sizes as any)[label] / 16}em) {
        ${css(...args)};
      }
    `;

    return acc;
  },
  {} as MediaQueries
);

export default media;
