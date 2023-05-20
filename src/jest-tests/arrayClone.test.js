const ac = require('./arrayClone')

test("Array Cloning Function ", () => {
    const arr = [1,2,3,4,5]
    expect(ac(arr)).toEqual(arr)
})