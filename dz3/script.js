function easyNums() {
    let i = 1;
    while (i < 100) {
        let count = 0
        let j = 1
        while (j <= i / 2) {
            if (i % j == 0) {
                count++
            }
            if (count > 2) {
                break;
            }
            j++;
        }
        if (count <= 1) {
            document.write(i + "<br>");
        }
        i++;
    }
}


function doWhile() {
    let i = 0;
    do {
        if(i == 0) {
            alert(`${i} - это ноль`);
        } else if(i % 2 == 0){
            alert(`${i} - это чётное число`);
        }else {
            alert(`${i} - это не чётное число`);
        }
        i++;
    } while (i <= 10);
}


function for_(){
    for(let i=0; i<=10; alert(i++));
}

function pyramid(){
    let a = 'x';
    for(let i=1; i<=20; i++){
        console.log(a);
        a += 'x';
    }
}

/* ПРАКТИКУМ

Быки и коровы
Усложним нашу предыдущую игру. Ваш соперник (компьютер, например), загадывает 4-значное
число, состоящее из неповторяющихся цифр. Ваша задача - угадать его. Кстати, число ходов можно и
ограничить. В качестве подсказок выступают «коровы» (цифра угадана, но её позиция - нет) и «быки»
(когда совпадает и цифра и её позиция). То есть если загадано число «1234», а вы называете «6531»,
то результатом будет 1 корова (цифра «1») и 1 бык (цифра «3») .
Попытки отгадать число будут идти через диалоговое окно – prompt. Браузер будет сообщать в ответ
больше или меньше загаданного наше предположение.
Алгоритм будет таким:
1 Браузер генерирует число и приглашает пользователя к игре.
2 Выводится окно запроса предположения.
3 Браузер проверяет число и возвращает результат.
4 Повторяем до тех пор, пока число не будет угадано.
5 Как только число угадано, браузер сбрасывает число попыток и генерирует новое число.
*/

function generateNum(){
    //загадывает 4-значное число, состоящее из неповторяющихся цифр.
    let num = [];
    for(let i=0; i<4; i++){
        a = parseInt(Math.random() * 10);
        if(num.indexOf(a) == -1) {
            num.push(a);
        } else {
            i--;
        }
    }
    return num;
}

function parseNum(num){
    let userArr = [];
    for(let i=0; i<4; i++){
        let a = num % 10;
        if(userArr.indexOf(a) == -1) {
            userArr.unshift(num % 10);
        } else {
            return
        }
        num = parseInt(num/10);
    }
    return userArr;
}

function comparingNumbers(compNum, userNum){
    let cow = 0;
    let bull = 0;
    for(let i=0; i<4; i++){
        if(compNum.indexOf(userNum[i]) == i) {
            bull++;
        } else if (compNum.indexOf(userNum[i]) != -1) {
            cow++;
        }
    }
    return [cow, bull];
}

function party(){
    let hiddenNum = generateNum();

    let round = 1;

    while(round <= 10){
        let userNum = parseNum(+prompt("введите 4 не одинаковые цифры"));
        if(userNum) {
            let resutComparing = comparingNumbers(hiddenNum, userNum);
            let cow = resutComparing[0];
            let bull = resutComparing[1];
            if(bull == 4){
                alert(`Вы победили на ${round} кону!`);
                return;
            } else {
                alert(`У вас ${bull} - быков и ${cow} - коров.`);
            }
        } else {
            alert("вы ввели число с повторяющимися цифрами")
            round--;
        }
        round++;
    }
    alert(`Вы проиграли, загаданное число было hiddenNum`);
}

party();