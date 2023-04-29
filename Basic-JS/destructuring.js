// Object destructuring
const person = {
    name: "Saiful Islam",
    age: 39,
    greet() {
        return `Hi, I am ${this.name}`
    }
}

const printName = ({ name, age }) => {
    console.log({name, age})
}

printName(person)

const {name, age} = person
console.log(name)

// Array Destructuring
let array = [1, 2, 3, 4]

const [num1, num2] = array

console.log(num1)
console.log(num2)