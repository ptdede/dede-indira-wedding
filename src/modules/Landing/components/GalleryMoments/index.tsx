import AnimatedDiv from "src/components/AnimatedDiv";
import GalleryLightbox from "src/components/GalleryLightbox";

import { galleryWrapper } from "./styles";

const GalleryMoments = () => {
  return (
    <section css={galleryWrapper}>
      <AnimatedDiv>
        <h1>Our Moments</h1>

        <GalleryLightbox />
      </AnimatedDiv>
    </section>
  );
};

export default GalleryMoments;
