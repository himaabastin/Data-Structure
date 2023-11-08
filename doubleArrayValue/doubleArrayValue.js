// Space complexity :O(n) "as size of input array increases the space taken for newArr also increases"

const doubleArrayValue = (arr) => {
  let newArr = [];

  for (i = 0; i < arr.length; i++) {
    newArr.push(2 * arr[i]);
  }

  return newArr;
};

const arr = [2, 8, 1, 6, 30];

console.log(doubleArrayValue(arr));
