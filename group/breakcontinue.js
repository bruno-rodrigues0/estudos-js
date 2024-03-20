let n = 0
let max = 3

// while (n < max ){
//     console.log("CFB Cursos - " + n )
//     if (n > 10){
//         break
//     }
//     n++
// }

let pares = 0

for (let i = n; i < max; i++)
{
    if(i % 2 != 0){
        continue
    }
    pares++ 
}

console.log("Quantidade de pares: " + pares)