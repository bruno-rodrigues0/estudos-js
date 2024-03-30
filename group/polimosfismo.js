class Carros{

    constructor(tipo, estagioTurbo){

        this.turbo = new Turbo(estagioTurbo)

        if(tipo == 1){
            this.velMax = 120 * (1 + this.turbo.potencia / 100) 
        } else  if(tipo == 2){
            this.velMax = 140 * (1 + this.turbo.potencia / 100 )
        } else  if(tipo == 3){
            this.velMax = 160 * (1 + this.turbo.potencia / 100 )
        }

    }

    getVelMax(){
        console.log(`
        Potência do turbo: ${this.turbo.potencia} 
        Velocidade máxima: ${this.velMax}
        `)
    }
}

class Turbo{

    constructor(e){
        if(e == 0){
            this.potencia = 0
        } else if(e == 1){
            this.potencia = 50
        } else if(e ==2){
            this.potencia = 75
        } else if(e == 3){
            this.potencia = 100
        }

    }
}


let c1 = new Carros(1, 2)

c1.getVelMax()

class Especial extends Carros{
    constructor(estagioTurbo){
        super(3, estagioTurbo)
        this.velMax = 160 * (1 + this.turbo.potencia / 70)

    }

    // polimorfismo = sobrescreve o metodo da classe pai
    
    getVelMax(){
        console.log(`
        Tipo: especial
        Potência do turbo: ${this.turbo.potencia} 
        Velocidade máxima: ${this.velMax}
        `)
    }
}

let carro2 = new Especial(2)

carro2.getVelMax()