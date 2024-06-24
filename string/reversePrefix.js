var reversePrefix = function (word, ch) {
  let pre = [];
  let preFound = false;
  for (let i = 0; i < word.length; i++) {
    !preFound && pre.push(word[i]);
    if (word[i] === ch && !preFound) {
      pre.reverse();
      preFound = true;
    } else if (preFound) {
      pre.push(word[i]);
    }
  }
  let result = pre.join("");
  return result;
};
console.log(reversePrefix("amih-ab", "h"));
