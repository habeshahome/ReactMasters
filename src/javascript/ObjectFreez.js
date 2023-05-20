// Object.freez(obj) litrally freezes the object. aka - no further modifications.
const obj = {
    name: "John",
    age: 90
}
obj.role = "admin"
console.log(role) // this returns the origional content of obj
Object.freeze(obj)
obj.title = "not-allowed"  // can't add properties to freezed objects
obj.name = "Bamlak"  // can't re-assign freezed object
delete obj.age // can't delete from freezed object

console.log(obj) // this will still return the origional obj, all modifications are ignored.