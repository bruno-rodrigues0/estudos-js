class Pessoa{
    constructor(name, age, socialStatus){
        this.name = name ?? "Não informado"
        this.age = age ?? "Não informado"
        this.socialStatus = socialStatus ?? "Não informado"
    }
}

let p1 = new Pessoa("Gabriel", 17, "Solteiro")


class Car{
        
    itemType = "car"

    constructor(name, type){
        this.name = name ?? "Não informado"
        name == "Supra" ? this.brand = "Toyota" : this.brand = "Other"
        type == 1 ? this.type = "Esportivo" : this.type = "Comum"
    }

    getCar() {
        console.log(`O carro é um ${this.brand == "Toyota" ? "Toyota" : ""} ${this.name} do tipo ${this.type}`)
    }
}

let c1 = new Car("Supra", 1)