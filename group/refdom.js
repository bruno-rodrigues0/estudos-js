const caixa1 = document.querySelector("#caixa1")
const btn_c = [...document.querySelectorAll(".curso")]
const c1_2 = document.querySelector("#c1_2")

let elements = []

const refresh = () => {
    const input = document.querySelector("input")
    if(elements.length < 7 && input.value.trim() != ''){

    let newElement = document.createElement("div")
    
    newElement.setAttribute("class", "curso c1")
    newElement.innerHTML = input.value

    caixa1.appendChild(newElement)

    elements = [...document.querySelectorAll(".curso")]
    input.value = ''

   }else{
    return
   }
}

const add = document.querySelector("button")

add.addEventListener("click", () => {
    refresh()
})



// console.log(btn_c1.parentElement)
// console.log(btn_c1.nextSibling)
// console.log(btn_c1.lastElementChild)
// console.log(btn_c1.children)
// console.log(btn_c1.lastChild)


// console.log(caixa1.hasChildNodes())
// console.log(btn_c[0].hasChildNodes())
// console.log(btn_c[0].childNodes)  //returns NodeList ""
// console.log(btn_c[0].children)

// if(caixa1.children.length > 0){
//     console.log("possui filhos")
// }else{
//     console.log("nao possui filhos")
// }

// console.log(btn_c[0].children.length 
// ? "possui filhos" 
// : "nao possui filhos")

// caixa1.firstElementChild.innerHTML = "ARROI'S DOCE"


