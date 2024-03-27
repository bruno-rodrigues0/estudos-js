const root  = document.querySelector("#root")
const buttons = root.querySelector(".buttons")
const input1 = root.querySelector("input#value1")
const input2 = root.querySelector("input#value2")
const result = root.querySelector("input#result")

const operations = [
    (values) => {
        let res = 0
        values.map(item => {
            res += item
        })
        result.value = ''
        result.value = res
    },

    (values) => {
        let res = values[0] - values[1]
        result.value = ''
        result.value = res      
    },

    (values) => {
        let res = 1
        values.map(item => {
            res *= item
        })
        result.value = ''
        result.value = res
    },

    (values) => {
        let res = values[0] / values[1]
        result.value = ''
        result.value = res
    }
]
let values = []

const setValues = () => {
    values = [parseInt(input1.value), parseInt(input2.value)]
}

const sum = buttons.querySelector(".sum")
const sub = buttons.querySelector(".sub")
const mult = buttons.querySelector(".mult")
const div = buttons.querySelector(".div")

sum.addEventListener("click", () => {
    setValues()
    let res = operations[0](values)
})

sub.addEventListener("click", () => {
    
    setValues()
    let res = operations[1](values)
})

mult.addEventListener("click", () => {
    
    setValues()
    let res = operations[2](values)
})

div.addEventListener("click", () => {
    
    setValues()
    let res = operations[3](values)
})



