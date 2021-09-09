var first = 10, second = 20;
console.log("first = " + first + "\nsecond = " + second);
[first, second] = [second, first];
console.log("first = " + first + "\nsecond = " + second);
first = [second, second = first][0];
console.log("first = " + first + "\nsecond = " + second);