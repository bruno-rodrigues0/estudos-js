const name = root.querySelector("#name")
const age = root.querySelector("#age")
const add = root.querySelector("#add")
const target = root.querySelector("#target")

let persons = []

class Person {

    name = null
    age = null

    constructor(name, age){
        this.name = name
        this.age = age
    }
    
    getName(){
        return this.name;
    }
    getAge(){
        return this.age;
    }
}

const refreshList = () => {
    target.innerHTML = ''
    persons.map(item => {
        target.innerHTML += `<li> Name: ${item.getName()}, Age: ${item.getAge()}`;
    })
}

add.addEventListener("click", () => {
    if(name.value && age.value){
        persons.push(new Person(name.value, age.value));
        refreshList();
    }
})