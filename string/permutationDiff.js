var findPermutationDifference = function (s, t) {
  let perDiff = 0;
  for (let i = 0; i < s.length; i++) {
    let value = Math.abs(s.indexOf(s[i]) - t.indexOf(s[i]));
    perDiff += value;
  }

  return perDiff;
};
console.log(findPermutationDifference("abc", "bac"));

var defangIPaddr = function (address) {
  let addSplit = address.split("");
  for (let i = 0; i < addSplit.length; i++) {
    if (addSplit[i] === ".") {
      addSplit[i] = "[.]";
    }
  }
  return addSplit.join('');
  
};
console.log(defangIPaddr("1.1.1.1"));
