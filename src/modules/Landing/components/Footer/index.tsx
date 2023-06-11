import { imageFooter } from "src/constants/images";
import { styFooterWrapper } from "./styles";

const Footer = () => {
  return (
    <section css={styFooterWrapper}>
      <img src={imageFooter} alt="" />
      <div className="description">
        <h1>Thank You</h1>
        <p>
          Your presence and blessings would be a cherished honor, filling our
          hearts with immense joy. We eagerly await your gracious attendance as
          we embark on this memorable journey.
        </p>
        <div className="regards">
          <p>sincerely,</p>
          <p>
            <b>Dede & Indira</b>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Footer;
