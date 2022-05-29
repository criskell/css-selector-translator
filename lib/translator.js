import CSSwhat from "css-what";

export function translate(selector) {
  const selectorList = CSSwhat.parse(selector);

  return selectorList.map(
    (complexSelector) =>
      capitalize(
        joinComplex(
          splitByCombinator(complexSelector)
            .map((selector) =>
              isArray(selector) ? compileCompound(selector) : selector
            )
            .reverse()
        )
      ) + "."
  );
}

export function splitByCombinator(tokens) {
  const compoundSelectors = [[]];

  for (const token of tokens) {
    if (isCombinator(token)) {
      compoundSelectors.push(token);
      compoundSelectors.push([]);
    } else {
      compoundSelectors[compoundSelectors.length - 1].push(token);
    }
  }

  return compoundSelectors;
}

function joinComplex(selectors) {
  let sentence = "";

  for (const selector of selectors) {
    if (typeof selector === "string") sentence += selector;
    else {
      sentence += " que " + compileCombinator(selector) + " ";
    }
  }

  return sentence;
}

export function compileCompound(tokens) {
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

  /**
   * Agrupa os tokens em grupos de mesmo tipo.
   */
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
    const sentence = [
      compileSubject(subject),
      compileId(id),
      compileClasses(classes),
      compileAttributes(attributes),
    ];

    return sentence.filter((x) => x !== "").join(" ");
  }

  return compile(groupTokens(tokens));
}

function quoteCode(string) {
  return "`" + string + "`";
}

function compileCombinator(combinator) {
  return {
    descendant: "é descendente de",
    sibling: "está logo após",
    adjacent: "está imediatamente ao lado de",
    child: "é filho direto (ou seja, está no primeiro nível) de",
  }[combinator.type];
}

function isCombinator(token) {
  return ["child", "sibling", "adjacent", "descendant"].includes(token.type);
}

function isArray(obj) {
  return obj instanceof Array;
}

function combinatorToOperator(type) {
  return {
    child: ">",
    sibling: "~",
    adjacent: "+",
    descendant: " ",
  }[type];
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
