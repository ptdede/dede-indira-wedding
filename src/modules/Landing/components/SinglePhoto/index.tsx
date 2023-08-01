import { ParallaxBanner } from "react-scroll-parallax";

import { stySinglePhoto } from "./styles";

const SinglePhoto = () => {
  return (
    <section css={stySinglePhoto}>
      <ParallaxBanner
        layers={[{ image: "images/single-photo.jpg", speed: -10 }]}
        className="banner"
      />
    </section>
  );
};

export default SinglePhoto;
