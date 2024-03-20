const caixa1 = document.querySelector("#caixa1")
const btn_c1 = document.querySelector("#c1")
const btns  = [...document.querySelectorAll(".curso")]

caixa1.addEventListener("click", (event) => {
    console.log(event.target)
})

btns.map(item => {
    item.addEventListener("click", (event) => {
        event.stopPropagation()
    })
})