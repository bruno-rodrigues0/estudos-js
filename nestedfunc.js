const soma = (...value) => {

    const somar = val => {
        let res = 0
        for(v of val){res += v}
        return res
    }
    
    return somar (value)

}

console.log(soma(3, 4, 1, 4, 7, 6, 42, 6, 21))
