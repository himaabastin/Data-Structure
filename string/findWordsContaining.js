var findWordsContaining = function (words, x) {
  let result = [];
  for (let i = 0; i < words.length; i++) {
    let word = words[i];
    word.includes(x) ? result.push(i) : result;
  }

  return result;
};
console.log(findWordsContaining(["leet", "code"], "e"));
