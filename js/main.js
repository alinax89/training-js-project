'use strict';

let total = 0;

var number;
var result;
for (let i = 0; i < 15; i++) {
    var first = Math.floor((Math.random() * 6) + 1);
    var second = Math.floor((Math.random() * 6) + 1);

    total += first + second;

    if (i === 0 || i === 13) {
        continue;
    }

    if (first === second) {
        number = second;
        document.getElementById("result").innerHTML += "Выпал дубль. Число "  + number + "<br>";
    }
    if (first < 3 && second > 4) {
        result = second - first;
        document.getElementById("result").innerHTML += "Большой разброс между костями. Разница составляет" + number + "<br>";
    }

    document.getElementById("result").innerHTML += "Первая кость: " +
        first + "Вторая кость: " + second + " ";

}

(total > 100) ? document.getElementById("result").innerHTML += "<br>" + "Победа, Ваш счет" + total + " !!!" : document.getElementById("result").innerHTML += "<br>";