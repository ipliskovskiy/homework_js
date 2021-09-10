function getCount(name){
    var attempt = 0, count;
    while (attempt < 3) {
        count = +prompt("Введите произвольное число для \"" + name + "\"");
        console.log("count = "+ count);
        if (isNaN(count)) {
            alert("Значение должно быть числовым");
            if (attempt < 3) {
                attempt++;
                console.log("attempt = " + attempt);
            } else {
                alert("Извините, попробуйте в другой раз.");
                console.log("Тяжелый пользователь :-(")
                throw new Error("Byda, this is fatal error!");
            }
        } else {
            return count;
        }
    }

}


function computation(a, b) {
    console.log("a: " + a + "\nb: " + b);
    if (a >= 0 && b >= 0) {
        console.log("Положительные числа, вычисляем разность!");
        alert("Разность: "+ a + " - " + b + " = " + (a - b));
    } else if (a < 0 && b < 0){
        console.log("Отрицательные числа, вычисляем произведение!");
        alert("Произведение: "+ a + " * " + b + " = " + a * b);
    } else {
        console.log("Числа разные по знаку, вычисляем сумму!");
        alert("Сумма: "+ a + " + " + b + " = " + (a + b));
    }
}


var a = getCount("a"), b = getCount("b");
computation(a,b);