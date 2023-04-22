import AnimatedText from "src/components/AnimatedText";

import { styQuoteIntroWrapper } from "./styles";

const QuoteIntro = () => {
  return (
    <section css={styQuoteIntroWrapper}>
      <AnimatedText className="quote-title">Rgveda: X.85.36</AnimatedText>
      <AnimatedText className="quote-main">
        Grbhnāmi te saubhagatvāya hastam, Mayā patyā jaradastir yathāsah, Bhago
        aryamā savitā puramdhir, Mahyam tvādurgārhapatyāya devāh.
      </AnimatedText>
      <AnimatedText className="quote-translate">
        In a wedding, you are united for the sake of happiness with a promise to
        make each other happy. With me, you will live forever because God will
        surely give His grace as protector and witness in this marriage.
        That&apos;s why you are united as one family.
      </AnimatedText>
    </section>
  );
};

export default QuoteIntro;
