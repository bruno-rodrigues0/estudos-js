const numero =document.querySelector("#numero");

let promise = new Promise((resolve, rejected) => {
    let resultado = true;
    let tempo = 3000;

    setTimeout(() => {
        if(resultado){
            resolve('Deu certo');
        } else {
            rejected('Deu errado');
        }
    }, tempo);

});

promise
    .then((retorno) => {   
         numero.innerHTML = retorno;
        numero.classList.remove("erro");
        numero.classList.add("ok");
    })
    .catch((retorno) => {
        numero.innerHTML = retorno;
        numero.classList.remove("ok");
        numero.classList.add("erro");
     })

numero.innerHTML = 'Processando...';