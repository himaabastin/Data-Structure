// Write a function called sumZero which accepts a sorted array of integers.The function should find the first pair where the sum is 0 .Returns an array that includes both values that the sum is to zero or undefined if pair does not exist

// sumZero([-3,-2,-1,0,2,3]) :[-3,3]

const sumZero = (arr) => {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    if (arr[left] + arr[right] === 0) {
      return console.log([arr[left], arr[right]]);
    } else if (arr[left] + arr[right] < 0) {
      left++;
    } else {
      right--;
    }
  }
  return console.log("Pair not found");
};

sumZero([-7, -4, -1, 1, 3, 8]);
