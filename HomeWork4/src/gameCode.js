//После игры необходимо спросить номер вопроса. 
//По номеру вопроса нужно вывести текст вопроса и текст выбранного ответа

var countQuestion;
var worksList = [];
var historyGame = new Map();  


initialize();
gameEngine(countQuestion);


function initialize(){
    worksList = Object.keys(works);
    countQuestion = worksList[worksList.length - 1 ][0].charCodeAt(0) - 96;
}


function buildWindow(windowNumber) {
    var answerType = String.fromCharCode(96 + windowNumber);
    var window = works[answerType + '00'];
    for (var i = 1; i <=  works[answerType + '0']; i++) {
        window += works[answerType + i];
    }
    window += '-1 - Выход из игры';
    return [window, works[answerType + '0']];
}


function askAnswer(window, countAnswer) {
    do{
        var ok = false;
        event = +prompt(window);
        if (event == -1) {
            break;
        }
        else {
            ok = isAnswer(countAnswer, event);
        }
    } while (!ok);
    return event;
}


function gameEngine(countQuestion) {
    var window, countAnswer, event;
    for (var i = 1; i <= countQuestion; i++) {
        var fullwindow = buildWindow(i);
        window = fullwindow[0];
        countAnswer = fullwindow[1];
        event = askAnswer(window, countAnswer);
        saveAnswer(i, event);
        if (event == -1) {
            break;
        }
        if ((event > 1) && (i != countQuestion - 1)) {
            i += event - 1;
        }
    }
    alert('Спасибо за игру');
    window = 'В вашей игре ' + historyGame.size + ' окон.\nКакое окно вы хотите увидеть?\n-1 для выхода.';
    event = askAnswer(window, historyGame.length);
    if (event != -1) { 
        var i = 1;
        for (var pair of historyGame.entries()){ // Грязно не смог найти как получить MAP по ID.
            if (i == event){
                window = buildWindow(pair[0]);
                window += '\nВаш ответ: ' + pair[1];
                alert(window);
                break;
            }
            i++
        }
    }

}


function isAnswer(q, event) {
    if (isNaN(event) || !isFinite(event)) {
        alert('Вы ввели недопустимый символ');
        return false;
    }
    else if (event < 1 || event > q) {
        alert('Ваше число выходит из допустимого диапозона');
        return false;
    }
	return true;
}


function saveAnswer(number, event) {
    console.log(number + ' ' + event + ' , ' + historyGame);
    historyGame.set(number, event);
    console.log(historyGame);
}