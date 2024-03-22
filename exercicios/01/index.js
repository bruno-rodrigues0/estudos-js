const arr = [...document.querySelectorAll(".el")]
const moveBtn = document.querySelector(".move")
const box1 = document.querySelector("#c1")
const box2 = document.querySelector("#c2")

const toggleStrong = (item) => {
    item.classList.toggle("strong")
}

const moveItem = (strongs) => {
    strongs.map(item => { 
        item.parentElement.id == "c1" 
        ? box2.appendChild(item) 
        : box1.appendChild(item)
    })
    strongs.map(item => item.classList.remove("strong"))
}

arr.map(item => item.addEventListener("click", function () {
    toggleStrong(this)
}))

moveBtn.addEventListener("click", () => {
    const strongs = [...document.querySelectorAll(".strong")]
    moveItem(strongs)
})

