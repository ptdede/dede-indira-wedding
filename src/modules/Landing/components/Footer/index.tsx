import { ParallaxBanner } from "react-scroll-parallax";

import AnimatedDiv from "src/components/AnimatedDiv";
import AnimatedText from "src/components/AnimatedText";
import { imageFooter } from "src/constants/images";

import { styFooterWrapper } from "./styles";

const Footer = () => {
  return (
    <section css={styFooterWrapper}>
      <ParallaxBanner
        layers={[{ image: imageFooter, speed: -10 }]}
        className="banner"
      />
      <div className="description">
        <AnimatedDiv>
          <h1>Thank You</h1>
        </AnimatedDiv>
        <AnimatedText>
          Your presence and blessings would be a cherished honor, filling our
          hearts with immense joy. We eagerly await your gracious attendance as
          we embark on this memorable journey.
        </AnimatedText>
        <AnimatedDiv className="regards">
          <p>sincerely,</p>
          <p>
            <b>Dede & Indira</b>
          </p>
        </AnimatedDiv>
      </div>
    </section>
  );
};

export default Footer;
