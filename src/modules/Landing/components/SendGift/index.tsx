import { useState } from "react";

import { animated } from "@react-spring/web";

import { imageWeddingGift } from "src/constants/images";
import { copyClipboard } from "src/helpers/copy-clipboard";
import useCollapsibleHeightAnimation from "src/hooks/useCollapsibleHeightAnimation";

import { bankAccounts } from "./constants";
import { bankAccountWrapper, sendGiftWrapper } from "./styles";

const SendGift = () => {
  const [copied, setCopied] = useState({
    number: "",
    error: false,
  });
  const [isOpen, setIsOpen] = useState(false);

  const [ref, animatedStyle] = useCollapsibleHeightAnimation({
    isVisible: isOpen,
  });

  const handleBankClicked = (number: string) => {
    copyClipboard(
      number,
      () => {
        setCopied({
          number,
          error: false,
        });
      },
      () => {
        setCopied({
          number,
          error: true,
        });
      }
    );

    window.gtag("event", "click", { bankNumber: number });
  };

  const toggleBankAccount = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <section css={sendGiftWrapper(isOpen)}>
      <img src={imageWeddingGift} alt="" />

      <div className="gift-container">
        <h1>Wedding Gift</h1>

        <p className="intro-gift">
          Your presence at our wedding is the greatest gift we could ask for,
          but if you would like to honor us with a gift, we appreciate transfers
          to the following bank account
        </p>

        <animated.div
          ref={ref as any}
          css={bankAccountWrapper}
          style={animatedStyle as any}
        >
          {bankAccounts.map((bank, idx) => (
            <div
              className="bank-card"
              key={`bank-account-${idx}`}
              onClick={() => handleBankClicked(bank.number)}
            >
              <p className="vendor">{bank.vendor}</p>
              <p className="acc-number">{bank.number}</p>
              <p className="name">{bank.name}</p>
              <div className="copy-button">
                <p>
                  {copied && copied.number === bank.number
                    ? !copied.error
                      ? "Saved!"
                      : "Copy error!"
                    : "Copy to clipboard"}
                </p>
              </div>
            </div>
          ))}
        </animated.div>

        <button type="button" onClick={toggleBankAccount}>
          {isOpen ? "see less" : "See bank account"}
        </button>
      </div>
    </section>
  );
};

export default SendGift;
