const word = "Hello";
// inbuilt
const reversedWord = word.split("").reverse().join("");
console.log(reversedWord);

//traversal
let reverse="";
for (let i = word.length - 1; i >= 0; i--) {
  reverse += word[i];
}
console.log(reverse);
