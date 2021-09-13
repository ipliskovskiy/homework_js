function checkValue(value){
    if(!isNaN(value) && (value > 0) && (value <= 999)) {
        return true;
    }
    return false;
}

function numberic(value){
        var numberObject = {}
        if (checkValue(value)) {
            value.split('');
            var length = value.length;
            switch (length){
                case 3:
                    numberObject.hundreds = value[0];
                case 2:
                    numberObject.dozens = value[length - 2];
                case 1:
                    numberObject.units = value[length - 1];
            }

        }  else {
            alert('Вы ввели не корректное значение!')
        }
        return numberObject;
}

console.log(numberic(prompt('Введите число от 0 до 999')));