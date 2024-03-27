class Pessoa{
    constructor(name, age, socialStatus){
        this.name = name ?? "Não informado"
        this.age = age ?? "Não informado"
        this.socialStatus = socialStatus ?? "Não informado"
    }
}

let p1 = new Pessoa("Gabriel", 17)
console.log(p1)

p1.socialStatus = "Solteiro"
console.log(p1)

