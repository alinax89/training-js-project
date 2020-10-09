let person = {
    name: 'Andrey',
    age: 22
}

console.log(person)
console.log(person.name)

person.__proto__.lastName = 'Ali';
person.__proto__.prototype.lastName = 'Ali';
console.log(person.__proto__.lastName)
console.log(person.__proto__.prototype.lastName)