function power(val, pow){
    if (pow == 1) {
        return val;
    } else {
        return (val * power(val, pow - 1));
    }
}


val = +prompt('Введите число');
pow = +prompt('Введите степень');

alert(power(val, pow));