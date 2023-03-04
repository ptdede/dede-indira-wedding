import { css } from "@emotion/react";

export const styCoupleIntroWrapper = css`
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;

  &::after {
    position: absolute;
    display: block;
    content: "";
    width: 100%;
    height: 50vh;
    z-index: 0;
    bottom: 0;
    background: rgb(15, 15, 20);
    background: linear-gradient(
      0deg,
      rgba(15, 15, 20, 0.8057816876750701) 15%,
      rgba(81, 81, 93, 0) 100%
    );
  }

  .background-image {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    z-index: 0;
  }
`;

export const styInvitationDesc = css`
  position: absolute;
  left: 0;
  right: 0;
  z-index: 1;
  bottom: 0;
  padding-bottom: 3em;

  .subtitle {
    font-family: "Alice", serif;
    color: white;
    text-align: center;
    margin-bottom: 3em;
    letter-spacing: 2px;
    font-size: 0.7em;
    line-height: 1.5;
  }

  .couple-name {
    font-family: "BrittanySignature", sans-serif;
    font-weight: 400;
    font-size: 3.5em;
    text-align: center;
    color: white;
  }
`;

export const styInviteWrapper = css`
  background-color: #f6edea;
  width: fit-content;
  padding: 1em 2em;
  border-radius: 1em;
  margin: 0 auto;
  margin-top: 5em;

  p {
    font-family: "Alice", serif;
  }
`;
