export function isElement(token) {
  return token.type === "tag";
}

export function isAttribute(token) {
  return token.type === "attribute";
}

export function isUniversal(token) {
  return token.type === "universal";
}

export function isPseudoElement(token) {
  return token.type === "pseudo-element";
}

export function isClass(token) {
  return (
    isAttribute(token) && token.name === "class" && token.action === "element"
  );
}

export function isIdentifier(token) {
  return isAttribute(token) && token.name === "id" && token.action === "equals";
}

function isCombinator(token) {
  return ["child", "sibling", "adjacent", "descendant"].includes(token.type);
}
