'use strict';

// Выведите чётные числа
// При помощи цикла for выведите чётные числа от 2 до 10.

// for (let i = 1; i < 11; i++) {
//     if (i % 2 === 0) console.log(i);
// }
// ==================================================================================================== //
// Замените for на while
// Перепишите код, заменив цикл for на while, без изменения поведения цикла.
//
// for (let i = 0; i < 3; i++) {
//     alert( `number ${i}!` );
// }

// let i = 0;
// while (i < 3) {
//     console.log(`number ${i}`);
//     i++;
// }
// ==================================================================================================== //
// Функция pow(x,n)
// важность: 4
// Напишите функцию pow(x,n), которая возвращает x в степени n. Иначе говоря, умножает x на себя n раз и возвращает результат.
// pow(3, 2) = 3 * 3 = 9
// pow(3, 3) = 3 * 3 * 3 = 27
// pow(1, 100) = 1 * 1 * ...* 1 = 1
// Создайте страницу, которая запрашивает x и n, а затем выводит результат pow(x,n).

// function pow(x, n) {
//     let result = x;
//
//     for (let i = 1; i < n; i++) {
//         result *= x;
//     }
//
//     return result;
// }
//
// let x = prompt("x?", '');
// let n = prompt("n?", '');
//
// if (n < 1) {
//     alert(`Степень ${n} не поддерживается, используйте натуральное число`);
// } else {
//     alert( pow(x, n) );
// }
// ==================================================================================================== //
// Функция min(a, b)
// важность: 1
// Напишите функцию min(a,b), которая возвращает меньшее из чисел a и b.
// Пример вызовов:
// min(2, 5) == 2
// min(3, -1) == -1
// min(1, 1) == 1
// let min = (a, b) => a < b ? a : b;
// console.log(min(2, 5));
// console.log(min(3, -1));
// console.log(min(1, 1));
// ==================================================================================================== //
// Сумма свойств объекта
// У нас есть объект, в котором хранятся зарплаты нашей команды:
// Напишите код для суммирования всех зарплат и сохраните результат в переменной sum. Должно получиться 390.
// Если объект salaries пуст, то результат должен быть 0.

// let salaries = {
//     John: 100,
//     Ann: 160,
//     Pete: 130
// };
// let sum = 0;
// for (let key in salaries) {
//     sum += salaries[key];
// }
//
// console.log(sum);
// ==================================================================================================== //
// Умножаем все числовые свойства на 2
// Создайте функцию multiplyNumeric(obj), которая умножает все числовые свойства объекта obj на 2.

// let menu = {
//     width: 200,
//     height: 300,
//     title: "My menu",
//     num: 1000
// };

//
// function multiplyNumeric(obj) {
//     for (let key in obj) {
//         if (typeof obj[key] === 'number') {
//             obj[key] *= 2;
//         }
//     } return obj;
// }
//
// console.log(multiplyNumeric(menu));
// ==================================================================================================== //
// Создайте объект calculator (калькулятор) с тремя методами:
//
//     read() (читать) запрашивает два значения и сохраняет их как свойства объекта.
// sum() (суммировать) возвращает сумму сохранённых значений.
// mul() (умножить) перемножает сохранённые значения и возвращает результат.
//     let calculator = {
//     // ... ваш код ...
// };
// let calculator = {
//     read() {
//         this.a = +prompt('a?', '0');
//         this.b = +prompt('b?', '0');
//     },
//     sum() {
//         return this.a + this.b;
//     },
//     mul() {
//         return this.a * this.b;
//     }
// };
//
// calculator.read();
// console.log( calculator.sum() );
// console.log( calculator.mul() );
// ==================================================================================================== //
// Создайте функцию-конструктор Calculator, который создаёт объекты с тремя методами:
//
//     read() запрашивает два значения при помощи prompt и сохраняет их значение в свойствах объекта.
// sum() возвращает сумму введённых свойств.
// mul() возвращает произведение введённых свойств.
//     Например:
// function Calculator() {
//     this.read = function () {
//         this.a = +prompt('a?', '0');
//         this.b = +prompt('b?', '0');
//     };
//     this.sum = function () {
//         return this.a + this.b;
//     };
//     this.mul = function () {
//         return this.a * this.b;
//     };
// }
//
// let calculator = new Calculator();
// calculator.read();
//
// console.log( "Sum=" + calculator.sum() );
// console.log( "Mul=" + calculator.mul() );
// ==================================================================================================== //
// Напишите функцию checkSpam(str), возвращающую true, если str содержит 'viagra' или 'XXX', а иначе false.
//
//     Функция должна быть нечувствительна к регистру:
// function checkSpam(str) {
//     return (str.toLowerCase().includes('viagra') || str.toLowerCase().includes('xxx'));
// }
//
// console.log(checkSpam('buy ViAgRA now'));
// console.log(checkSpam('free xxxxx'));
// console.log(checkSpam("innocent rabbit"));
// ==================================================================================================== //
// Напишите функцию ucFirst(str), возвращающую строку str с заглавным первым символом.
//     Например: ucFirst("вася") == "Вася";
// function ucFirst(str) {
//     if (!str) return str;
//     return str[0].toUpperCase() + str.slice(1).toLowerCase();
// }
//
// console.log(ucFirst("ВАСЯ"));
// console.log(ucFirst("максим"));
// console.log(ucFirst(""));
// ==================================================================================================== //
// Создайте функцию truncate(str, maxlength), которая проверяет длину строки str и, если она превосходит maxlength, заменяет конец str на "…", так, чтобы её длина стала равна maxlength.
//
//     Результатом функции должна быть та же строка, если усечение не требуется, либо, если необходимо, усечённая строка.
//
//     Например:
//
// truncate("Вот, что мне хотелось бы сказать на эту тему:", 20) = "Вот, что мне хотело…"
//
// truncate("Всем привет!", 20) = "Всем привет!"

// function truncate(str, maxlength) {
//     return (str.length < maxlength) ? str : str.slice(0, maxlength -1) + '...';
// }
//
// console.log(truncate("Вот, что мне хотелось бы сказать на эту тему:", 20));
// console.log(truncate("Вот, что мне хотелось бы сказать на эту тему:", 9));
// console.log(truncate("Всем привет!", 20));
// ==================================================================================================== //
// Есть стоимость в виде строки "$120". То есть сначала идёт знак валюты, а затем – число.
// Создайте функцию extractCurrencyValue(str), которая будет из такой строки выделять числовое значение и возвращать его.
// Например:
// alert( extractCurrencyValue('$120') === 120 ); // true

// function extractCurrencyValue(str) {
//     return +str.slice(1);
// }
//
// console.log(extractCurrencyValue('$120'));
// ==================================================================================================== //
// Подмассив наибольшей суммы
// На входе массив чисел, например: arr = [1, -2, 3, 4, -9, 6].
// Задача: найти непрерывный подмассив в arr, сумма элементов в котором максимальна.
// Функция getMaxSubSum(arr) должна возвращать эту сумму.
// Например:
// getMaxSubSum([-1, 2, 3, -9]) = 5 (сумма выделенных)
// getMaxSubSum([2, -1, 2, 3, -9]) = 6
// getMaxSubSum([-1, 2, 3, -9, 11]) = 11
// getMaxSubSum([-2, -1, 1, 2]) = 3
// getMaxSubSum([100, -9, 2, -3, 5]) = 100
// getMaxSubSum([1, 2, 3]) = 6 (берём все)
// Если все элементы отрицательные – ничего не берём(подмассив пустой) и сумма равна «0»:
// getMaxSubSum([-1, -2, -3]) = 0
// Попробуйте придумать быстрое решение: O(n2), а лучше за О(n) операций.

// function getMaxSubSum(arr) {
//     let maxSum = 0;
//     let partialSum = 0;
//
//     for (let item of arr) { // для каждого элемента массива
//         partialSum += item; // добавляем значение элемента к partialSum
//         maxSum = Math.max(maxSum, partialSum); // запоминаем максимум на данный момент
//         if (partialSum < 0) partialSum = 0; // ноль если отрицательное
//     }
//
//     return maxSum;
// }
// console.log(getMaxSubSum([-1, 2, 3, -9]));
// console.log(getMaxSubSum([2, -1, 2, 3, -9]));
// console.log(getMaxSubSum([-1, 2, 3, -9, 11]));
// console.log(getMaxSubSum([100, -9, 2, -3, 5]));
// console.log(getMaxSubSum([1, 2, 3]));

// ==================================================================================================== //
// Напишите функцию camelize(str), которая преобразует строки вида «my-short-string» в «myShortString».
// То есть дефисы удаляются, а все слова после них получают заглавную букву.
// Примеры:
// camelize("background-color") == 'backgroundColor';
// camelize("list-style-image") == 'listStyleImage';
// camelize("-webkit-transition") == 'WebkitTransition';
// P.S. Подсказка: используйте split, чтобы разбить строку на массив символов, потом переделайте всё как нужно и методом join соедините обратно.
// function camelize(str) {
//     return str
//         .split('-') // разбивает 'my-long-word' на массив ['my', 'long', 'word']
//         .map(
//             // Переводит в верхний регистр первые буквы всех элементом массива за исключением первого
//             // превращает ['my', 'long', 'word'] в ['my', 'Long', 'Word']
//             (word, index) => index === 0 ? word : word[0].toUpperCase() + word.slice(1)
//         )
//
//
//         .join(''); // соединяет ['my', 'Long', 'Word'] в 'myLongWord'
// }
// console.log(camelize("background-color"));
// console.log(camelize("list-style-image"));
// console.log(camelize("-webkit"));
// ==================================================================================================== //
// Напишите функцию filterRange(arr, a, b), которая принимает массив arr, ищет в нём элементы между a и b и отдаёт массив этих элементов.
// Функция должна возвращать новый массив и не изменять исходный.
// let arr = [5, 3, 8, 1];
// let filtered = filterRange(arr, 1, 4);
// alert( filtered ); // 3,1 (совпадающие значения)
// alert( arr ); // 5,3,8,1 (без изменений)

// ==================================================================================================== //
// let newArr = {
//     age: 25,
//     names: ['Jonh', 'Alex', 'Dima', [1, '2', [3, 2, 34]]],
//     year: 2020,
//     sex: {
//         woman: {
//             name: 'Tom',
//             age: 25
//         },
//         man: {
//             name: 'Tom',
//             age: 25
//         }
//     }
// };
// console.log(newArr);
// let parseArr = JSON.stringify(newArr);
// console.log(parseArr);
// console.log(JSON.parse(parseArr));

// делает то же самое, что и
// for (let char of str) alert(char);

// let newObj = {
//     name: 'Alex',
//     age: 23,
//     weight: 25,
//     names: ['alex', 'tom', 'max']
// };
//
// let iterator = newObj[Symbol.iterator]();
// while (true) {
//     let result = iterator.next();
//     if (result.done) break;
//     console.log(result.value);
// }

// ==================================================================================================== //
// var a = [3, 4, 10];
// var b = [5, 'hello', '10exe'];
//
// Array.prototype.double = function () {
//     var newArray = this.map(function (item) {
//         if (typeof item === 'number') {
//             return Math.pow(item, 2);
//         }
//
//         if (typeof item === 'string') {
//             return item += item;
//         }
//     });
//     return newArray;
// };
//
// var newA = a.double();
// var newB = b.double();
//
// console.log('A', newA);
// console.log('B', newB);

// ==================================================================================================== //
// const person = {
//     age: 25,
//     firstName: 'Max',
//     logName() {
//         setTimeout(() => {
//             console.log(this.firstName);
//         },2000)
//     }
// };
// console.log(person.logName());
// ==================================================================================================== //
// let arr = ['apple', 'banana', 'orange'];
//
// let breakfast = arr.map(fruit => {
//     return fruit + 's';
// });
//
// console.log(breakfast); // ['apples', 'bananas', 'oranges']

// ==================================================================================================== //
// const person = {
//         age: 25,
//         firstName: 'Max',
//         name() {
//             return this.firstName
//         }
//     }
// ;
// console.log(person.name);
// ==================================================================================================== //
// REST +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// function sum(...theArgs) {
//     return theArgs.reduce((index, item) => {
//         return index + item;
//     })
// }
//
// console.log(sum(1, 2, 3, 4, 5));
// SPREAD ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// function sum(x, y, z) {
//     return x + y + z;
// }
//
// const numbers = [10, 2, 3];
//
// console.log(sum(...numbers));
// // expected output: 6
//
// console.log(sum.apply(null, numbers));
// // expected output: 6

// Destructuring assignment
// let a, b, rest;
// [a, b] = [10, 20];

// console.log(a);
// expected output: 10

// console.log(b);
// expected output: 20

// [a, b, ...rest] = [10, 20, 30, 40, 50];
//
// console.log(rest);
// expected output: Array [30,40,50]

// ==================================================================================================== //

// let calculator = {
//     read() {
//        this.a = +prompt('Первое число','');
//        this.b = +prompt('Первое число','');
//     },
//     sum(){
//         return this.a + this.b;
//     },
//     mul(){
//         return this.a * this.b;
//     }
// };
//
// calculator.read();
// alert( calculator.sum() );
// alert( calculator.mul() );
const createPerson = (a, b) => {
    return  {
        name: function () {
            return 'NAME'
        },
        firstName() {
            return 'LAST'
        },
        lastName: () => ('HELLO'),
        [a + b]: 100
    }
};
const newPersone = createPerson('Hello', 'World');
console.log(newPersone);
console.log(`${createPerson('Java', 'Script')} + ${newPersone.name()} + ${newPersone.firstName()} + ${newPersone.lastName()}`);

class  Name {
    constructor(name) {
        this.name = name;
    }

    logName() {
        console.log('My name is: ' + this.name);
    }
    static staticFunc() {
        console.log('Hello');
    }
}

let newName = new Name('Andrey');
newName.logName();
Name.staticFunc();

class LastName extends Name{
    constructor(name) {
        super(name);
    }
    logName() {
        super.logName();
        console.log('My last is: ' + this.name);
    }
}
let lastName = new LastName('Ali');
lastName.logName();

let set = new Set();

set.add(10);
set.add('Hello');
console.log(set.has('2'));
console.log(set.size);

function User(name) {
    this.name = name;
}

let user = new User('Andrey');
console.log(user.name);



// ==================================================================================================== //
var numbers = [2, 7, 1, 5, 7, 2, 5, 6, 3, 4];
var strings = ['JS', 'is', 'not', 'awesome'];
var data = [{i: 1}, {i: 2}, {i: 3}, {i: 4}, {i: 5}];
var random = [undefined, 'str', null, 42, {data: data}];

function remove(arr, ...args){
    var set = new Set(args);
    return arr.filter((v, k) => !set.has(k));
}

console.log(remove(strings, 2)); // ['JS', 'is', 'awesome']
console.log(remove(numbers, 0, 2, 4)); // [7, 5, 2, 5, 6, 3, 4]
console.log(remove(data, 1, 3, 4)); // [{i: 1}, {i: 3}]
console.log(remove(random, 1, 3)); // [undefined, null, {data: [...]}]
// ==================================================================================================== //
// ==================================================================================================== //
// ==================================================================================================== //
// ==================================================================================================== //
// ==================================================================================================== //
// ==================================================================================================== //
// ==================================================================================================== //
// ==================================================================================================== //
// ==================================================================================================== //
// ==================================================================================================== //
// ==================================================================================================== //
// ==================================================================================================== //
// ==================================================================================================== //
// ==================================================================================================== //
// ==================================================================================================== //
// ==================================================================================================== //
// ==================================================================================================== //