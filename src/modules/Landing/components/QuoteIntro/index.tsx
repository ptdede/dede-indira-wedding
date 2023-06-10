import AnimatedText from "src/components/AnimatedText";

import { styQuoteIntroWrapper } from "./styles";

const QuoteIntro = () => {
  return (
    <section css={styQuoteIntroWrapper}>
      <AnimatedText className="quote-title">Rgveda: X.85.42</AnimatedText>
      <AnimatedText className="quote-main">
        Ihaiva stam mā vi yaustam, Visvām āyur vyasnutam. Krindantau putrair
        naptrbhih, Modamānau sve grhe.
      </AnimatedText>
      <AnimatedText className="quote-translate">
        Oh, dearest couple, stand as one, never to be apart, In a symphony of
        love, let harmony fill your heart, Guiding your children with tender
        love and art, Creating a sanctuary of togetherness, where joys impart.
      </AnimatedText>
    </section>
  );
};

export default QuoteIntro;
