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
    
}

const c2 = new Militar()

console.log(c2)