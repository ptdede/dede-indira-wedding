import { ParallaxBanner } from "react-scroll-parallax";

import { imageRgVeda } from "src/constants/images";

import { stySinglePhoto } from "./styles";

interface SinglePhotoProps {
  image?: string;
}

const SinglePhoto = (props: SinglePhotoProps) => {
  const { image = imageRgVeda } = props;

  return (
    <section css={stySinglePhoto}>
      <ParallaxBanner layers={[{ image, speed: -10 }]} className="banner" />
    </section>
  );
};

export default SinglePhoto;
