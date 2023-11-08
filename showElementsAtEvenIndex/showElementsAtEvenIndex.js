// spaceComplexity :O(n) timeComplexity : O(n)
const showElementsAtEvenIndex = (arr) => {
  const newArr = [];

  for (let i = 0; i < arr.length; i++) {
    if (i % 2 === 0) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
};

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

console.log(showElementsAtEvenIndex(arr));
