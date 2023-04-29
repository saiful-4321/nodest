// Sprade oprtators
// Using array
const items = ["Ball", "Bat", "Gloves", "Stumps"]

let cricket = [items] //it return exact same object not a copy of that
let copy = [...items] //sprade operator

console.log(cricket)
console.log(copy)

// using Object
const person = {
    name: "Saiful Islam",
    age: 39,
    greet() {
        return `Hi, I am ${this.name}`
    }
}

const copiedObject = {...person}
console.log(copiedObject)

// Rest operator
const toArray = (...args) => args
console.log(toArray(1,2,3,4,5,5))

// short notes
// If we use ... this operator to pull elements or properties out of an arrays or objects then it would be the sprade operator
// If we use ... this operator to merge multiple arguments into an array and use it in the arguments list of a function then it will be rest operator