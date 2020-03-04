const firstName = 'Andrey';
const lastName = 'Ali';

const hello = `Hello my name is ${firstName}`;

console.log(lastName.length); // lastName // 3

console.log(firstName.includes('Andrey')); // true
console.log(firstName.includes('ANDREY')); // false

console.log(firstName.indexOf('dre')); // 2
console.log(firstName.indexOf('ANDREY')); // -1


console.log(firstName.toUpperCase()); // ANDREY
console.log(firstName.toLowerCase()); // andrey

console.log(firstName.concat(' ', lastName)); // Andrey Ali

console.log(hello.indexOf('name')); // Andrey Ali
console.log(hello.slice(9, 13)); // name

console.log(hello.split(' ')); // add array
console.log(hello.trim()); // del space
console.log(hello.slice(9, 13)); // name

console.log(lastName.repeat(3)); // AliAliAli
console.log(firstName.replace('Andrey', 'ANDRE')); // name

console.log(Math.PI); // 3.14
console.log(Math.abs(-25)); // 25
console.log(Math.random()); // random
console.log(Math.round(2.4)); // 2
console.log(Math.floor(2.4)); // 2
console.log(Math.ceil(2.4)); // 3

const arr = [1, 2, 33, 51, 21, 900];
arr.unshift(333); // add first
arr.shift(); // del first
arr.push(555); // add last
arr.pop(); // del last
console.log(arr.slice(0, 3));
console.log(arr.splice(0, 0, 9, 8, 7));
console.log(arr.concat(777, 555, 333)); // array + array
console.log(arr.join(', ')); // array => string
console.log(arr.reverse());
const user = {
    firstName: 'ALEX',
    lastName: 'BILL',
    age: 30,
    adress: {
        country: 'USA',
        city: 'Miami',
        CODE: {
            zip: 937
        }
    },
    skills: ['HTML', 'CSS', 'JavaScript']
};

console.log(user.firstName); // ALEX
console.log(user['lastName']); // BILL
console.log(user.adress.country); // USA
console.log(user.adress.CODE.zip); // 937
console.log(user.skills[2]); // JavaScript
console.log(user.skills.join(' - ')); // HTML - CSS - JavaScript

const teams = [
    {club: 'Milan', country: 'Italy'},
    {club: 'Barcelona', country: 'Spain'},
    {club: 'Liverpool', country: 'England'},
    {club: 'Bayern', country: 'Germany'},
    {club: 'Juventus', country: 'Italy'},
    {club: 'MC', country: 'England'},
    {club: 'Real', country: 'Spain'},
];

for (let team in teams) {
    console.log(teams[team]); // return objects
}

for (let team of teams) {
    console.log(team); // return objects
}

function fd(name) {
    return name;
}

console.log(fd('Function Declaration')); // Function Declaration

const fe = function (name) {
    return name;
}
console.log(fe('Function Expression')); // Function Expression

const arrow = (arrow) => {
    return arrow;
}
console.log(arrow('Arrow Function')); // Arrow Function

(function (self) {
    return console.log(self);
})(('Self-invoking Function')); // Self-invoking Function - anonymous


const summ = (one) => {
    return function (two) {
        return function (three) {
            return `${one} ${two} ${three}`
        }
    }
};

const  fullSumm = summ('one')('two')('three');
console.log(fullSumm);


function quest(job) {
    const jobs = {
        dev: 'What',
        teac: 'Ok'
    };
    return function (name) {
        return `${name}, ${jobs.dev}`
    }
}

const dev = quest('dev');
console.log(dev);
