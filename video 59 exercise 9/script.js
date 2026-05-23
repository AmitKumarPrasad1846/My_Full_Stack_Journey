//Exercise 9 - Faulty Calculator.

//Create a faulty calculator using JavaScript.
/*It takes two number as input.
It proformes wrong operations as follows.

1. + ---> -
2. * ---> +
3. - ---> /
4. / ---> ** 

It performs wrong operations 10% of the times.*/


function correct(a, b, op) {
    if (op === "+") {
        return a + b
    } else if (op === "*") {
        return a * b
    } else if (op === "-") {
        return a - b
    } else if (op === "/") {
        return a / b
    } else {
        return "invalid operator"
    }
}

function faulty(a, b, op) {
    if (op === "+") {
        return a - b
    } else if (op === "*") {
        return a + b
    } else if (op === "-") {
        return a / b
    } else if (op === "/") {
        return a ** b
    } else {
        return "Invalid operator"
    }
}

let a = 8
let b = 2
let op = "/"

// let isFaulty = Math.random() < 0.1 ? (faulty(a, b, op)) : (correct(a, b, op));  // ternary operator

let isfaulty = Math.random() < 0.1
if (result = isfaulty) {
    console.log(faulty(a, b, op));
}
else {
    console.log(correct(a, b, op))
}

