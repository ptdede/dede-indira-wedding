import * as React from "react";

import { Global } from "@emotion/react";

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
      <meta property="og:site_name" content="Dede & Indira Wedding" />
      <meta property="og:title" content="Dede & Indira Wedding" />
      <meta
        property="og:description"
        content="You have always been a big part of our lives. Let us share the big day
        as we unite our souls in a bond of love and devotion. You are cordially
        invited!"
      />
      <meta property="og:url" content="https://wedding.ptdede.com" />
      <meta
        property="og:image"
        content="https://wedding.ptdede.com/images/og-image.jpg"
      />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
    </>
  );
};
