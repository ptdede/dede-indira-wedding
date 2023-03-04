import * as React from "react";

import { Howl } from "howler";

import Floral1 from "src/images/floral-1.png";

import CoupleInformation from "./components/CoupleInformation";
import CoupleIntro from "./components/CoupleIntro";
import { styContainer, styImageDecorator, styWrapper } from "./styles";

const Homepage = () => {
  const sound = React.useRef(
    new Howl({
      src: ["/music/thousand-year.mp3"],
      loop: true,
    })
  );

  React.useEffect(() => {
    if (!sound.current.playing()) {
      sound.current.play();
    }
  }, []);

  return (
    <div className={styWrapper}>
      <div className="left">
        <img className={styImageDecorator()} src={Floral1} alt="" />
      </div>
      <div className={styContainer}>
        <CoupleIntro />
        <CoupleInformation />
      </div>
      <div className="right">
        <img className={styImageDecorator("right")} src={Floral1} alt="" />
      </div>
    </div>
  );
};

export default Homepage;
