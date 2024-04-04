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


