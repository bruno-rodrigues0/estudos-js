
// const jogador1 = {
//     nome:"Bruno", 
//     energia:100, 
//     vidas:3, 
//     magia: 150}

// const jogador2 = {
//     nome:"Bruce",
//     energia:100, 
//     vidas:5, 
//     velocidade: 90}

// const jogador3 = {...jogador1, ...jogador2}

// console.log(jogador3)




const objs1 = document.getElementsByTagName("div") //HTML colection
const objs2 = [...document.getElementsByTagName("div")] //Array

console.log(objs1)
console.log(objs2)

objs2.forEach(element => element.innerHTML = "Viadinho")




// const soma = (v1, v2, v3) => {
//     return v1+v2+v3
// }

// let valores = [1, 4, 5]

// console.log(soma(...valores))



