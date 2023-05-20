// replacing strings 
const str = "3 is before 4 and 8 is after 6 but before 9"

// replace odd numbers
const replaceOddEntries = str.replace(/\d/g, prop => {
   const num = parseInt(prop, 10)
    return num % 2 !== 0 ? '@' : num
})
console.log(replaceOddEntries)