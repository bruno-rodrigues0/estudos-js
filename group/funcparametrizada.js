const defautlValue = 0

const sum  = (a = defautlValue, b = defautlValue) => { 
// pode asusmir valores padroes
    a = Number(a)
    b = Number(b)
    return a + b
}

let valor = 0

function add(v){
    return valor + v
}

console.log(valor)
valor = add(10)
console.log(valor)
valor = add(5)
console.log(valor)


// console.log(sum(2, 8))
// console.log(sum('4', 4))
// console.log(sum(2, 123))
// console.log(sum(2))


