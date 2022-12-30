const CSSwhat = require("css-what");

const complexSelector = require("../lib/complexSelector");

describe("splitByCombinator()", () => {
  it("deve dividir um array de tokens em grupos de tokens que representam seletores compostos", () => {
    const tokens = CSSwhat.parse("c ~ a b > c + d")[0];

    const result = complexSelector.splitByCombinator(tokens);

    expect(result).toHaveLength(9);
    
    expect(result).toHaveProperty("0.0.type", "tag");
    expect(result).toHaveProperty("0.0.name", "d");

    expect(result).toHaveProperty("1.type", "adjacent");
    
    expect(result).toHaveProperty("2.0.type", "tag");
    expect(result).toHaveProperty("2.0.name", "c");

    expect(result).toHaveProperty("3.type", "child");

    expect(result).toHaveProperty("4.0.type", "tag");
    expect(result).toHaveProperty("4.0.name", "b");

    expect(result).toHaveProperty("5.type", "descendant");

    expect(result).toHaveProperty("6.0.type", "tag");
    expect(result).toHaveProperty("6.0.name", "a");

    expect(result).toHaveProperty("7.type", "sibling");

    expect(result).toHaveProperty("8.0.type", "tag");
    expect(result).toHaveProperty("8.0.name", "c");
  });
});