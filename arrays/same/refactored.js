// Write a function called "same" which accpept 2 arrays.The function should return true if every value of the array has its corresponding value squared in the second array.The frequency must be same

const same = (arr1, arr2) => {
  // check whether length is same
  if (arr1.length !== arr2.length) {
    return console.log(false);
  }
  // find frequency of each elems

  let frequencyCounter1 = {};
  let frequencyCounter2 = {};

  for (let value of arr1) {
    frequencyCounter1[value] = (frequencyCounter1[value] || 0) + 1;
  }

  for (let value of arr2) {
    frequencyCounter2[value] = (frequencyCounter2[value] || 0) + 1;
  }

  for (let key in frequencyCounter1) {
    //   find whether square of key of first array is present on second
    if (!(key ** 2 in frequencyCounter2)) {
      return console.log(false);
    }
    //   find whether value of squared key is same as value of root
    if (frequencyCounter1[key] !== frequencyCounter2[key ** 2]) {
      return console.log(false);
    }
  }
  return console.log(true);
};

same([1, 2, 3, 3, 4], [16, 1, 9, 4, 9]);
