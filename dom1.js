//getElementById

const div1 = document.getElementById("c1")
const div2 = document.getElementById("c2")
const div3 = document.getElementById("c3")
const div4 = document.getElementById("c4")
const div5 = document.getElementById("c5")
const div6 = document.getElementById("c6")


const array = [div1, div2, div3, div4, div5, div6]

// array.map(item => {
//     item.innerHTML += " C eh loco tiu"
// })


//getElementByTagName

const el = [...document.getElementsByTagName("div")]
const flex = [...document.getElementById("flex")]

flex.style = "display: flex; gap: 3rem"

console.log(el)
console.log(array)

const desapareça = (element) => {
    element.style = "display: none"
}

