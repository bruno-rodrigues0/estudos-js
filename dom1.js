const div1 = document.getElementById("c1")
const div2 = document.getElementById("c2")
const div3 = document.getElementById("c3")
const div4 = document.getElementById("c4")
const div5 = document.getElementById("c5")
const div6 = document.getElementById("c6")


const array = [...document.querySelectorAll('div')]

array.map(item => {
    item.innerHTML += " C eh loco tiu"
})