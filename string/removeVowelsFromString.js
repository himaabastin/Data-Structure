function removeVowels(strg) {
  let value = "";

  for (let i = 0; i < strg.length; i++) {
    if (
      strg[i] === "a" ||
      strg[i] === "e" ||
      strg[i] === "i" ||
      strg[i] === "o" ||
      strg[i] === "u"
    ) {
      continue;
    }
    value += strg[i];
  }
  return value;
}

console.log(removeVowels("apple"));

