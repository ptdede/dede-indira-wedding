import { useCallback, useEffect, useState } from "react";

import { useSpring } from "@react-spring/web";
import * as queryString from "query-string";
import { useLockBodyScroll } from "react-use";

import AnimatedTrail from "src/components/AnimatedTrail";
import { useMusic } from "src/providers/music";

import { AnimatedInvitationHeroWrapper } from "./styles";

const InvitationHero = () => {
  const { handleSoundPlay } = useMusic();
  const [height, setHeight] = useState(`100vh`);
  const [bodyLocked, setBodyLocked] = useState(true);
  const [hide, setHide] = useState(false);
  const [to, setTo] = useState("");

  useEffect(() => {
    const { to } = queryString.parse(location.search);
    setTo((to as string) || "");
  }, []);

  const [style, animation] = useSpring(() => ({
    top: "0px",
    config: { mass: 5, tension: 2000, friction: 600 },
  }));

  useLockBodyScroll(bodyLocked);

  useEffect(() => {
    if (typeof document !== undefined) {
      const actualHeight =
        window.innerHeight ||
        document.documentElement.clientHeight ||
        document.body.clientHeight ||
        document.body.offsetHeight;

      setHeight(`${actualHeight}px`);
    }
  }, []);

  const handleOpenInvitation = useCallback(() => {
    handleSoundPlay();
    animation.start({
      top: `-${height}`,
    });
    setBodyLocked(false);
    setHide(true);
  }, [animation, handleSoundPlay, height]);

  return (
    <AnimatedInvitationHeroWrapper height={height} hide={hide} style={style}>
      <img src="/images/cover-website.jpg" alt="landing banner" />
      <section>
        <AnimatedTrail open={true}>
          <p className="subtitle">THE WEDDING OF</p>
          <h1>
            Dede <span className="and">&</span> Indira
          </h1>

          <p className="dear">DEAR</p>
          <p className="to">{to || "Our Guest"}</p>

          <button onClick={handleOpenInvitation}>open invitation</button>
        </AnimatedTrail>
      </section>
    </AnimatedInvitationHeroWrapper>
  );
};

export default InvitationHero;
