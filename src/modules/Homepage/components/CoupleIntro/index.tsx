import { useEffect, useState } from "react";

import * as queryString from "query-string";
import { Parallax } from "react-scroll-parallax";
import { Autoplay, EffectFade } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import { sliderImages } from "./constants";
import {
  styCoupleIntroWrapper,
  styInvitationDesc,
  styInviteWrapper,
} from "./styles";

const CoupleIntro = () => {
  const [invite, setInvite] = useState("");

  useEffect(() => {
    const { invite } = queryString.parse(location.search);
    setInvite((invite as string) || "");
  }, []);

  return (
    <section css={styCoupleIntroWrapper}>
      <Parallax speed={-20} className="background-image">
        <Swiper
          className="background-image"
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
              <img src={image} alt="" />
            </SwiperSlide>
          ))}
        </Swiper>
      </Parallax>

      <div css={styInvitationDesc(Boolean(invite))}>
        <p className="subtitle">
          YOU&apos;RE INVITED <br />
          TO THE WEDDING OF
        </p>
        <h1 className="couple-name">Dede & Indira</h1>

        {invite && (
          <div css={styInviteWrapper}>
            <p>For {invite}</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default CoupleIntro;
