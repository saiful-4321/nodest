const person = {
    name: "Saif",
    age: 29,

    // This will return undefined because of arrow function
    // Because in here this keyword refers to the global scope and not to this object
    
    // greet: () => {
    //     console.log(`Hi, I am ${this.name}`)
    // }

    // To avoid undefined use like this
    greet() {
        console.log(`Hi, I am ${this.name}`)
    },

    // or use like this
    greet2: function() {
        console.log(`Hi, I am ${this.name}`)
    }
}

person.greet()
person.greet2()