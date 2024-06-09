const str1 = "hi";
const strg2 = "how are you";
const strg3 = "hima";
const strg4 = "orange, apple, aswin, aswin ";
const strng5 = "                         Antony BasTIN      ";
const strg6 = "Ronlado-is-a-legend";
const resultStrg = str1.concat(` ${strg2}  ${strg3}`);
const sliceStrg = strg2.slice(4, 7);
const subString = strg4.substring(15, 20);
const subStr = strg4.substr(15, 5); //deprecated
const replaceStr = strg4.replace("apple", "hima");
const replaceAll = strg4.replaceAll("aswin", "ASWIN C");
const upperCase = strg3.toUpperCase();
const trimStrg = strng5.trim();
const padStartstrg = str1.padStart(10, "Aswin");
const padEndstrg = str1.padEnd(17, "Aswin");
const charAtStr = strg3.charAt(3);
const codeCharAt = strg3.charCodeAt(0);
const splitStrg = strg6.split("-");

//string primitive
const primString = "Hi prim";

// string object
const strngObj = new String("hi strg obj");
//  STRING ITERATION METHOD

// for loop
for (let i = 0; i < primString.length; i++) {
  console.log(`${i + 1}: ${primString[i]}`);
}

// for of
for (const letter of primString) {
  console.log(letter);
}
let index = 0;
while (index < primString.length) {
  console.log(primString[index]);
  index++;
}

// COncat

let letter = "hi";
letter += " hima";
console.log(letter);

const letterArray = ["Hi", "ASWIN", "C"];
console.log(letterArray.join("--"));
