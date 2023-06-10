import { Autoplay, EffectFade } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import { sliderImages } from "src/constants/images";

import { styEventDateWrapper } from "./styles";

const EventDate = () => {
  return (
    <section css={styEventDateWrapper}>
      <p>Save the date</p>

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
          {sliderImages.map((image, idx) => (
            <SwiperSlide key={`couple-intro-${idx}`}>
              <img className="image" src={image} alt="" />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default EventDate;
