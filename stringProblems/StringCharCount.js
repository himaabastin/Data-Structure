// Write a function which accepts a string  & returns count of each character

// const stringCharCount = (strg) => {
//   // result object
//   const result = {};
//   // loop through each character
//   for (i = 0; i < strg.length; i++) {
//     // if char already in obj add 1 to it
//     const char = strg[i].toLowerCase();

//     // if char not number/letter (space, symbols etc) add them as separate key value
//     if (/[a-z0-9]/.test(strg)) {
//       if (result[char] > 0) {
//         result[char]++;
//       }
//       // if char not present add key and set 1
//       else {
//         result[char] = 1;
//       }
//     }
//   }

//   // return object
//   return result;
// };
const stringCharCount = (strg) => {
  const result = {};

  for (var char of strg) {
    if (isAlphaNumeric(char)) {
      char = char.toLowerCase();
      result[char] > 0 ? result[char]++ : (result[char] = 1);
    }
  }

  return result;
};

function isAlphaNumeric(char) {
  let code = char.charCodeAt(0);
  if (
    !(code > 47 && code < 58) && //numeric (0-9)
    !(code > 64 && code < 91) && //upper alpha (A-Z)
    !(code > 96 && code < 123) // lower alpha (a-z)
  ) {
    return false;
  }
  return true;
}
console.log(stringCharCount("Hello World Hi !!!! "));
