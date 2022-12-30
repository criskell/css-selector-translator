const CSSwhat = require("css-what");
const { translateComplexSelector } = require("./complexSelector");

const translate = (selector) => {
  const selectorList = CSSwhat.parse(selector);

  return selectorList.map((tokens) => ({
    from: CSSwhat.stringify([tokens]),
    to: translateComplexSelector(tokens),
  }));
};

module.exports = { translate };