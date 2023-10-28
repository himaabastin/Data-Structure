// Big O n^2 

const printAllPairs = (n) => {
  for (i = 0; i <= n; i++) {
    for (j = 0; j <= i; j++) {
      console.log(i, j);
    }
  }
};

printAllPairs(2);
