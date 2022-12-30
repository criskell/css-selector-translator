const quoteCode = (code) => "`" + code + "`";

const capitalize = (string) => string[0].toUpperCase() + string.slice(1);

const translateArray = (array, lastSep = " e ") => {
  if (array.length === 0) return "";
  if (array.length === 1) return array[0];

  const init = array.splice(0, array.length - 1);
  const tail = array[array.length - 1];

  return init.join(", ") + lastSep + tail;
};

module.exports = {
  quoteCode,
  capitalize,
  translateArray,
};