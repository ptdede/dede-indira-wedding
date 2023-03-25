import { useInView, animated } from "@react-spring/web";
import { Autoplay, EffectFade } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import AnimatedText from "src/components/AnimatedText";
import { animBottomToTop } from "src/constants/animation";
import {
  floralImages,
  sliderImagesMen,
  sliderImagesWomen,
} from "src/constants/images";

import { styCoupleInfoWrapper } from "./styles";

const CoupleInformation = () => {
  const [ref1, springs1] = useInView(animBottomToTop);
  const [ref2, springs2] = useInView(animBottomToTop);

  return (
    <section css={styCoupleInfoWrapper}>
      <AnimatedText className="message">
        Hi! You&apos;re invited to our wedding, thank you for being our close
        families, friends, and relatives. Your presence is very meaningful for
        us
      </AnimatedText>

      <div className="profile">
        <animated.div className="profile-image" ref={ref1} style={springs1}>
          <Swiper
            className="photo"
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
            {sliderImagesMen.map((image, idx) => (
              <SwiperSlide key={`photo-m-${idx}`}>
                <img src={image} alt="" />
              </SwiperSlide>
            ))}
          </Swiper>

          <img className="frame" src={floralImages.FloralFrame} alt="" />
        </animated.div>

        <div className="texts">
          <AnimatedText className="profile-name">
            I Putu Dede Tulus Adhyatmika S.Kom.
          </AnimatedText>
          <AnimatedText className="profile-subname1">
            Putra pertama dari:
          </AnimatedText>
          <AnimatedText className="profile-subname">
            Bapak I Wayan Sutawan
          </AnimatedText>
          <AnimatedText className="profile-subname">
            Ibu Ni Putu Alit Ayu Mawartini
          </AnimatedText>
        </div>
      </div>

      <div className="profile">
        <animated.div className="profile-image" ref={ref2} style={springs2}>
          <Swiper
            className="photo"
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
            {sliderImagesWomen.map((image, idx) => (
              <SwiperSlide key={`photo-m-${idx}`}>
                <img src={image} alt="" />
              </SwiperSlide>
            ))}
          </Swiper>

          <img className="frame" src={floralImages.FloralFrame} alt="" />
        </animated.div>

        <div className="texts">
          <AnimatedText className="profile-name">
            Ni Putu Ayu Indira Yuni S.E., M.M.
          </AnimatedText>
          <AnimatedText className="profile-subname1">
            Putri pertama dari:
          </AnimatedText>
          <AnimatedText className="profile-subname">
            Bapak I Gede Bujangga Hartawan
          </AnimatedText>
          <AnimatedText className="profile-subname">
            Ibu Ni Nyoman Artamin
          </AnimatedText>
        </div>
      </div>
    </section>
  );
};

export default CoupleInformation;
