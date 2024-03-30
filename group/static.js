class Npc{

    static alerta = false

    constructor(energia){
        this.energia = energia;
    }

    info(){
        console.log(`        
        Energia: ${this.energia}
        alerta: ${Npc.alerta}
        ______________
        `)
    }

    static alertar(){
        Npc.alerta = true
    }
}

let npc1 = new Npc(100)
let npc2 = new Npc(80)
let npc3 = new Npc(40)

Npc.alertar()

console.log(npc1.info())
console.log(npc2.info())
console.log(npc3.info())