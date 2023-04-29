var cat = "student" //global var
let name = "saiful"

const age = 10 //not reassignable

function summerizeUser(cat, name, age)
{
    let studentName = name
    console.log(`Name is: ${studentName} age is : ${age} in category of ${cat}`)
}

studentName = "random"
summerizeUser(cat, name, age)

console.log(studentName)