const input = document.querySelector("input")
const add = document.querySelector("#btnNew")
const del = document.querySelector("#btnRemove")
const select = document.querySelector("#btnSelected")
const box = document.querySelector("#boxCourses")

// Função para adicionar um novo item à lista
const addItem = (value) => {
    if (value.trim() !== "") {
        const newItem = document.createElement("div")
        newItem.setAttribute("class", "item")
        newItem.innerText = value

        box.children.length < 7
        ? box.appendChild(newItem)
        : alert("A lista já possui 7 itens.")
    }
}

// Função para remover itens selecionados
const removeSelectedItems = () => {
    const selectedItems = [...document.querySelectorAll(".item.selecionado")]
    selectedItems.map(item => item.remove())
}

// Função para selecionar ou deselecionar um item ao clicar nele
const toggleItemSelection = (item) => {
    item.classList.toggle("selecionado") 
}

// Função para pegar o nome do item selecionado
const getSelectedName = () => {
    const selectedItem = document.querySelector(".item.selecionado")
    try{
        input.value = selectedItem.textContent
    } catch ( error ){
        alert("Nenhum item selecionado. Erro: " + error) 
    }
}

// Adiciona um novo item ao clicar no botão "Adicionar"
add.addEventListener("click", () => {
    addItem(input.value)
    input.value = ''
})

// Remove os itens selecionados ao clicar no botão "Remover"
del.addEventListener("click", () => {
    removeSelectedItems()
})

// Seleciona ou deseleciona um item ao clicar nele
box.addEventListener("click", (event) => {
    const target = event.target
    if (target.classList.contains("item")) {
        toggleItemSelection(target)
    }
})

// Pega o nome do item selecionado ao clicar no botão "Selecionado"
select.addEventListener("click", () => {
    getSelectedName()
})
