
let pessoa = {
    nome : "Bruno",
    github: "bruno-rodrigues0",
    curso: "tecnico em informatica",
    disciplinas: {
        d1: "PSW",
        d2: "ASW",
        d3: "DataBase"
    }
}

pessoa = JSON.stringify(pessoa)

console.log(typeof(pessoa))

pessoa = JSON.parse(pessoa)

console.log(typeof(pessoa))
