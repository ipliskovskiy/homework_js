function setFigures(idElement, figure){
    var boardCell = document.getElementById(idElement);
    console.log(idElement + "  " + figure + ",  " + boardCell);
    boardCell.innerHTML = figure;
}


function mapping(idElement) {
    if (idElement == 1 | idElement == 8) {setFigures("c" + idElement, whiteFigures.castle);}
    if (idElement == 2 | idElement == 7) {setFigures("c" + idElement, whiteFigures.knight);}
    if (idElement == 3 | idElement == 6) {setFigures("c" + idElement, whiteFigures.bishop);}
    if (idElement == 5) {setFigures("c" + idElement, whiteFigures.queen);}
    if (idElement == 4) {setFigures("c" + idElement, whiteFigures.king);}
    if (idElement > 8 & idElement <= 16) {setFigures("c" + idElement, whiteFigures.pawn);}
    if (idElement == 64 | idElement == 57) {setFigures("c" + idElement, blackFigures.castle);}
    if (idElement == 63 | idElement == 58) {setFigures("c" + idElement, blackFigures.knight);}
    if (idElement == 62 | idElement == 59) {setFigures("c" + idElement, blackFigures.bishop);}
    if (idElement == 61) {setFigures("c" + idElement, blackFigures.queen);}
    if (idElement == 60) {setFigures("c" + idElement, blackFigures.king);}
    if (idElement <= 56 & idElement >= 49) {setFigures("c" + idElement, blackFigures.pawn);}
}
    


function initialize(){
    for (var i = 1; i <= 64; i++){
        mapping(i);
    }
}

initialize();