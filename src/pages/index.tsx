import * as React from "react";

import { Global } from "@emotion/react";

// import Homepage from "src/modules/Homepage";
import Landing from "src/modules/Landing";
import { globalCss } from "src/styles/global";

import type { HeadFC, PageProps } from "gatsby";

const IndexPage: React.FC<PageProps> = () => (
  <>
    <Global styles={globalCss} />
    <Landing />
  </>
);

export default IndexPage;

export const Head: HeadFC = () => {
  return (
    <>
      <title>Dede & Indira Wedding</title>
      <link rel="preload" as="image" href="/images/cover-website.jpg"></link>
    </>
  );
};
