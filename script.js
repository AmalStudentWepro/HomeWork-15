// 1
let obj1 = {
    name: "Amal",
    age: 12,
    isStudent: true,
    address: { city: "Moscow" }
}

let obj2 = {
    name: "Arhan",
    balance: 5000,
    married: true,
    skills: ["JavaScript", "CSS"]
}

// 2
let merged = { ...obj1, ...obj2 }

// 3
let keys = Object.keys(merged)

// 4
let values = Object.values(merged)

// 5
let types = {
    string: [],
    number: [],
    object: [],
    boolean: []
}

values.forEach(value => {
    let type = typeof value
    if (types[type]) {
        types[type].push(value)
    }
})

console.log("1-2:", merged)
console.log("3:", keys)
console.log("4:", values)
console.log("5:", types)
// я написал цифры это означает цифра задания (если что)