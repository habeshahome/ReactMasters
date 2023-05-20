// Iterating through Object is possible using Object.entries(obj)
const obj = {
    name: 'john',
    age: 90,
    role: 'admin'
}

Object.entries(obj).map(entry => console.log("\n",entry))()