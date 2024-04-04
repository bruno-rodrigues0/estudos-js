/*
    Arrays são a estrutura de dados mais simples possível em memória.

    Por que devemos usar arrays? 

        const num1 = 1;
        const num2 = 2;
        const num3 = 3;
        const num4 = 4;

        const arrayNums = [1, 2, 3, 4];
        
*/

//  Criando e inicializando arrays

let daysOfWeek = new Array(); // Cria o array
daysOfWeek = new Array(7); // Cria e especifica o tamanho do array
daysOfWeek = new Array('Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'); // Cria e passa
// os elementos direto para o construtor do array

/*
    A utilização do operador 'new' não a forma mais adequada

    Recomenda-se o uso de colchetes '[]' vazios para criar um array

*/

let daysOfWeek_2 = []; // Cria o array
daysOfWeek_2 = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']; // Cria e inicializa o array com 
// alguns elementos

/* 
    Para saber o tamanho do array (quantos elementos possui), podemos utilizar a propriedade lenght
*/
    
// console.log(daysOfWeek_2.length);

/*
    Acesasndo elementos e fazendo uma iteração em um array

    Podemo utilizar laços de iteração
*/

for (let i = 0; i < daysOfWeek_2.length; i++){
    // console.log(daysOfWeek_2[i]);
}

//  Sequencia de fibonacci

const fibonacci = []
fibonacci[0] = 1;
fibonacci[1] = 1;
for(let i = 2; i < 20; i++){
    fibonacci[i] = fibonacci[i - 1] + fibonacci[i -2]; 
}

// console.log(fibonacci);

/*
    Inserindo elementos no array

    Método push insere ao final do array

    let numbers = [1, 5, 0]
    numbers.push(6)

    Método pop remove um elemento ao final do array

    numbers.pop()

    Método unshift insere ao inicio do array
    
    numbers.unshift(10)

    Método shift remove um elemento ao inicio do array

    numbers.shift()
 */


// cria função interna da classe Array q adiciona um elemento a qualquer posição do array
Array.prototype.addInIndex = function(value, index){

    // manda um erro caso o indice informado nao esteja dentro do array
    if(index > this.length-1 || index < 0 ){
        throw TypeError('Não é possivel adicionar elementos fora do indice máximo.');
    }

    for(let i = this.length - 1 /* i = ultimo indice do array */; i >= index /* enquando i for >= ao indice ao qual se quer adicionar */; i--){
        this[i+1] = this[i]; /* move os elementos 1 indice para frente */
    }
    this[index] = value; 
}

// cria função interna da classe Array q remove um elemento em qualquer posição do array
Array.prototype.removeFromIndex = function(index){ 

      // manda um erro caso o indice informado nao esteja dentro do array
    if(index > this.length-1 || index < 0 ){
        throw TypeError('Não é possivel remover elementos fora dos indices existentes.');
    }
    
    // passa cada elemento do array 1 indice para tras, começando pelo indice informado
    for(let i = index; i < this.length; i++){
        this[i] = this[i+1];
    // isso resulta no ultimo indice do array ficar vazio (undefined)
    }

    // remove o item undefined ao final
    this.pop();
}

// Para adicionar ou remover elementos a qualquer posição do array, podemos utilizar o metodo splice()

let nums = [-2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

nums.splice(0, 0, -4, -3);
nums.splice(9, 5);

// console.log(nums);


/*
    Arrays bi e multidimensionais 

    JavaScript n tem suporte para arrays bidimensionais ou matrizes
    esse problema eh resolvido com um 'array de arrays'
*/

let averageTemps = [];
averageTemps[0] = [];
averageTemps[0][0] = 72; 
averageTemps[0][1] = 77; 
averageTemps[0][2] = 75; 
averageTemps[0][3] = 73; 
averageTemps[0][4] = 71;

averageTemps[1] = [];
averageTemps[1][0] = 79;
averageTemps[1][1] = 81;
averageTemps[1][2] = 76;
averageTemps[1][3] = 75;
averageTemps[1][4] = 79;

// for(let i = 0; i < averageTemps.length; i++){
//     for(let j = 0; j < averageTemps[i].length; j++){
//         console.log(averageTemps[i][j]);
//     }
// }

// console.table(averageTemps);

let matrix3x3x3 = [];
for(let i = 0; i < 3; i++){
    matrix3x3x3[i] = [];
    for(let j = 0; j < 3; j++){
        matrix3x3x3[i][j] = [];
        for(let k = 0; k < 3; k++){
            matrix3x3x3[i][j][k]= i+j+k;
        }
    }
}

console.table(matrix3x3x3);