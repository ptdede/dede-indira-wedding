import { useState } from "react";

import { copyClipboard } from "src/helpers/copy-clipboard";

import { bankAccounts } from "./constants";
import { bankAccountWrapper, sendGiftWrapper } from "./styles";

const SendGift = () => {
  const [copied, setCopied] = useState({
    number: "",
    error: false,
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
  };

  return (
    <section css={sendGiftWrapper}>
      <h1>Wedding Gift</h1>

      <p className="intro-gift">
        Your presence at our wedding is the greatest gift we could ask for, but
        if you would like to honor us with a gift, we appreciate transfers to
        the following bank account
      </p>

      <div css={bankAccountWrapper}>
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
      </div>
    </section>
  );
};

export default SendGift;
