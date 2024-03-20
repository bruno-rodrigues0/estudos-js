function soma (...valores){

    let size = valores.length
    let res = 0
    let res2 = 0
    let res3 = 0

    for(let i = 0; i < size; i++){res += valores[i]}

    valores.map(item => res2 += item)

    for(n of valores){res3 += valores[i]}

    return res2
}

console.log(soma(10, 5, 2, 15, 8))

