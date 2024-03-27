// let array = ['', 1]
// let arr = [undefined, null, 'something']

// array.push(true) // add item at finish of array

// array.push("pop")
// array.pop() // remove item at finish of array (removing "pop")

// array.unshift(false) // add item at start of array

// array.unshift("pop")
// array.shift() //remove item at start of array (removing "pop")


// array.push(arr)  // add the "arr" array to "array"
// console.log(array) 

// console.log(array[4][2]) //shows one element of an array inside other array 

// array.pop()

// array.push(...arr) //add all items of "arr" to "array"
// console.log(array)


let array = [
    (val) => {
        let res = 0
        for(v of val){
            res += v;
        }
        return res
    },
    (val) => {
        let res = 0
        for(v of val){
            res *= v;
        }
        return res
    },
    (val) => {
        for(v of val){
            console.log(v)
        }
    }
    
]

let values = [1, 2, 3, 4]



// console.log(array[0](values))


const obj = {
    sumArray: (values) => {
        let res = 0
        values.map(item => {
            res += item;
        })
        console.log(res)
    },

    multArray: (values) => {
        let res = 1
        values.map(item => {
            res *= item;
        })
        console.log(res)
    },
    
    printArray: (values) => {
       console.log(values)
    }
}

obj.printArray(values)