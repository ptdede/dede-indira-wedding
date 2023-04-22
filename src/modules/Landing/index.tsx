import RootProvider from "src/providers";

import CoupleInformation from "./components/CoupleInformation";
import InvitationHero from "./components/InvitationHero";

const Landing = () => {
  return (
    <RootProvider>
      <InvitationHero />
      <CoupleInformation />
    </RootProvider>
  );
};

export default Landing;
