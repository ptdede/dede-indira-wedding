import { useEffect, useRef } from "react";
import { useState } from "react";

import { Howl } from "howler";

import isBrowser from "src/helpers/isBrowser";
import Floral1 from "src/images/floral-1.png";

import CoupleInformation from "./components/CoupleInformation";
import CoupleIntro from "./components/CoupleIntro";
import { styContainer, styImageDecorator, styWrapper } from "./styles";

const Homepage = () => {
  const [height, setHeight] = useState("100vh");
  const sound = useRef(
    isBrowser
      ? new Howl({
          src: ["/music/thousand-year.mp3"],
          loop: true,
        })
      : null
  );

  useEffect(() => {
    if (sound.current && !sound.current.playing()) {
      sound.current.play();
    }

    setHeight(`${document.documentElement.clientHeight}px`);
  }, []);

  return (
    <div css={styWrapper(height)}>
      <div className="left">
        <img css={styImageDecorator()} src={Floral1} alt="" />
      </div>
      <div css={styContainer}>
        <CoupleIntro />
        <CoupleInformation />
      </div>
      <div className="right">
        <img css={styImageDecorator("right")} src={Floral1} alt="" />
      </div>
    </div>
  );
};

export default Homepage;
