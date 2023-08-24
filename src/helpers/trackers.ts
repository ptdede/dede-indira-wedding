export const track = (name: string, trackObj: Record<string, any>) =>
  window.gtag?.("event", name, trackObj);
