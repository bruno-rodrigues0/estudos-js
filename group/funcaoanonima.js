
const soma = function (...value){
    let res = 0 
    value.map(elem => res += elem)

    return res
}

console.log( soma(3, 5) )


const soma2 = new Function ("v1", "v2", "return v1 + v2")

console.log( soma(3, 5) )