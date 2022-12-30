import { translate } from "../lib";

const $output = document.querySelector("#terminal-output");

document.querySelector("#terminal-input").addEventListener("input", (e) => {
  const selector = e.target.value;

  const translations = translate(selector);
  const compiled = translations.length > 0 ? "<div>" + translations.map(
    (translation) => {
      const output = "Começando do lado direito, temos: " + translation.to;

      return `<p class="selector-intro">Analisando o seletor <code>${translation.from}</code>...</p>`
      + compileSimpleMarkdown(escape(output))
      + "</div>";
    }
  ).join("<div>") : "";

  $output.innerHTML = compiled;
});

function compileSimpleMarkdown(markdown) {
  return markdown.replace(/\`(.*?)\`/g, "<code>$1</code>")
    .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
    .replace(/(.+?)(\n|$)+/g, "<p>$1</p>");
}

function escape(html) {
  return html
   .replace(/&/g, "&amp;")
   .replace(/</g, "&lt;")
   .replace(/>/g, "&gt;")
   .replace(/"/g, "&quot;")
   .replace(/'/g, "&#039;");
}