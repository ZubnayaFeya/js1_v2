function one() {
    let a = +prompt('Введите первое число');
    let b = +prompt('Введите второе число');
    if (a >= 0 && b >= 0) {
        alert(a - b);
    } else if (a < 0 && b < 0) {
        alert(a * b);
    } else {
        alert(a + b);
    }
}


function two() {
    let a = +prompt('Введите число от 0 до 15')
    switch (true) {
        case (a < 1):
            alert(0)
        case (a < 2):
            alert(1)
        case (a < 3):
            alert(2)
        case (a < 4):
            alert(3)
        case (a < 5):
            alert(4)
        case (a < 6):
            alert(5)
        case (a < 7):
            alert(6)
        case (a < 8):
            alert(7)
        case (a < 9):
            alert(8)
        case (a < 10):
            alert(9)
        case (a < 11):
            alert(10)
    }
}

function mySum(a, b) {
    return a + b;
}

function myDiff(a, b) {
    return a - b;
}

function myMultiply(a, b) {
    return a * b;
}

function myDivision(a, b) {
    if (b == 0) {
        alert("На ноль делить нельзя!");
        return
    }
    return a / b;
}

function mathOperation(a, b, operation) {
    switch (operation) {
        case '+':
            return mySum(a, b);
        case '-':
            return myDiff(a, b);
        case '/' || ':':
            return myDivision(a, b);
        case '*':
            return myMultiply(a, b);
    }
}

function recursiveMultipy(val, pow) {
    let res = val;
    if (pow > 1) {
        return res * recursiveMultipy(val, pow - 1);
    } else {
        return val;
    }
}

/* ПРАКТИКУМ
Пишем игру "угадай число"

Попытки отгадать число будут идти через диалоговое окно – prompt. Браузер будет сообщать в ответ,
больше или меньше загаданного наше предположение.

Алгоритм будет таким:
1 Браузер генерирует число и приглашает пользователя к игре.
2 Выводится окно запроса предположения.
3 Браузер проверяет число и возвращает результат.
4 Повторяем до тех пор, пока число не будет угадано.
5 Как только число угадано, браузер сбрасывает число попыток и генерирует новое число.*/

function round() {
    let hiddenNumber = parseInt(Math.random() * 10000);
    let numberAttempts = 1
    while (true) {
        let userNum = +prompt("Попробуйте угадать загаданное число");
        if (userNum == hiddenNumber) {
            alert(`Вы угадали с ${numberAttempts} попытки! Поздравляем с победой!`);
            break;
        } else if (userNum > hiddenNumber) {
            alert("Загаданное число меньше вашего.");
        } else {
            alert("Загаданное число больше вашего.");
        }
        numberAttempts++
    }
}


function guessTheNumber() {
    while (true) {
    round();
    }
}

guessTheNumber();
