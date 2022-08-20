export function translateAsEnumeration(array, lastSep = " e ") {
  if (array.length === 1) return array[0];

  const init = array.splice(0, array.length - 1);
  const tail = array[array.length - 1];

  return init.join(", ") + lastSep + tail;
}

export function quoteCode(code) {
  return "`" + code + "`";
}

export function capitalize(string) {
  return string[0].toUpperCase() + string.slice(1);
}
