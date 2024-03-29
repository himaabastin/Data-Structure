// Write a function called sumZero which accepts a sorted array of integers.The function should find the first pair where the sum is 0 .Returns an array that includes both values that the sum is to zero or undefined if pair does not exist

// sumZero([-3,-2,-1,0,2,3]) :[-3,3]

// naive soln

const sumZero = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === 0) {
        return [arr[i], arr[j]];
      }
    }
  }
};
console.log(sumZero([-3, -2, -1, 0, 2, 3]));
