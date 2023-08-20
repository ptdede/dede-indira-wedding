import React, { useRef } from "react";

import { useSpring } from "@react-spring/web";

function useCollapsibleHeightAnimation({ duration = 120, isVisible = false }) {
  const contentRef = useRef<HTMLDivElement>(null);
  const previouslyVisible = useRef(isVisible);

  const [animatedHeight, set] = useSpring(() => ({
    height: isVisible ? "auto" : 0,
    opacity: isVisible ? 1 : 0,
    config: { duration },
  }));

  React.useEffect(() => {
    if (!contentRef.current) return;

    if (isVisible === previouslyVisible.current) return;
    previouslyVisible.current = isVisible;

    if (isVisible) {
      contentRef.current.style.display = "block";
      contentRef.current.style.height = "auto";
      const height = contentRef.current.getBoundingClientRect().height;
      contentRef.current.style.height = "0";

      set({
        height,
        opacity: 1,
      });
    } else {
      const height = contentRef.current.getBoundingClientRect().height;
      contentRef.current.style.height = `${height}`;

      set({
        height: 0,
        opacity: 0,
      });
    }

    set({
      onRest: () => {
        if (!contentRef.current) return;

        if (isVisible) {
          contentRef.current.style.height = "auto";
          contentRef.current.style.opacity = "1";
        } else {
          contentRef.current.style.display = "none";
          contentRef.current.style.opacity = "0";
        }
      },
    });
  }, [isVisible, set]);

  return [contentRef, animatedHeight];
}

export default useCollapsibleHeightAnimation;
