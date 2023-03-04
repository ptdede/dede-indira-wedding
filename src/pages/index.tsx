import * as React from "react";

import { injectGlobal } from "@emotion/css";

import Homepage from "src/modules/Homepage";
import { fontStyle } from "src/styles/fonts";
import { globalCss } from "src/styles/global";

import type { HeadFC, PageProps } from "gatsby";

injectGlobal`
  ${globalCss}
  ${fontStyle}
`;

const IndexPage: React.FC<PageProps> = () => <Homepage />;

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
