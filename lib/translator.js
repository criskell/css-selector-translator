import * as CSSwhat from "css-what";
import {
  isElement,
  isAttribute,
  isClass,
  isIdentifier,
  isUniversal,
  isPseudoElement,
} from "./token.js";
import { capitalize, quoteCode, translateAsEnumeration } from "./util.js";

/**
 * Traduz um seletor (uma lista de seletores) CSS para PT-BR.
 */
export function translate(selector) {
  const listsOfTokens = CSSwhat.parse(selector);

  return listsOfTokens.map(compileSelector);
}

function compileSelector(tokens) {
  const classifiedTokens = classifyTokens(tokens);
  const {
    elementToken,
    universalToken,
    identifierToken,
    classTokens,
    pseudoElementToken,
    attributeTokens,
  } = classifiedTokens;

  const element =
    "elemento" + (elementToken ? ` do tipo ${elementToken.name}` : "");

  let subject = "";

  if (pseudoElementToken) {
    subject += translatePseudoElement(pseudoElementToken.name);
    subject += identifierToken ? " do " : " de um ";
    subject += element;
  } else {
    subject += identifierToken ? "o " : "um ";
    subject += element;
  }

  const identifier = identifierToken
    ? `identificado por ${quoteCode(identifierToken.value)}`
    : null;

  const enumeratedClasses = translateAsEnumeration(
    classTokens.map(({ value }) => quoteCode(value)),
    " e "
  );
  const classes = classTokens.length
    ? `${
        classTokens.length === 1 ? "a classe" : "as classes"
      } ${enumeratedClasses}`
    : null;

  const attributes = attributeTokens
    ? translateAsEnumeration(
        attributeTokens
          .map(({ name, action, value }) => {
            const quoted = quoteCode(value);
            const constraint =
              {
                // [attr=value]
                equals: `com o valor exatamente igual ao valor ${quoted}`,
                // [attr|=value]
                hyphen: `com o valor começando com (ou sendo igual ao) valor ${
                  quoted + "-"
                }`,
                // [attr~=value]
                element: ``,
                // [attr*=value]
                any: `com o valor ${quoted} em qualquer posição`,
                // [attr^=value]
                start: `com o valor começando ${quoted}`,
                // [attr$=value]
                end: `com o valor começando com o valor ${quoted}`,
              }[action] ?? "";

            return `um atributo ${quoteCode(name)}${
              constraint && " " + constraint
            }`;
          })
          .filter((x) => x),
        " e "
      )
    : null;

  let sentence = subject;

  if (identifier) sentence += " " + identifier;
  if (identifier || attributes) sentence += " que tem";
  if (classes) sentence += " " + classes;
  if (attributes) {
    sentence += classes ? " e " : " ";
    sentence += attributes;
  }

  sentence += ".";

  return capitalize(sentence);
}

function classifyTokens(tokens) {
  return tokens.reduce(
    (groups, token) => {
      if (isElement(token)) groups.elementToken = token;
      if (isUniversal(token)) groups.universalToken = token;
      if (isIdentifier(token)) groups.identifierToken = token;
      if (isPseudoElement(token)) groups.pseudoElementToken = token;
      if (isClass(token)) groups.classTokens.push(token);
      if (isAttribute(token) && !["class", "id"].includes(token.name))
        groups.attributeTokens.push(token);

      return groups;
    },
    {
      elementToken: null,
      universalToken: null,
      identifierToken: null,
      pseudoElementToken: null,
      attributeTokens: [],
      classTokens: [],
    }
  );
}

function translatePseudoElement(name) {
  return (
    {
      "first-line": "a primeira linha",
      "first-letter": "a primeira letra",
      marker: "o marcador dos itens",
      after: "",
      before: "o",
    }[name] || null
  );
}
