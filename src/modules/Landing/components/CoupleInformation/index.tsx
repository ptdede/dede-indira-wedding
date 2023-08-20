import { useInView, a } from "@react-spring/web";
import { Autoplay, EffectFade } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import AnimatedText from "src/components/AnimatedText";
import { animLeftToRight, animRightToLeft } from "src/constants/animation";
import { sliderImagesMen, sliderImagesWomen } from "src/constants/images";

import { styCoupleInfoWrapper, styProfilesWrapper } from "./styles";

const CoupleInformation = () => {
  const [ref1, springs1] = useInView(animRightToLeft);
  const [ref2, springs2] = useInView(animLeftToRight);

  return (
    <section css={styCoupleInfoWrapper}>
      <div className="profile right-dir">
        <div css={styProfilesWrapper} className="right-dir">
          <div>
            <AnimatedText>
              <span className="text-decorative">THE GROOM</span>
            </AnimatedText>
          </div>
          <a.div ref={ref1} style={springs1} className="image-slider">
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
              {sliderImagesMen.map((image, idx) => (
                <SwiperSlide key={`couple-intro-${idx}`}>
                  <img className="image" src={image} alt="" loading="lazy" />
                </SwiperSlide>
              ))}
            </Swiper>
          </a.div>
        </div>

        <div className="profile-information">
          <AnimatedText className="profile-name">
            I Putu Dede Tulus Adhyatmika, S.Kom.
          </AnimatedText>
          <AnimatedText className="profile-subname">First son of:</AnimatedText>
          <AnimatedText className="profile-parent">
            Mr. I Wayan Sutawan
          </AnimatedText>
          <AnimatedText className="profile-parent">
            Mrs. Ni Putu Alit Ayu Mawartini
          </AnimatedText>
        </div>
      </div>

      <div className="profile left-dir">
        <div css={styProfilesWrapper} className="left-dir">
          <a.div ref={ref2} style={springs2} className="image-slider">
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
              {sliderImagesWomen.map((image, idx) => (
                <SwiperSlide key={`couple-intro-${idx}`}>
                  <img className="image" src={image} alt="" loading="lazy" />
                </SwiperSlide>
              ))}
            </Swiper>
          </a.div>
          <div>
            <AnimatedText>
              <span className="text-decorative">THE BRIDE</span>
            </AnimatedText>
          </div>
        </div>

        <div className="profile-information">
          <AnimatedText className="profile-name">
            Ni Putu Ayu Indira Yuni, S.E., M.M.
          </AnimatedText>
          <AnimatedText className="profile-subname">
            First daughter of:
          </AnimatedText>
          <AnimatedText className="profile-parent">
            Mr. I Gede Bujangga Hartawan
          </AnimatedText>
          <AnimatedText className="profile-parent">
            Mrs. Ni Nyoman Artamin
          </AnimatedText>
        </div>
      </div>
    </section>
  );
};

export default CoupleInformation;
