const caixa1 = document.querySelector("#caixa1");
const add = document.querySelector(".add")
const del = document.querySelector(".delete")
let count = 0

let input = document.querySelector("input")

add.addEventListener("click", function add() {
    let value = input.value.trim()
    
    if(value && count < 7) {
        caixa1.innerHTML += `<div class='curso c1'> ${value} </div>`
        count++
    }
    
    let childs = [...caixa1.children]

    childs.map(item => {
        item.addEventListener("click", () => {
            item.classList.toggle("strong")
        })

        del.addEventListener("click", () => {
            if(item.classList.contains("strong")){
                item.parentElement.removeChild(item)
            }
        })
    })
   
    input.value = ''
    
    
})  



























// const refresh = () => {
//     const input = document.querySelector("input");
//     if(elements.length < 7 && input.value.trim() != ''){

//     let newElement = document.createElement("div");
    
//     newElement.setAttribute("class", "curso c1");
//     newElement.innerHTML = input.value;

//     caixa1.appendChild(newElement);

//     elements.push(newElement)
//     input.value = '';

//     el = [...caixa1.children]

//     el.map((item) => {
//         item.addEventListener("click", () => {
//             item.classList.toggle("strong")
//         })

//         document.querySelector(".delete").addEventListener("click", 
//         () => {
//             if(item.classList.contains("strong")){
//                 item.parentElement.removeChild(item)
//             }
//         })
//     })

//    }else{
//     return;
//    }
// };

// const add = document.querySelector(".add");

// add.addEventListener("click", () => {
//     refresh();
// });







