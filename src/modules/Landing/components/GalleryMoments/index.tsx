import { Swiper, SwiperSlide } from "swiper/react";

import { imageGallery } from "src/constants/images";

import { galleryWrapper } from "./styles";

const GalleryMoments = () => {
  return (
    <section css={galleryWrapper}>
      <h1>Our Moments</h1>

      <Swiper className="slider" spaceBetween={0} speed={600}>
        {imageGallery.map((image, idx) => (
          <SwiperSlide key={`couple-intro-${idx}`}>
            <img className="image" src={image} alt="" loading="lazy" />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default GalleryMoments;
