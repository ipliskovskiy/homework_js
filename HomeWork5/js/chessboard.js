function getClassName(str, column) {
    if (str % 2 == 0){
        if (column % 2 == 0) {
            return "dark";
        } else {
            return "light";
        }
    } else {
        if (column % 2 == 0) {
            return "light";
        } else {
            return "dark";
        }
    }
}


var table = document.createElement("table"),tr,td,th;
table.className = "chess-board";
for(var str = 0, idElement = 64; str <= 9; str++){
    tr = document.createElement("tr");
    table.append(tr);
    for(var column = 0; column <= 9; column++){
        if (((str == 0) | (str == 9)) & (column > 0) & (column < 9)) {
            var bukva = String.fromCharCode + 96
            th = document.createElement("th");
            th.innerHTML = ""+ String.fromCharCode(96 + column) +"";
            tr.append(th);
        } else {
            if (((column == 0) | (column == 9)) & (str > 0) & (str < 9)) {
                th = document.createElement("th");
                th.innerHTML = (9 - str);
                tr.append(th);
            } else if (((column == 0) | (column == 9)) & (str == 0) | (str == 9)){
                th = document.createElement("th");
                tr.append(th);
            } else {    
                td = document.createElement("td");
                td.className = getClassName(str, column)
                // td.innerHTML = "<p>" + idElement + "</p>"
                td.id = "c" + idElement--;
                tr.append(td);
            }
        }
    }
}

 document.querySelector("div").append(table);