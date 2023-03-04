import { useEffect, useState } from "react";

import * as queryString from "query-string";

import Dummy4 from "src/images/dummies/dummy4.jpeg";

import {
  styCoupleIntroWrapper,
  styInvitationDesc,
  styInviteWrapper,
} from "./styles";

const CoupleIntro = () => {
  const [invite, setInvite] = useState("");

  useEffect(() => {
    const { invite } = queryString.parse(location.search);
    setInvite((invite as string) || "");
  }, []);

  return (
    <section css={styCoupleIntroWrapper}>
      <img className="background-image" src={Dummy4} alt="" />

      <div css={styInvitationDesc}>
        <p className="subtitle">
          YOU&apos;RE INVITED <br />
          TO THE WEDDING OF
        </p>
        <h1 className="couple-name">Dede & Indira</h1>

        {invite && (
          <div css={styInviteWrapper}>
            <p>For {invite}</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default CoupleIntro;
