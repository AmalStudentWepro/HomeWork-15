// 1
let obj1 = {
    name: "Alex",
    age: 25,
    isStudent: false,
    address: { city: "New York", zip: 10001 }
}

let obj2 = {
    job: "Developer",
    salary: 5000,
    married: true,
    skills: ["JavaScript", "React"]
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
// я написал цифры это означает цифра задания
