import {
  createContext,
  PropsWithChildren,
  useCallback,
  useContext,
  useRef,
} from "react";

import { Howl } from "howler";

import isBrowser from "src/helpers/isBrowser";
import noop from "src/helpers/noop";

const defaultContext = {
  handleSoundPlay: noop,
  handleSoundPause: noop,
};

const MusicContext = createContext(defaultContext);

export const useMusic = () => useContext(MusicContext);

const MusicProvider = (props: PropsWithChildren) => {
  const { children } = props;

  const sound = useRef(
    isBrowser
      ? new Howl({
          src: ["/music/ngcml.mp3"],
          loop: true,
        })
      : null
  );

  const handleSoundPlay = useCallback(() => {
    if (sound.current && !sound.current.playing()) {
      sound.current.play();
    }
  }, []);

  const handleSoundPause = useCallback(() => {
    if (sound.current && sound.current.playing()) {
      sound.current.pause();
    }
  }, []);

  return (
    <MusicContext.Provider
      value={{
        handleSoundPlay,
        handleSoundPause,
      }}
    >
      {children}
    </MusicContext.Provider>
  );
};

export default MusicProvider;
