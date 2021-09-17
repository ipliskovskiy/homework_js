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


function mathOperation(arg1, arg2, operation){
    switch(operation) {
        case "sum", "+":
            return sum(arg1, arg2);
        case "multiplication", "*":
            return multiplication(arg1, arg2);
        case "subtraction", "-":
            return subtraction(arg1, arg2);
        case "division", "/":
            return division(arg1, arg2);
        default:
            return "Неверная операция";
    }
}

var a = +prompt("Введите число для \"a\"");
var b = +prompt("Введите число для \"b\"");
var operation = prompt("Введите операцию");

alert(mathOperation(a, b, operation));