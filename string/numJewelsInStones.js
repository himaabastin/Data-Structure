var numJewelsInStones = function (jewels, stones) {
  let noOfStones = 0;
  for (let jewel of jewels) {
    for (let stone of stones) {
      if (jewel === stone) {
        noOfStones += 1;
      }
    }
  }
  return noOfStones;
};

console.log(numJewelsInStones("z", "ZZ"));
