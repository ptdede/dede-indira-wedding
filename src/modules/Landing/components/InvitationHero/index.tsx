import { useCallback, useEffect, useState } from "react";

import { useSpring } from "@react-spring/web";
import { useLockBodyScroll } from "react-use";

import AnimatedTrail from "src/components/AnimatedTrail";
import useReceiver from "src/hooks/useReceiver";
import { useMusic } from "src/providers/music";

import { AnimatedInvitationHeroWrapper } from "./styles";

const InvitationHero = () => {
  const { handleSoundPlay } = useMusic();
  const [height, setHeight] = useState(`100vh`);
  const [bodyLocked, setBodyLocked] = useState(true);
  const [appear, setAppear] = useState(true);
  const { receiver } = useReceiver();

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
    setAppear(false);
  }, [animation, handleSoundPlay, height]);

  return (
    <AnimatedInvitationHeroWrapper
      height={height}
      appear={`${appear}`}
      style={style}
    >
      <img src="/images/cover-website.jpg" alt="landing banner" />
      <section>
        <AnimatedTrail open={true}>
          <p className="subtitle">THE WEDDING OF</p>
          <h1>
            Dede <span className="and">&</span> Indira
          </h1>

          <p className="dear">DEAR</p>
          <p className="to">{receiver || "Our Guest"}</p>

          <button onClick={handleOpenInvitation}>open invitation</button>
        </AnimatedTrail>
      </section>
    </AnimatedInvitationHeroWrapper>
  );
};

export default InvitationHero;
