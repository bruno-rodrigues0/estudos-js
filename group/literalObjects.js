const person = {
    name: "Bruno",
    age: "17",
    getName: () =>{
        return this.name
    },
    setName: (name) => {
        this.name = name
    }
}

let person2 = person
let person3 = person

person2.name = "Fernanda"
person3["age"] = 18

console.log(person.name, person.age)
console.log(person2.name, person2.age)
console.log(person3.name, person3.age)