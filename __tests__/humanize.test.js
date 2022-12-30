const humanize = require("../lib/humanize");

describe("quoteCode()", () => {
  it("deve colocar uma string entre backticks", () => {
    const string = "hello";

    const result = humanize.quoteCode(string);

    expect(result).toBe("`hello`");
  });
});

describe("capitalize()", () => {
  it("deve alterar a primeira letra de uma string para maiúscula", () => {
    const string = "hello";

    const result = humanize.capitalize(string);

    expect(result).toBe(`Hello`);
  });

  it("deve deixar intacto a caixa alta ou baixa de outras letras", () => {
    const string = "hElLo";

    const result = humanize.capitalize(string);

    expect(result).toBe(`HElLo`);
  });
});

describe("translateArray()", () => {
  it("deve retornar uma string vazia se o array de entrada está vazio", () => {
    expect(humanize.translateArray([])).toBe("");
  });

  it("deve retornar o primeiro elemento de um array se contiver apenas 1 elemento", () => {
    expect(humanize.translateArray(["teste"])).toBe("teste");
  });

  it("deve enumerar dois elementos de um array com o conectivo 'e'", () => {
    expect(humanize.translateArray(["a", "b"])).toBe("a e b");
  });

  it("deve enumerar três elementos de um array com vírgula e o conectivo 'e'", () => {
    expect(humanize.translateArray(["a", "b", "c"])).toBe("a, b e c");
  });

  it("deve enumerar quatro elementos de um array", () => {
    expect(humanize.translateArray(["a", "b", "c", "d"])).toBe("a, b, c e d");
  });
});
