const arr = [...document.querySelectorAll(".el")]
const moveBtn = document.querySelector(".move")
const box1 = document.querySelector("#c1")
const box2 = document.querySelector("#c2")
let b2Item


arr.map(item => item.addEventListener("click", (event) => {
    event.target.classList.toggle("strong")
}))

moveBtn.addEventListener("click", () => {
    arr.map(item => {
        if(item.classList.contains("strong")){
            box2.appendChild(item.cloneNode(true))
            item.classList.remove("strong")
            box1.removeChild(item)
        }
    })
    b2Item = [...box2.querySelectorAll(".el")]

    b2Item.map(item => {
        item.classList.remove("strong")
    })
})