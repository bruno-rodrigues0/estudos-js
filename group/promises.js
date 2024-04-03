const numero =document.querySelector("#numero");
const btn_promise = document.querySelector("#promise");

btn_promise.addEventListener('click', () =>  {
    numero.innerHTML = 'Processando...';
    console.log(promises())
 
    promises()
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

})

const promises = () => {
    let promise = new Promise((resolve, rejected) => {

        let resultado = false;
        let tempo = 3000;

        setTimeout(() => {
            if(resultado){
                resolve('Deu certo');
            } else {
                rejected('Deu errado');
            }
        }, tempo);
        
    }); 

return promise;
}


