// Using regular callback
const fetchData = callback => {
    setTimeout(() => {
        callback("Done!")
    }, 1000)
}

setTimeout(() => {
    console.log("Timer is done")
    fetchData(Text => {
        console.log(Text)
    })
}, 1000)

console.log("Hello")
console.log("Hi")

// using promises

const fetchItems = () => {
    // init new promises
    const promise = new Promise((resolved, reject) => {
        setTimeout(() => {
            resolved("Done")
        }, 1000)
    })
    return promise
}

setTimeout(() => {
    console.log("Timer is done.")
    
    // use of nested promise Element
    fetchItems()
        .then(response => {
            console.log(response)

            // calling promise again as nested element
            return fetchItems()
        })
        .then(response2 => {
            console.log(response2)
        })
}, 1000)