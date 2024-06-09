function checkPalindrome1(word) {
  let j = word.length - 1;
  for (let i = 0; i < word.length / 2; i++) {
    if (word[i] !== word[j]) {
      return false;
    }
    j--;
  }
  return true;
}

// checkPalindrome1("malayalam");
// console.log(checkPalindrome1("malayalam"));

function checkPalindrome2(word) {
  let reverseWord = "";
  for (let i = word.length - 1; i >= 0; i--) {
    reverseWord += word[i];
  }
  if (word === reverseWord) return true;

  return false;
}

console.log(checkPalindrome2("malayalam"));
