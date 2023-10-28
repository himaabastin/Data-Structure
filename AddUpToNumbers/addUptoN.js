//1st Method
const addUptoN = (num) => {
  let total = 0;
  for (i = 0; i <= num; i++) {
    total += i;
  }
  return total;
};

const startTime = new Date();
console.log(addUptoN(1000000000));
const endTime = new Date();

const timeDiff = (endTime - startTime) / 1000;

console.log(`Time diff = ${timeDiff} s`); //almost 1.2 s

