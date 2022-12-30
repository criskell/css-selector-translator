const { translateCompoundSelector } = require("./compoundSelector");
const { capitalize } = require("./humanize");
const { isCombinator } = require("./token");

const splitByCombinator = (tokens) =>
  tokens.reduce(
    ([first, ...rest], token) =>
      isCombinator(token)
        ? [[], token, first, ...rest]
        : [[token, ...first], ...rest],
    [[]]
  );

const translateComplexSelector = (tokens) => {
  const split = splitByCombinator(tokens);

  const compoundSelectors = split.map((combinatorOrTokenList, index) => {
    if (combinatorOrTokenList instanceof Array) {
      const selectorTranslation = translateCompoundSelector(
        combinatorOrTokenList
      );

      return capitalize(selectorTranslation);
    }

    const combinatorTranslation = {
      descendant: "É **descendente**",
      sibling: "Está **logo após**",
      adjacent: "Está **imediatamente ao lado**",
      child: "É **filho direto**",
    }[combinatorOrTokenList.type];

    return `. ${combinatorTranslation} de...\n`;
    })
    .join("") + ".";

  return compoundSelectors;
};

module.exports = {
  splitByCombinator,
  translateComplexSelector,
};