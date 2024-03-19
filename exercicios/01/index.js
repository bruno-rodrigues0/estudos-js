const arr = [...document.querySelectorAll(".el")]

arr.map(item => item.addEventListener("click", () => {
    item.classList.toggle("strong")
}))

const moveBtn = document.querySelector(".move")

const box1 = document.querySelector("#c1")
const box2 = document.querySelector("#c2")

moveBtn.addEventListener("click", () => {

    const strongs = [...document.querySelectorAll(".strong")]

    strongs.map(item => { 
        item.parentElement.id == "c1" 
        ? box2.appendChild(item) 
        : box1.appendChild(item)
    })
    
    strongs.map(item => {
        item.classList.remove("strong")
    })
})