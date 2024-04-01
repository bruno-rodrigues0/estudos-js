// uma classe abstrata n pode ser instanciada, apenas extendida

class Pessoa{

    CPF;
    nome;
    idade;

    constructor(CPF, nome, idade){
        if(this.constructor === Pessoa){
            throw new TypeError("Essa classe não pode ser instanciada");
        }
        this.CPF = CPF;
        this.nome = nome;
        this.idade = idade;
    }
};

class Funcionario extends Pessoa{

    cargo;

    constructor(CPF, nome, idade, cargo){
        if(!CPF){
            throw new TypeError("É obrigatorio informar o CPF.");
        }
        super(CPF, nome, idade);
        this.cargo = cargo;
    }
};

let funcionario = new Funcionario(10079345654, 'Bruno', 17, 'Estagiorio');

console.log(funcionario);

// let pessoa = new Pessoa(10079345654, 'Bruno', 17);


// let lol = new Function('a', 'b', `
//     if(a > b){
//         console.log("A eh maior que B");
//     } else {
//         console.log("B eh maior doq A");
//     }       

//     return;
// `);


// console.log(lol(1, 3));