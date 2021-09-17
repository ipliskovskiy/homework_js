function sum(a, b){
    return a + b;
}

function multiplication(a, b){
    return a * b;
}

function subtraction(a, b){
    return a - b;
}

function division(a, b){
    return a / b;
}

var a = +prompt("Введите число для \"a\"");
var b = +prompt("Введите число для \"b\"");

console.log(sum(a, b));
console.log(multiplication(a, b));
console.log(subtraction(a, b));
console.log((division(a, b)).toFixed(3));
