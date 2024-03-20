function* perguntas(){
    const nome = yield 'Qual seu nome?' //...

    //a pergunta é feita e a função fica em espera ("await"), quando ela é chamada novamente o valor de entrada da chamada vai para a constante anterior.
    
    const esporte = yield 'Qual o seu esporte favorito?'
    return `Seu nome eh ${nome}, seu esporte favorito eh ${esporte}`
}

const itp = perguntas()

console.log(itp.next().value)
console.log(itp.next('Bruno').value)
console.log(itp.next('Basquete').value)






// function* contador(){
//     let i = 0
//     while(true){
//         yield i++
//         if(i > 50){
//             break
//         }
//     }
// }
// const itc = contador()

// for(c of itc){
//     console.log(c)
// }