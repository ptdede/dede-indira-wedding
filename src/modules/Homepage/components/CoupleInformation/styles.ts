import { css } from "@emotion/react";

export const styCoupleInfoWrapper = css`
  .message {
    margin: 2em 3em;
    text-align: center;
  }

  .profile {
    margin-bottom: 3em;
  }

  .profile-image {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;

    .frame {
      width: 350px;
      height: 350px;
      object-fit: contain;
      object-position: center;
    }

    .photo {
      position: absolute;
      width: 280px;
      height: 280px;
      z-index: -1;
      border-radius: 50%;

      img {
        width: 280px;
        height: 280px;
        object-fit: cover;
      }
    }
  }

  .texts {
    text-align: center;

    .profile-name {
      font-weight: bold;
      font-size: 1.2em;
    }

    .profile-subname1 {
      font-size: 0.8em;
    }

    .profile-subname {
      font-weight: 400;
      font-size: 0.8em;
    }
  }
`;
