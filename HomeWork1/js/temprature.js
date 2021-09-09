var tCelsius = parseFloat(prompt("Введите температуру в градусах по Цельсию"));
if (isNaN(tCelsius)) {
    alert("Значение должно быть числовым");
} else {
    alert((( 9 / 5) * tCelsius + 32).toFixed(2));
}
 