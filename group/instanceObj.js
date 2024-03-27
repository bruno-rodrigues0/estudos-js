const root = document.querySelector("#root")

const name = root.querySelector("#name")
const age = root.querySelector("#age")

const add = root.querySelector("#add")

const list = root.querySelector(".list")

const target = root.querySelector("#target")

let valueName
let valueAge

class Person {

    type = "person"

    constructor(name, age){
        this.name = name
        this.age = age
    }

    getInfo(){
        return JSON.stringify(this.name, this.age)
    }
}

let persons = new Set()

const getName = (name) => {
    valueName = name.value
}

const getAge = (age) => {
    valueAge = age.value
}

const setPersons = () => {

    let person = new Person(valueName, valueAge)
    persons.add(person)

}

const refreshList = () => {
    
    let newItem = document.createElement("li")

    persons.forEach(item => {
       
        newItem.innerText = `Name: ${item.name}. Age: ${item.age}`
    
    })

    target.appendChild(newItem)
    
}

add.addEventListener("click", () => {
    getAge(age)
    getName(name)
    if(valueAge && valueName) {
        setPersons()
        refreshList()

        name.value = ""
        age.value = ""
    } else {
        return
    }

})
