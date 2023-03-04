import { useEffect, useState } from "react";

import { ParallaxProvider as PRLX } from "react-scroll-parallax";

const ParallaxProvider: any = PRLX;

const RootProvider = ({ children }: any) => {
  const [scrollEl, setScrollElement] = useState<HTMLElement | undefined>(
    undefined
  );
  useEffect(() => {
    setScrollElement(document.getElementById("app-container") || undefined);
  }, []);

  return (
    <ParallaxProvider scrollContainer={scrollEl}>{children}</ParallaxProvider>
  );
};

export default RootProvider;
