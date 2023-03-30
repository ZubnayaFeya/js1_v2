function makeObj(num) {
    let obj = {};
    if(num > 999) {
        console.log("Ваше число превышает лимит");
    }else {
        obj.единицы = num % 10;
        num = parseInt(num / 10);

        obj.десятки = num % 10;
        num = parseInt(num / 10);

        obj.сотни = num;
    }
    return obj;
}

//while(true) {
//    let userNum = +prompt("введите число от 0 до 999");
//    let result = makeObj(userNum);
//    alert(`${result.единицы} ${result.десятки} ${result.сотни}`)
//}


/*
Игра кто хочет стать миллионером
*/
let one = [
    {
        question: "Какого цвета крокодил?",
        var1: "синего",
        var2: "белого",
        var3: "зелёного",
        var4: "красного",
        good: "зелёного"
    },
    {
        question: "Какого цвета небо?",
        var1: "синего",
        var2: "белого",
        var3: "зелёного",
        var4: "красного",
        good: "зелёного"
    },
    {
        question: "Какого цвета море?",
        var1: "синего",
        var2: "белого",
        var3: "зелёного",
        var4: "красного",
        good: "зелёного"
    },
    {
        question: "Какого цвета солнце?",
        var1: "синего",
        var2: "белого",
        var3: "зелёного",
        var4: "красного",
        good: "зелёного"
    }
]
let two = [
    {
        question: "Какого цвета крокодил?",
        var1: "синего",
        var2: "белого",
        var3: "зелёного",
        var4: "красного",
        good: "зелёного"
    },
    {
        question: "Какого цвета небо?",
        var1: "синего",
        var2: "белого",
        var3: "зелёного",
        var4: "красного",
        good: "зелёного"
    },
    {
        question: "Какого цвета море?",
        var1: "синего",
        var2: "белого",
        var3: "зелёного",
        var4: "красного",
        good: "зелёного"
    },
    {
        question: "Какого цвета солнце?",
        var1: "синего",
        var2: "белого",
        var3: "зелёного",
        var4: "красного",
        good: "зелёного"
    }
]
let tree = [
    {
        question: "Какого цвета крокодил?",
        var1: "синего",
        var2: "белого",
        var3: "зелёного",
        var4: "красного",
        good: "зелёного"
    },
    {
        question: "Какого цвета небо?",
        var1: "синего",
        var2: "белого",
        var3: "зелёного",
        var4: "красного",
        good: "зелёного"
    },
    {
        question: "Какого цвета море?",
        var1: "синего",
        var2: "белого",
        var3: "зелёного",
        var4: "красного",
        good: "зелёного"
    },
    {
        question: "Какого цвета солнце?",
        var1: "синего",
        var2: "белого",
        var3: "зелёного",
        var4: "красного",
        good: "зелёного"
    }
]



// Читаем json-файл. Результатом в data будет строка.
//const readFile = fs.readFileSync('questions.json', 'utf8');
//парсим полученую строку в объект
//const qwe = JSON.parse(readFile);
// После парсинга переменной мы получаем объект, к свойствам которого можно обращаться как обычно, например чере "."


function con(round) {
    let gameBlock;
    if(round <= 5) {
        //gameBlock = qwe.one[parseInt(Math.random * 10)]
        gameBlock = one[1] // для теста пока не наполнили массивы вопросами
    } else if(round <= 10) {
        //gameBlock = qwe.one[parseInt(Math.random * 10)]
        gameBlock = two[1] // для теста пока не наполнили массивы вопросами
    }else {
        //gameBlock = qwe.one[parseInt(Math.random * 10)]
        gameBlock = tree[1] // для теста пока не наполнили массивы вопросами
    }
    let answer = prompt(gameBlock.question);
    if(answer == gameBlock.good){
        return true
    }
    return false
}


function whoWantsToBecomeAMillionaire() {
    let round = 1;
    while(round <= 15) {
        let gameRound = con(round);
        if(gameRound){
            alert(`Вы правильно ответили на ${round} вопрос`);
            round++;
        } else {
            alert(`Вы проиграли на ${round} раунде.`)
            return
        }
    }
    alert("Поздравляем с победой, вы миллионер!")
}

whoWantsToBecomeAMillionaire();