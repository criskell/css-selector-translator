const token = require("../lib/token");

describe("isCombinator()", () => {
  it("deve retornar true se for passado um token de combinador", () => {
    expect(token.isCombinator({ type: "child" })).toBe(true);
    expect(token.isCombinator({ type: "sibling" })).toBe(true);
    expect(token.isCombinator({ type: "adjacent" })).toBe(true);
    expect(token.isCombinator({ type: "descendant" })).toBe(true);
  });

  it("deve retornar false se não for passado um token de combinador", () => {
    expect(token.isCombinator({ type: "attribute" })).toBe(false);
  });
});

describe("isAttribute()", () => {
  it("deve retornar true se for passado um token de atributo", () => {
    expect(token.isAttribute({ type: "attribute" })).toBe(true);
  });

  it("deve retornar false se não for passado um token de atributo", () => {
    expect(token.isAttribute({ type: "child" })).toBe(false);
  });
});

describe("isClass()", () => {
  it("deve retornar true se for passado um token de atributo que contém uma classe", () => {
    expect(token.isClass({
      type: "attribute",
      name: "class",
      action: "element",
    })).toBe(true);
  });

  it("deve retornar false se não for passado um token de atributo", () => {
    expect(token.isClass({
      type: "child",
    })).toBe(false);
  });

  it("deve retornar false se for passado um token de atributo que não representa uma classe", () => {
    expect(token.isClass({
      type: "attribute",
      name: "id",
      action: "equals",
    })).toBe(false);
  });
});

describe("isIdentifier()", () => {
  it("deve retornar true se for passado um token de identificador", () => {
    expect(token.isIdentifier({
      type: "attribute",
      name: "id",
      action: "equals",
    })).toBe(true);
  });

  it("deve retornar false se não for passado um token de identificador", () => {
    expect(token.isIdentifier({
      type: "attribute",
      name: "class",
      action: "element",
    })).toBe(false);
  });
});

describe("isElement()", () => {
  it("deve retornar true se for passado um token de elemento", () => {
    expect(token.isElement({ type: "tag" })).toBe(true);
  });

  it("deve retornar false se não for passado um token de elemento", () => {
    expect(token.isElement({ type: "attribute" })).toBe(false);
  });
});

describe("getTokenGroup()", () => {
  it("deve retornar 'classes' se for passado um token de classe", () => {
    expect(token.getTokenGroup({
      type: "attribute",
      name: "class",
      action: "element",
    })).toBe("classes");
  });

  it("deve retornar 'identifier' se for passado um token de identificador", () => {
    expect(token.getTokenGroup({
      type: "attribute",
      name: "id",
      action: "equals",
    })).toBe("identifier");
  });

  it("deve retornar 'attributes' se for passado um token de atributo que não seja classe nem identificador", () => {
    expect(token.getTokenGroup({
      type: "attribute",
      name: "foo",
      action: "equals",
    })).toBe("attributes");
  });

  it("deve retornar 'pseudoElement' se for passado um token de pseudo-elemento", () => {
    expect(token.getTokenGroup({ type: "pseudo-element" })).toBe("pseudoElement");
  });

  it("deve retornar 'element' se for passado um token de elemento", () => {
    expect(token.getTokenGroup({ type: "tag" })).toBe("element");
  });

  it("deve retornar o tipo do token se não for passado um token que se encaixa nos grupos disponíveis", () => {
    expect(token.getTokenGroup({ type: "foo-bar" })).toBe("foo-bar");
  });
});

describe("groupTokens()", () => {
  it("deve agrupar os tokens em grupos de mesmo tipo", () => {
    const pseudoElementToken = {
      type: "pseudo-element",
      name: "before",
    };

    const elementToken = {
      type: "tag",
      name: "span",
    };

    const classTokens = [
      {
        type: "attribute",
        name: "class",
        action: "element",
        value: "bar",
      },
    ];

    const identifierToken = {
      type: "attribute",
      name: "id",
      action: "equals",
      value: "foo-bar"
    };

    const attributeTokens = [
      {
        type: "attribute",
        name: "foo-bar",
        action: "equals",
        value: "foo-bar"
      },
      {
        type: "attribute",
        name: "bar",
        action: "equals",
        value: "foo-bar"
      },
    ];

    const result = token.groupTokens([
      identifierToken,
      pseudoElementToken,
      ...classTokens,
      elementToken,
      ...attributeTokens,
    ]);

    expect(result.element).toEqual(elementToken);
    expect(result.pseudoElement).toEqual(pseudoElementToken);
    expect(result.identifier).toEqual(identifierToken);
    expect(result.classes).toEqual(classTokens);
    expect(result.attributes).toEqual(attributeTokens);
  });
});