import { PropsWithChildren } from "react";

import { useInView, animated } from "@react-spring/web";

import { animBottomToTop } from "src/constants/animation";

interface AnimatedTextProps extends PropsWithChildren {
  className?: string;
}

const AnimatedText = (props: AnimatedTextProps) => {
  const { children, ...restProps } = props;

  const [ref, springs] = useInView(animBottomToTop);

  return (
    <animated.p {...restProps} ref={ref} style={springs}>
      {children}
    </animated.p>
  );
};

export default AnimatedText;
