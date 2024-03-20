// const soma = function (...value){
//     return 
// }

const soma = (...value) => {
    let res = 0
    value.map(elem => res += elem)
    return res
} 
console.log(soma(3, 5, 1, 1))


const add = n => n += 10
console.log(add(12))