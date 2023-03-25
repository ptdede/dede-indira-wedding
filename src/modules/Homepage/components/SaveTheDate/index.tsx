import { useInView, animated } from "@react-spring/web";

import { animBottomToTop } from "src/constants/animation";

import { stySaveDateWrapper } from "./styles";

const SaveTheDate = () => {
  const [ref, springs] = useInView(animBottomToTop);

  return (
    <section css={stySaveDateWrapper}>
      <animated.h1 className="title" ref={ref} style={springs}>
        Save the date
      </animated.h1>
    </section>
  );
};

export default SaveTheDate;
