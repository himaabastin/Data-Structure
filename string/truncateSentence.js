var truncateSentence = function (s, k) {
    let sentArr = s.split(" ")
    let newSen = []
    for (let i = 0; i < k; i++) {
        newSen.push(sentArr[i])
    }
    return newSen.join(" ")
};
console.log(truncateSentence("What is the solution to this problem","4"));