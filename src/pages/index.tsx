import * as React from "react";

import { Global } from "@emotion/react";

import Homepage from "src/modules/Homepage";
import { globalCss } from "src/styles/global";

import type { HeadFC, PageProps } from "gatsby";

const IndexPage: React.FC<PageProps> = () => (
  <>
    <Global styles={globalCss} />
    <Homepage />
  </>
);

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
