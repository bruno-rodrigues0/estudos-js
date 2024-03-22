const input = document.querySelector("input")
const add = document.querySelector("#btnNew")
const del = document.querySelector("#btnRemove")
const select = document.querySelector("#btnSelected")
const box = document.querySelector("#boxCourses")


add.addEventListener("click", () => {
    let value = input.value.trim()
    let newItem = document.createElement("div")
    let count = 0

    newItem.setAttribute("class", "item")
    newItem.innerText = value

    if(value && count < 7){
        box.appendChild(newItem)
        count ++
    }

    let items = [...box.children]
    
    items.map(item => {
        
        item.addEventListener("click", () => {
            item.classList.toggle("selecionado")
        })

        del.addEventListener("click", () => {
            if(item.classList.contains("selecionado")){
                item.parentElement.removeChild(item)
            }
        })
        
    })

    select.addEventListener("click", () => {
        let filtered = items.filter(item => item.classList.contains("selecionado"))

        input.value = filtered[0].textContent
    })

    input.value = ''

})

