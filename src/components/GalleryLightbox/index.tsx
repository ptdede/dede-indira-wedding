import { useState } from "react";

import { EffectCreative, FreeMode, Navigation, Thumbs } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import { imageGallery } from "src/constants/images";
import { track } from "src/helpers/trackers";

import { styGalleryWrapper } from "./styles";

const GalleryLightbox = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState<any | null>(null);

  const handleSlideChange = (index: number) => {
    track("view_item", {
      name: `view our moment`,
      index,
    });
  };

  return (
    <div css={styGalleryWrapper}>
      <div>
        <Swiper
          className="slider"
          loop={true}
          spaceBetween={10}
          navigation={true}
          speed={800}
          thumbs={{ swiper: thumbsSwiper }}
          modules={[FreeMode, Navigation, Thumbs, EffectCreative]}
          creativeEffect={{
            prev: {
              shadow: true,
              translate: ["-20%", 0, -1],
              opacity: 0,
            },
            next: {
              translate: ["100%", 0, 0],
              opacity: 1,
            },
          }}
          effect="creative"
          onTransitionEnd={(swiper) => handleSlideChange(swiper.realIndex)}
        >
          {imageGallery.map((image, idx) => (
            <SwiperSlide key={`couple-intro-${idx}`}>
              <img className="image" src={image} alt="" loading="lazy" />
            </SwiperSlide>
          ))}
        </Swiper>

        <Swiper
          className="thumb"
          onSwiper={setThumbsSwiper}
          loop={true}
          spaceBetween={10}
          slidesPerView={5}
          freeMode={true}
          watchSlidesProgress={true}
          modules={[FreeMode, Navigation, Thumbs]}
        >
          {imageGallery.map((image, idx) => (
            <SwiperSlide key={`couple-intro-${idx}`}>
              <img className="image" src={image} alt="" loading="lazy" />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default GalleryLightbox;
