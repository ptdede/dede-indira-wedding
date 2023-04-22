export const animBottomToTop = () => ({
  from: {
    opacity: 0,
    y: 50,
  },
  to: {
    opacity: 1,
    y: 0,
  },
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
});
