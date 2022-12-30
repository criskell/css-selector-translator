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
    "* > p [x=5]",
    ["Um elemento de qualquer tipo que tem um atributo `x` com o valor **exatamente igual** ao valor `5`. É **descendente** de...\nUm elemento do tipo `p`. É **filho direto** de...\nUm elemento de qualquer tipo."]
  ],
};

describe("translate()", () => {
  for (const [testDescription, [selector, expected]] of Object.entries(tests)) {
    test(testDescription, () => {
      const translations = translate(selector);
      const texts = translations.map(({ to }) => to);

      expect(texts).toEqual(expected);
    });
  }
});
