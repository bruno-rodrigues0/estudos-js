const soma = (...value) => {    
    return somar (value)
    
}
const somar = val => {
    let res = 0
    for(v of val){res += v}
    return res
}

enterValues = [2, 4, 1, 2, 23, 23, 1, 4]

console.log(soma(...enterValues))
