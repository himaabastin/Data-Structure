var mostWordsFound = function (sentences) {
  let maxNo = 0;
  for (let i = 0; i < sentences.length; i++) {
    let words = sentences[i].split(" ")
console.log(i,":",words);
    let length = words.length;
    maxNo = Math.max(length, maxNo);
  }
  return maxNo;
};
console.log(
  mostWordsFound([
    "alice and bob love leetcode",
    "i think so too",
    "this is great thanks very much",
  ])
);
