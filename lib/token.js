const isCombinator = (token) =>
  ["child", "sibling", "adjacent", "descendant"].includes(token.type);

const isAttribute = (token) => token.type === "attribute";

const isClass = (token) =>
  isAttribute(token) && token.name === "class" && token.action === "element";

const isIdentifier = (token) =>
  isAttribute(token) && token.name === "id" && token.action === "equals";

const isElement = (token) => token.type === "tag";

const isPseudoElement = (token) => token.type === "pseudo-element";

const getTokenGroup = (token) => {
  if (isClass(token)) return "classes";
  if (isIdentifier(token)) return "identifier";
  if (isAttribute(token)) return "attributes";
  if (isPseudoElement(token)) return "pseudoElement";
  if (isElement(token)) return "element";
  return token.type;
};

const groupTokens = (tokens) =>
  tokens.reduce(
    (grouping, token) => {
      const group = getTokenGroup(token);

      return {
        ...grouping,
        [group]:
          grouping[group] instanceof Array
            ? [...grouping[group], token]
            : token,
      };
    },
    {
      element: null,
      pseudoElement: null,
      identifier: null,
      attributes: [],
      classes: [],
    }
  );

module.exports = {
  isCombinator,
  isAttribute,
  isClass,
  isIdentifier,
  isElement,
  isPseudoElement,
  getTokenGroup,
  groupTokens,
};