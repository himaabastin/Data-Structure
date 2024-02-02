// Write a function called "same" which accpept 2 arrays.The function should return true if every value of the array has its corresponding value squared in the second array.The frequency must be same
//  A NAIVE SOLUTION O(N^2)
const same = (arr1, arr2) => {
  // if length of arrays not correct return false
  console.log(arr1, arr2);
  if (arr1.length !== arr2.length) {
    return console.log(false);
  }

  for (i = 0; i < arr1.length; i++) {
    // loop over
    const correctIndex = arr2.indexOf(arr1[i] * arr1[i]);
    // console.log(arr2.indexOf(i * i));
    // console.log("correct Index", correctIndex);
    if (correctIndex === -1) {
      return console.log(false);
    }
    arr2.splice(correctIndex, 1);
    // console.log("arr2", arr2);
  }
  return console.log(true);
};

same([1, 2, 3, 1], [9, 4, 1, 1]);
