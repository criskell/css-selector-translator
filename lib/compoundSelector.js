import { quoteCode, translateArray } from "./humanize.js";
import { groupTokens } from "./token.js";

export const translateAttributeAction = (action, value) => {
  const quoted = quoteCode(value);

  return (
    {
      equals: `**exatamente igual** ao valor ${quoted}`,
      hyphen: `**começando com, ou sendo igual ao**, valor ${quoted + "-"}`,
      any: `tendo ${quoted} em **qualquer posição**`,
      start: `**começando** com ${quoted}`,
      end: `**terminando** com o valor ${quoted}`,
    }[action] ?? ""
  );
};

export const translateAttribute = (attribute) => {
  const action = translateAttributeAction(attribute.action, attribute.value);

  return (
    `um atributo ${quoteCode(attribute.name)}` +
    (action ? ` com o valor ${action}` : "")
  );
};

export const translateCompoundSelector = (tokens) => {
  const tokenGrouping = groupTokens(tokens);
  const { classes, identifier, attributes } = tokenGrouping;

  const identifierTranslation = identifier
    ? `o identificador ${identifier}`
    : "";
  const classTranslation = classes.length
    ? "as classes " +
      translateArray(classes.map(({ value }) => quoteCode(value)))
    : "";
  const attributeTranslation = translateArray(
    attributes.map(translateAttribute)
  );

  return [
    "um elemento",
    tokenGrouping.element
      ? `do tipo ${quoteCode(tokenGrouping.element.name)}`
      : "",
    identifierTranslation || classTranslation || attributeTranslation
      ? "que tem " +
        translateArray(
          [
            identifierTranslation,
            classTranslation,
            attributeTranslation,
          ].filter((x) => x)
        )
      : "",
  ]
    .filter((x) => x)
    .join(" ");
};
