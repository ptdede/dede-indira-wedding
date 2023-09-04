import { ParallaxBanner } from "react-scroll-parallax";

import AnimatedDiv from "src/components/AnimatedDiv";
import AnimatedText from "src/components/AnimatedText";

import { styCaptureMomentWrapper } from "./styles";

const CaptureMoment = () => {
  return (
    <div css={styCaptureMomentWrapper}>
      <div className="photo-wrapper">
        <div className="title">
          <AnimatedDiv direction="up">
            <h1>Capture The Love</h1>
          </AnimatedDiv>
        </div>

        <div className="photo">
          <ParallaxBanner
            layers={[{ image: "/images/single-photo.jpg", speed: -10 }]}
          >
            <div className="text-description">
              <AnimatedText className="hashtag">#DEfinitelyINDY</AnimatedText>
              <AnimatedText className="text">
                When you share photos of our day on social media, please use our
                hashtag so we can enjoy them too!
              </AnimatedText>
            </div>
          </ParallaxBanner>
        </div>
      </div>
    </div>
  );
};

export default CaptureMoment;
