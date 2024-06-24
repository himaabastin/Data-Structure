var arrayStringsAreEqual = function (word1, word2) {
  let first = word1.join("");
  let second = word2.join("");
  return first === second ? true : false;
};
console.log(arrayStringsAreEqual(["ab", "c"], ["a", "bc"]));
