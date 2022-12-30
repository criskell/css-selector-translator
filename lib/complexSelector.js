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
  const parts = split.map((combinatorOrTokenList, index) => {
    if (combinatorOrTokenList instanceof Array) {
      const selectorTranslation = translateCompoundSelector(
        combinatorOrTokenList
      );

      return capitalize(selectorTranslation);
    }

    const combinatorTranslation = {
      descendant: "**descendente**",
      sibling: "**logo após**",
      adjacent: "**imediatamente ao lado**",
      child: "**filho direto**",
    }[combinatorOrTokenList.type];

    return `. Em relação aos seus ancestrais, deve ser encontrado como ${combinatorTranslation} de...\n`;
    })
    .join("") + ".";

  const start = split.length > 1 ? `Começando do lado direito, temos:\n` : "";

  return start + parts;
};

module.exports = {
  splitByCombinator,
  translateComplexSelector,
};