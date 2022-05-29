import CSSwhat from "css-what";
import { marked } from "marked";
import util from "util";
import TerminalRenderer from "marked-terminal";

import * as T from "../lib/translator.js";

marked.setOptions({
  renderer: new TerminalRenderer(),
});

/**

Tradução de seletores simples:
* -> qualquer elemento
body -> elemento do tipo body
[x] -> qualquer elemento que possui um atributo x.
a[x][y]:a: -> qualquer elemento com o identificador `x` das classes a, b, c com um atributo `x, y` e `z`, um atributo `x` igual a `x`, um atributo `y` igual a `y`, um atributo `b` igual a `c` e um atributo `x` estando com o mouse sobre, não visitado.

Solução#1
Para traduzir um seletor complexo:
1. Encontre os membros da frase:
  1. Encontre o sujeito da seleção e armazene em S.
  2. Encontre os atributos e armazene em A.
  3. Encontre as classes e armazena em C.
  4. Encontre o identificador e armazene em I.
  5. Encontre as pseudoclasses e armazene em P.
2. Compile a frase com esses membros:
  1. Inicie uma frase com tradução(S).
  2. Adicione traducao(I), iniciando com ` identificador por ...`.
  3. Adicione traducao(C), iniciando com ` das classes ... `
  4. Adicione traducao(A), iniciando com ` com ... ` 
  5. Adicione traducao(P), iniciando com ` estando ...`
*/

function group(label, fn) {
  console.group(label);
  fn();
  console.groupEnd();
}

function log(data) {
  console.log(
    util.inspect(data, {
      showHidden: false,
      depth: null,
      colors: true,
    })
  );
}

group("translator.translate", () => {
  log(T.translate("b a > c ~ c"));
});

("Um elemento do tipo `c` que está logo após um elemento do tipo `c` que é filho direto (ou seja, está no primeiro nível) de um elemento do tipo `a` que é descendente de um elemento do tipo `b`.");

("Um elemento do tipo `c`, logo após um elemento do tipo `c` que é filho direto (ou seja, está no primeiro nível) de um elemento do tipo `a`, descendente de um elemento do tipo `x`.");
