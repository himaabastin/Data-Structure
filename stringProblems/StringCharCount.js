// Write a function which accepts a string  & returns count of each character

const stringCharCount = (strg) => {
  // result object
  const result = {};
  // loop through each character
  for (i = 0; i < strg.length; i++) {
    // if char already in obj add 1 to it
    const char = strg[i].toLowerCase();
    if (result[char] > 0) {
      result[char]++;
    }
    // if char not present add key and set 1
    else {
      result[char] = 1;
    }
    // if char not number/letter (space, symbols etc) add them as separate key value
  }

  // return object
  return result;
};

console.log(stringCharCount("Hi I am Hima ,hima is 22 years old"));
