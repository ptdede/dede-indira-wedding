import RootProvider from "src/providers";

import CoupleInformation from "./components/CoupleInformation";
import CoupleIntro from "./components/CoupleIntro";
import EventDate from "./components/EventDate";
import Footer from "./components/Footer";
import InvitationHero from "./components/InvitationHero";
import QuoteIntro from "./components/QuoteIntro";
import Reservation from "./components/Reservation";
import SinglePhoto from "./components/SinglePhoto";

const Landing = () => {
  return (
    <RootProvider>
      <InvitationHero />
      <CoupleIntro />
      <SinglePhoto />
      <QuoteIntro />
      <CoupleInformation />
      <EventDate />
      <Reservation />
      <Footer />
    </RootProvider>
  );
};

export default Landing;
