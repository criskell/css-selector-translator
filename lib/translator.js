import * as CSSwhat from "css-what";
import { translateComplexSelector } from "./complexSelector.js";

export const translate = (selector) => {
  const selectorList = CSSwhat.parse(selector);

  return selectorList.map((tokens) => ({
    from: CSSwhat.stringify([tokens]),
    to: translateComplexSelector(tokens),
  }));
};
