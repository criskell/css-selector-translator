export const isCombinator = (token) =>
  ["child", "sibling", "adjacent", "descendant"].includes(token.type);

export const isAttribute = (token) => token.type === "attribute";

export const isClass = (token) =>
  isAttribute(token) && token.name === "class" && token.action === "element";

export const isIdentifier = (token) =>
  isAttribute(token) && token.name === "id" && token.action === "equals";

export const isElement = (token) => token.type === "tag";

export const isPseudoElement = (token) => token.type === "pseudo-element";

const getTokenGroup = (token) => {
  if (isClass(token)) return "classes";
  if (isIdentifier(token)) return "identifier";
  if (isAttribute(token)) return "attributes";
  if (isPseudoElement(token)) return "pseudoElement";
  if (isElement(token)) return "element";
  return token.type;
};

export const groupTokens = (tokens) =>
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
