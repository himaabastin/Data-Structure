// countUnique Values

// Implement a function called countUnique Values, which accepts a sorted array, and counts the unique values in the array.There can be negative numbers in the array, but it will always be sorted.

const countUniqueValue = (arr) => {
  if (!arr.length) return console.log(0);
  let i = 0;
  for (let j = 1; j < arr.length; j++) {
    if (arr[i] !== arr[j]) {
      i++;
      arr[i] = arr[j];
    }
  }
  return console.log(i + 1);
};

countUniqueValue([1, 2, 2, 3, 5, 5, 5, 6, 6, 6]);
//  i
// [1, 2, 3, 6, 5, 5, 5, 6, 6, 6]
//     j
