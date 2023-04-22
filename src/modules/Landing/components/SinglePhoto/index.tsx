import { ParallaxBanner } from "react-scroll-parallax";

import { BASE_SAMPLE_IMAGE } from "src/constants/images";

import { stySinglePhoto } from "./styles";

const SinglePhoto = () => {
  return (
    <section css={stySinglePhoto}>
      <ParallaxBanner
        layers={[{ image: BASE_SAMPLE_IMAGE(18), speed: -20 }]}
        className="banner"
      />
    </section>
  );
};

export default SinglePhoto;
