const converterInt = (e) => parseInt(e)
const doubleNum = (e) => e * 2
let num = ['1', '2', '3', '4', '5']

num = num.map(doubleNum)

console.log(num)

//------------------------------------------------------------//

// const elementos = document.getElementsByClassName("div1")

// const val = Array.prototype.map.call(elementos,
//      ({ innerHTML }) => innerHTML)

//------------------------------------------------------------//

// let arr = [...document.getElementsByClassName('div1')]

// arr.map((item, index) => {
//     item.innerHTML = `${item.textContent}: ${index}`
// })