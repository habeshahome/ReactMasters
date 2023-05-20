const obj = {
    name: 'john'
}

// Re-assign const Object using Object.assign(placeholder, ...replacement)
Object.assign(obj, {
    name: 'doe',
    role: 'admin'
})
console.log('Overiding Constants', obj)


// Copy object using Object.assign
const obj2 = Object.assign({}, obj, { age: 20 })
console.log("Hardcode spread operator", obj2 )


// Copy object using spread operator
const obj3 = {...obj, ...{ age: 33 }}
console.log("Copy Object Values using Spread Operator", obj3)