import React, { Children, PropsWithChildren } from "react";

import { useTrail, a } from "@react-spring/web";

import { styTrailWrapper } from "./styles";

interface AnimatedTrailProp extends PropsWithChildren {
  open: boolean;
}

const AnimatedTrail = ({ open, children }: AnimatedTrailProp) => {
  const items = Children.toArray(children);

  const trail = useTrail(items.length, {
    config: { mass: 5, tension: 2000, friction: 400 },
    opacity: open ? 1 : 0,
    x: open ? 0 : 20,
    height: open ? "auto" : "0px",
    from: { opacity: 0, x: 20, height: "0px" },
  });

  return (
    <>
      {trail.map(({ height, ...style }, index) => (
        <a.div key={index} css={styTrailWrapper} style={style}>
          <a.div style={{ height }}>{items[index]}</a.div>
        </a.div>
      ))}
    </>
  );
};

export default AnimatedTrail;
