export const track = (
  name: Gtag.EventNames | string,
  trackObj: Record<string, any>
) => window.gtag?.("event", name, trackObj);
