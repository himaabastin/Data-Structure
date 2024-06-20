let finalValueAfterOperations = function (operations) {
    let finalValue = 0

    for (let i = 0; i < operations.length; i++) {
        if (operations[i] === "++X" || operations[i] === "X++") {
            finalValue += 1
        } else {
            finalValue -= 1

        }

    }
    return finalValue
};
console.log(finalValueAfterOperations(["X++", "++X", "--X", "X--"]));