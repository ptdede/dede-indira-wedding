import { PropsWithChildren } from "react";

import { useInView, animated } from "@react-spring/web";

import {
  animBottomToTop,
  animLeftToRight,
  animRightToLeft,
  animTopToBottom,
} from "src/constants/animation";

interface AnimatedTextProps extends PropsWithChildren {
  className?: string;
  direction?: "up" | "down" | "left" | "right";
}

const directionsAnim = {
  up: animBottomToTop,
  down: animTopToBottom,
  right: animLeftToRight,
  left: animRightToLeft,
};

const AnimatedText = (props: AnimatedTextProps) => {
  const { children, direction, ...restProps } = props;

  const [ref, springs] = useInView(directionsAnim[direction || "up"] as any);

  return (
    <animated.p {...restProps} ref={ref} style={springs as any}>
      {children}
    </animated.p>
  );
};

export default AnimatedText;
