import { Autoplay, EffectFade } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import AnimatedText from "src/components/AnimatedText";
import { imageCoupleIntro } from "src/constants/images";

import { styCoupleIntroWrapper } from "./styles";

const CoupleIntro = () => {
  return (
    <section css={styCoupleIntroWrapper}>
      <div className="top-intro">
        <div className="image-slider">
          <Swiper
            className="slider"
            modules={[Autoplay, EffectFade]}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            effect={"fade"}
            fadeEffect={{ crossFade: true }}
            speed={1600}
            loop={true}
          >
            {imageCoupleIntro.map((image, idx) => (
              <SwiperSlide key={`couple-intro-${idx}`}>
                <img className="image" src={image} alt="" loading="lazy" />
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="wedding-name">DEDE & INDIRA</div>
        </div>
        <div className="right-container">
          <AnimatedText>
            <span className="intro-text decorative-1">THE WEDDING</span>
          </AnimatedText>
        </div>
      </div>

      <AnimatedText className="quote-intro" direction="left">
        You have always been a big part of our lives. Let us share the big day
        as we unite our souls in a bond of love and devotion. You are cordially
        invited!
      </AnimatedText>
    </section>
  );
};

export default CoupleIntro;
