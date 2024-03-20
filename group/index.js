import { test } from './mod1' 

console.log(test)

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

fnExpression()
fnArrow()
nest()
nestedTimeout()
