class Carro{
    constructor(nome, portas){
        this.nome = nome
        this.portas = portas ?? 2
        this.ligado = false
        this.vel = 0
        this.cor = undefined
    }

    ligar = () => {
        this.ligado = true
    }

    desligar = () => {
        this.ligado = false
    }

    setCor = (cor) => {
        this.cor = cor
    }
}

class Militar extends Carro{
    constructor(nome, portas, blindagem, municao){
        super(nome, portas)
        this.blindagem = blindagem
        this.municao = municao
        this.setCor("Verde")
    }

    atirar = () => {
        if(this.municao >> 0){
            this.municao--
            console.log("Pew!")
        }
    }
}

const c2 = new Militar("Militante", 1, 100, 50)

for(let i = 0; i < 14; i++){
    c2.atirar()
}

console.log(c2)