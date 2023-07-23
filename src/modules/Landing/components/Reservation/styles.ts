import { css } from "@emotion/react";

export const styReservationWrapper = css`
  padding: 2rem 1.5rem;

  h1 {
    font-family: var(--font-secondary);
    color: var(--color-primary);
    text-align: center;
    padding: 1rem 0;
    font-size: 1.3em;
    text-transform: uppercase;
    letter-spacing: 1.4;
    font-weight: 700;
  }

  form {
    width: 100%;

    input,
    textarea,
    button {
      display: block;
      width: 100%;
      border-radius: 4px;
      outline: none;
      border: solid 1px rgba(0, 0, 0, 0.2);
      background-color: transparent;
      background-image: none;
      box-shadow: none;
      padding: 0.5rem 1rem;
      box-sizing: border-box;
      transition: all 300ms ease-in-out;

      &:focus {
        border-color: var(--color-secondary);
      }
    }

    textarea {
      padding: 1rem;
    }

    button {
      cursor: pointer;
    }

    button[type="submit"] {
      margin-top: 1rem;
    }

    button {
      border-radius: 100px;
    }

    .errors {
      color: red;
      font-size: 0.8em;
      margin-top: 0.2rem;
    }

    .input-group {
      position: relative;
      margin-top: 0.7rem;

      input {
        padding: 1rem;
      }

      label {
        font-size: 0.8em;
        position: absolute;
        top: -0.6rem;
        left: 0.6rem;
        background-color: var(--color-white);
        color: rgba(0, 0, 0, 0.2);
        padding: 0 0.4rem;
        transition: all 300ms ease-in-out;
      }

      input:focus + label,
      textarea:focus + label {
        color: var(--color-secondary);
      }
    }
  }
`;

export const styReservationValue = (isComing?: boolean) => css`
  padding: 1rem 0;

  > div {
    display: flex;
  }

  button {
    flex: 0;
    white-space: nowrap;
    margin-right: 0.5rem;
    opacity: 0.5;
    transition: all 300ms ease-in-out;

    ${isComing === true &&
    css`
      &.coming {
        background-color: #76a21e !important;
        color: var(--color-white);
        opacity: 1;
        border: solid 1px #76a21e;
      }
    `}

    ${isComing === false &&
    css`
      &.not-coming {
        background-color: #a20a0a !important;
        color: var(--color-white);
        opacity: 1;
        border: solid 1px #a20a0a;
      }
    `}
  }
`;

export const styMessagesWrapper = css`
  .message-card {
    position: relative;
    margin: 1rem 0;
    background-color: rgba(0, 0, 0, 0.05);
    padding: 0.5rem 1rem;
    border-radius: 8px;

    &::before {
      position: absolute;
      left: -10px;
      content: "";
      display: block;
      width: 0;
      height: 0;
      border-style: solid;
      border-width: 5px 10px 10px 0;
      border-color: transparent rgba(0, 0, 0, 0.05) transparent transparent;
    }

    .name {
      font-size: 0.7em;
      font-weight: 600;
      margin-bottom: 0.2rem;
    }

    .message {
      margin-bottom: 0.3rem;
    }

    .date {
      font-size: 0.7em;
      color: rgba(0, 0, 0, 0.4);
    }
  }

  .loading {
    > div {
      margin-bottom: 1rem;
    }
  }

  .loadmore {
    position: relative;
    background: none;
    outline: none;
    border: none;
    padding: 0;
    margin: 0;
    color: var(--color-primary);
    font-weight: 600;
    font-size: 0.8em;
    padding: 1rem 0;
    padding-left: 24px;

    &:before {
      position: absolute;
      top: 50%;
      left: 0;
      transform: translate(0, -50%);
      content: "";
      background-color: var(--color-primary);
      display: block;
      width: 20px;
      height: 1px;
    }
  }
`;
