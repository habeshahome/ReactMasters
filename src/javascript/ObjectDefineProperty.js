// defining new property to object shorthand 

const obj = { name: "John"}
obj.age = 10
console.log("\nObject property definition using shorthand", obj)

// defining new property for object using Object.defineProperty(obj, definition)
Object.defineProperty(obj, "role", {
    value: 'admin',
    writable: true // this will block Object.assign from modifiying this prop
})
console.log("\nObject props added using Object.defineProperty ", obj)