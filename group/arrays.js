let array = ['', 1]
let arr = [undefined, null, 'something']

array.push(true) // add item at finish of array

array.push("pop")
array.pop() // remove item at finish of array (removing "pop")

array.unshift(false) // add item at start of array

array.unshift("pop")
array.shift() //remove item at start of array (removing "pop")


array.push(arr)  // add the "arr" array to "array"
console.log(array) 

array.pop()

array.push(...arr) //add all items of "arr" to "array"
console.log(array)

