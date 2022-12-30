const { translateCompoundSelector } = require("./compoundSelector");
const { capitalize } = require("./humanize");
const { isCombinator } = require("./token");

const splitByCombinator = (tokens) =>
  tokens.reduceRight(
    ([first, ...rest], token) =>
      isCombinator(token)
        ? [[], token, first, ...rest]
        : [[token, ...first], ...rest],
    [[]]
  );

const translateComplexSelector = (tokens) => {
  const split = splitByCombinator(tokens);

  return capitalize(
    split
      .map((combinatorOrTokenList, index) => {
        const isFirst = index === 0;

        if (combinatorOrTokenList instanceof Array) {
          const selectorTranslation = translateCompoundSelector(
            combinatorOrTokenList
          );

          return isFirst
            ? selectorTranslation
            : `  \n... ${selectorTranslation}`;
        }

        const combinatorTranslation = {
          descendant: "**descendente** de",
          sibling: "**logo após** de",
          adjacent: "**imediatamente ao lado** de",
          child: "**filho direto** de",
        }[combinatorOrTokenList.type];

        return `, ${combinatorTranslation}`;
      })
      .join("") + "."
  );
};

module.exports = {
  splitByCombinator,
  translateComplexSelector,
};