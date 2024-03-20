// function nome(){
//     console.log("CFB Cursos")
// }

// const soma = (a, b) =>
// {
//     return a + b;
// }

// const obj = {
//     nome: "Bruno",
//     metodoSoma: (a, b) => a + b,    
// }

// const times = 10

// for(let i = 0; i < times; i++){
//     console.log(obj.metodoSoma(1, 5))
// }
// let arr = arrayClasses.map(item => {
//     item.
// })


// let selector = document.querySelector(".lol")
// const button = document.getElementById('change')


// const mudarTexto = () =>
// {
    //     let id =  document.getElementById('id1')
    //     id.innerText = "Texto alterado"
    
    // }
    
    // button.addEventListener('click',  mudarTexto)


const classes = document.getElementsByClassName('lol')
let button = document.getElementById("change")
let id = document.getElementById('id1')
button.addEventListener('click', () => classes.innerHTML = "Texto alterado")

