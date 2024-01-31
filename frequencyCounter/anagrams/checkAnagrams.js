function validAnagram(strg1, strg2) {
  if (strg1.length !== strg2.length) {
    return false;
  }

  let strg1Frequency = {};
  let strg2Frequency = {};

  for (let letter of strg1) {
    strg1Frequency[letter] = (strg1Frequency[letter] || 0) + 1;
  }

  for (let letter of strg2) {
    strg2Frequency[letter] = (strg2Frequency[letter] || 0) + 1;
  }

  for (let key in strg1Frequency) {
    if (!(key in strg2Frequency)) {
      return false;
    }
    if (strg1Frequency[key] !== strg2Frequency[key]) {
      return false;
    }
  }
  return true;
}

validAnagram("god", "dog");
