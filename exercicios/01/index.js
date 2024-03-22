const arr = [...document.querySelectorAll(".el")]
const moveBtn = document.querySelector(".move")
const box1 = document.querySelector("#c1")
const box2 = document.querySelector("#c2")

// seleciona os itens da lista
const toggleStrong = (item) => {
    item.classList.toggle("strong")
}

// move os itens de uma lista para outra
const moveItem = (strongs) => {
    strongs.map(item => { 
        item.parentElement.id == "c1" //se o item estiver na caixa 1
        ? box2.appendChild(item) //anexe-o na caixa 2
        : box1.appendChild(item) //se não, anexe-o na caixa 1
    })
    strongs.map(item => item.classList.remove("strong"))
}

arr.map(item => item.addEventListener("click", function () {
    toggleStrong(this)
}))

moveBtn.addEventListener("click", () => {
    const strongs = [...document.querySelectorAll(".strong")]
    strongs[0] 
    ? moveItem(strongs)
    : alert("No items selected")
})

