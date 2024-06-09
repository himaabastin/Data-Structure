function checkAnagram(str1, str2) {
  if (str1.length !== str2.length) return false;

  str1 = str1.replace(/\s/g, "").toLowerCase();
  str2 = str2.replace(/\s/g, "").toLowerCase();

  let counter = {};
  for (let letter of str1) {
    counter[letter] = counter[letter] ? counter[letter] + 1 : 1;
  }

  for (let letter of str2) {
    if (!counter[letter]) return false;

    counter[letter] -= 1;
  }
  return true;
}

const anagramInbuilt = (strg1, strg2) => {
  // check length is eqaul
  if (strg1.length !== strg2.length) return false;

  // remove all space and convert to lowercase :=> "Hi How ARe you" ==> "hihowareyou"
  strg1 = strg1.replace(/\s/g, "").toLowerCase();
  strg2 = strg2.replace(/\s/g, "").toLowerCase();

  // split to array,sort that array join to form string
  strg1 = strg1.split("").sort().join("");
  strg2 = strg2.split("").sort().join("");

  // splited and sorted word is same ==> true
  if (strg1 === strg2) return true;

  return false;
};

console.log(checkAnagram("hi Howw are You", "ouy how rea hii"));
