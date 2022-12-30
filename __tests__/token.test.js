const token = require("../lib/token");

describe("isCombinator()", () => {
  it("deve retornar true se um token de combinador for passado", () => {
    expect(token.isCombinator({ type: "child" })).toBe(true);
    expect(token.isCombinator({ type: "sibling" })).toBe(true);
    expect(token.isCombinator({ type: "adjacent" })).toBe(true);
    expect(token.isCombinator({ type: "descendant" })).toBe(true);
  });

  it("deve retornar false se não for passado um token de combinador", () => {
    expect(token.isCombinator({ type: "attribute" })).toBe(false);
  });
});