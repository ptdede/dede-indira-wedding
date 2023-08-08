import styled from "@emotion/styled";
import { animated } from "@react-spring/web";

interface AnimatedInvitationHeroWrapperProps {
  height: string;
  appear?: string;
}

export const AnimatedInvitationHeroWrapper = styled(
  animated.div
)<AnimatedInvitationHeroWrapperProps>`
  width: 100%;
  max-width: var(--max-width);
  height: ${(props) => props.height};
  background: var(--color-black);
  position: fixed;
  z-index: 999;
  top: 0;
  pointer-events: ${(props) => (Boolean(props.appear) ? "auto" : "none")};

  img {
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: 0;
  }

  &::before {
    position: relative;
    content: "";
    display: block;
    width: 100%;
    height: 100%;
    background-image: linear-gradient(180deg, #2a2e2400 70%, #2a2e24 100%);
    z-index: 1;
  }

  section {
    position: absolute;
    width: 100%;
    z-index: 2;
    text-align: center;
    padding: 2rem 0;
    color: var(--color-white);

    &.top {
      top: 4em;
    }

    &.bottom {
      bottom: 2em;
    }

    .subtitle {
      font-family: var(--font-primary);
      font-weight: 400;
      font-size: 0.8em;
      margin-bottom: 1rem;
      letter-spacing: 0.2em;
    }

    h1 {
      font-family: var(--font-primary);
      font-weight: 600;
      font-size: 2.5em;
      margin-bottom: 1.5rem;

      .and {
        font-size: 0.5em;
      }
    }

    .dear {
      font-size: 0.8em;
      letter-spacing: 0.2em;
      margin: 1rem 0;
    }

    .to {
      font-size: 1.4em;
      font-weight: 400;
    }

    button {
      background: var(--color-secondary);
      outline: none;
      border: none;
      padding: 0.5rem 1.5rem;
      color: var(--color-white);
      border-radius: 999px;
      margin-top: 2rem;
      cursor: pointer;
      transition: all 200ms ease-in-out;

      &:hover {
        transform: scale(1.05);
      }

      &:active {
        transform: scale(0.9);
      }
    }
  }
`;
