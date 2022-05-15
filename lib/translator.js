import CSSwhat from "css-what";

export function translate(selector) {
  const selectorList = CSSwhat.parse(selector);

  return selectorList.map(compileTokens);
}

function compileTokens(tokens) {
  function compileAttribute(attribute) {
    switch (attribute.action) {
      case "exists":
        return `um atributo ${quoteCode(attribute.name)}`;

      case "equals":
        return `um atributo ${quoteCode(
          attribute.name
        )} **igual** a ${quoteCode(attribute.value)}`;
    }
  }

  function compileSubject(subject) {
    return subject?.type === "tag"
      ? `um elemento do tipo ${quoteCode(subject.name)}`
      : `qualquer elemento`;
  }

  function compileId(id) {
    return id?.value ? `identificado por ${quoteCode(id.value)}` : "";
  }

  function compileClasses(classes) {
    if (!classes?.length) return "";

    const compiled = commaJoin(classes.map(({ value }) => quoteCode(value)));

    return (classes.length === 1 ? "da classe " : "das classes ") + compiled;
  }

  function compileAttributes(attributes) {
    if (!attributes?.length) return "";

    const compiled = commaJoin(attributes.map(compileAttribute));

    return "com " + compiled;
  }

  function groupTokens(tokens) {
    return tokens.reduce(
      (groups, token) => {
        const group = isSubject(token)
          ? "subjects"
          : isClass(token)
          ? "classes"
          : isIdentifier(token)
          ? "ids"
          : isAttribute(token)
          ? "attributes"
          : null;

        groups[group].push(token);
        return groups;
      },
      {
        attributes: [],
        classes: [],
        subjects: [],
        ids: [],
        pseudoclasses: [],
      }
    );
  }

  function compile({
    attributes,
    classes,
    subjects: [subject = null],
    ids: [id = null],
    pseudoclasses,
  }) {
    return (
      capitalize(
        [
          compileSubject(subject),
          compileId(id),
          compileClasses(classes),
          compileAttributes(attributes),
        ]
          .filter((x) => x !== "")
          .join(" ")
      ) + "."
    );
  }

  return compile(groupTokens(tokens));
}

function quoteCode(string) {
  return "`" + string + "`";
}

function isCombinator(type) {
  return ["child", "parent", "sibling", "adjacent", "descendant"].includes(
    type
  );
}

function isSubject(token) {
  return ["universal", "tag"].includes(token.type);
}

function isAttribute(token) {
  return token.type === "attribute";
}

function isClass(token) {
  return (
    isAttribute(token) && token.name === "class" && token.action === "element"
  );
}

function isIdentifier(token) {
  return isAttribute(token) && token.name === "id" && token.action === "equals";
}

function commaJoin(array) {
  if (array.length === 1) return array[0];

  const init = array.splice(0, array.length - 1);
  const tail = array[array.length - 1];

  return init.join(", ") + " e " + tail;
}

function capitalize(string) {
  return string[0].toUpperCase() + string.slice(1);
}
