import RootProvider from "src/providers";

import CoupleInformation from "./components/CoupleInformation";
import CoupleIntro from "./components/CoupleIntro";
import InvitationHero from "./components/InvitationHero";
import QuoteIntro from "./components/QuoteIntro";
import SinglePhoto from "./components/SinglePhoto";

const Landing = () => {
  return (
    <RootProvider>
      <InvitationHero />
      <CoupleIntro />
      <SinglePhoto />
      <QuoteIntro />
      <CoupleInformation />
    </RootProvider>
  );
};

export default Landing;
