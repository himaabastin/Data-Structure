// space complexity : O(1)  (total =0  and i=0)
const sumOfArray = (arr) => {
  let total = 0;
  for (i = 0; i < arr.length; i++) {
    total += arr[i];
  }
  return total;
};

const array1 = [1, 5, 2, 0];

console.log(sumOfArray(array1));
