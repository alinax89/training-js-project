function bind(context, fn) {
    return function (...args) {
        fn.call(context, args)
    }
}

function logPerson() {
    console.log(`Person: ${this.name}, ${this.age}, ${this.job}`)
}

const  person1 = {name: 'Alex', age: 20, job: 'Frontend'}
const  person2 = {name: 'Simon', age: 30, job: 'Backend'}






bind(person1, logPerson)()
bind(person2, logPerson)()