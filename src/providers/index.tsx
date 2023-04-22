import { ParallaxProvider as PRLX } from "react-scroll-parallax";

import MusicProvider from "./music";

const ParallaxProvider: any = PRLX;

const RootProvider = ({ children }: any) => {
  return (
    <ParallaxProvider>
      <MusicProvider>{children}</MusicProvider>
    </ParallaxProvider>
  );
};

export default RootProvider;
