// accessing element have O(1),can access using index number

const arr = ["hi", "hello", true, 1, 2, 3, "how are you"];

const accessingElement = (array, indexNumber) => {
  const element = array[indexNumber];
  return element;
};

console.log(accessingElement(arr, 6));
