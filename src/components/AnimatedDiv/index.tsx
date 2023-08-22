import { PropsWithChildren } from "react";

import { useInView, animated } from "@react-spring/web";

import {
  animBottomToTop,
  animLeftToRight,
  animRightToLeft,
  animTopToBottom,
} from "src/constants/animation";

interface AnimatedDivProps extends PropsWithChildren {
  className?: string;
  direction?: "up" | "down" | "left" | "right";
}

const directionsAnim = {
  up: animBottomToTop,
  down: animTopToBottom,
  right: animLeftToRight,
  left: animRightToLeft,
};

const AnimatedDiv = (props: AnimatedDivProps) => {
  const { children, direction, ...restProps } = props;

  const [ref, springs] = useInView(directionsAnim[direction || "up"] as any);

  return (
    <animated.div {...restProps} ref={ref} style={springs as any}>
      {children}
    </animated.div>
  );
};

export default AnimatedDiv;
