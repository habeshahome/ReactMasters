// casting entries to object, Object.fromEntries(obj)
const arr = [
    ["user", "admin", 'super-admin'],
    ["master", "slave"]
]
const obj = Object.fromEntries(arr)
console.log(obj)

/**
 * Object.fromEntries scans for pairs and pair them consecutivly
 */