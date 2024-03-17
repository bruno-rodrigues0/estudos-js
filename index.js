console.log("this no global: " + this)

function fnExpression(){
    console.log("this dentro de function: " + this)
}

const fnArrow = () => console.log("this em arrow function: " + this)

function nest(){
    function nestedFunction(){
        console.log("this em nested function: " + this)
    }
    nestedFunction()
}

function nestedTimeout(){

    this.nome = "bruno"

    this.dados_arrow = function(){
        setTimeout(function what() {
            console.log(this)
        }, 1000)
    }
}

fnExpression()
fnArrow()
nest()
nestedTimeout()

const al1 = new nestedTimeout()

al1.dados_arrow()
