const { translate } = require("../lib/translator.js");

const tests = {
  "seletores simples: elementos": [
    "p",
    ["Um elemento do tipo `p`."],
  ],
  "seletores simples: classes": [
    ".foo-bar",
    ["Um elemento de qualquer tipo que tem a classe `foo-bar`."],
  ],
  "seletores simples: identificadores": [
    "#foo-bar",
    ["Um elemento de qualquer tipo que tem o identificador `foo-bar`."],
  ],
  "seletores compostos: identificadores, elementos e classes": [
    "span.foo-bar#foo-bar",
    ["Um elemento do tipo `span` que tem o identificador `foo-bar` e a classe `foo-bar`."],
  ],
  "seletores complexos: articular os combinadores": [
    "* > p",
    ["Começando do lado direito, temos:\nUm elemento do tipo `p`. Em relação aos seus ancestrais, deve ser encontrado como **filho direto** de...\nUm elemento de qualquer tipo."]
  ],
};

describe("translator", () => {
  describe("translate()", () => {
    for (const [testDescription, [selector, expected]] of Object.entries(tests)) {
      test(testDescription, () => {
        const translations = translate(selector);
        const texts = translations.map(({ to }) => to);

        expect(texts).toEqual(expected);
      });
    }
  });
});