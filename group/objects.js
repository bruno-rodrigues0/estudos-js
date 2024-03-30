class Pessoa{
    
    #name;
    #age;
    #socialStatus
    constructor(name, age, socialStatus){
        this.#name = name; 
        this.#age = age; 
        this.#socialStatus = socialStatus;
    }

    get getName(){
        return this.#name;
    }

    /**
     * @param {string} name 
     */

    set setName(name){
        this.#name = name;
    }
    get getAge(){
        return this.#age;
    }

    /**
     * @param {number} age
     */

    set setAge(age){
        this.#age = age;
    }

    
}

let p1 = new Pessoa("Gabriel", 17, "Solteiro")

p1.setName = 1

console.log(p1.getName)






// class Car{

//     constructor(name, type){
//         this.name = name ?? "Não informado"
//         name == "Supra" ? this.brand = "Toyota" : this.brand = "Other"
//         type == 1 ? this.type = "Esportivo" : this.type = "Comum"
//     }

//     getCar() {
//         console.log(`O carro é um ${this.brand == "Toyota" ? "Toyota" : ""} ${this.name} do tipo ${this.type}`)
//     }
// }

// let c1 = new Car("Supra", 1)