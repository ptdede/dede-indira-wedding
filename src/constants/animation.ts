const animationConfigs = {
  config: { mass: 5, tension: 2000, friction: 700 },
};

export const animBottomToTop = () => ({
  from: {
    opacity: 0,
    y: 50,
  },
  to: {
    opacity: 1,
    y: 0,
  },
  ...animationConfigs,
});

export const animTopToBottom = () => ({
  from: {
    opacity: 0,
    y: -50,
  },
  to: {
    opacity: 1,
    y: 0,
  },
  ...animationConfigs,
});

export const animLeftToRight = () => ({
  from: {
    opacity: 0,
    x: -50,
  },
  to: {
    opacity: 1,
    x: 0,
  },
  ...animationConfigs,
});

export const animRightToLeft = () => ({
  from: {
    opacity: 0,
    x: 50,
  },
  to: {
    opacity: 1,
    x: 0,
  },
  ...animationConfigs,
});
