class Nave {
    constructor(energia) {
        this.energia = energia;
        this.disparos = 100;
    }
}

const n1 = new Nave(100)

Nave.prototype.disparar = function(){
    this.disparos--
}


console.log(Nave.prototype)

for(let i = 0; i < 43; i++){
    n1.disparar()
}

console.log(n1.disparos)
console.log(n1.disparos)
console.log(n1.disparos)
console.log(n1.disparos)