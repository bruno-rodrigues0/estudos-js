// @ts-check
import { Stack } from "./stack.js";

function isBalanced(symbols){

    const stack = new Stack();
    const opens = '{[(';
    const closes = '}])';
    let balanced = true;
    let index = 0;
    let symbol;
    let top;

    while(index < symbols.length && balanced){
        symbol = symbols[index];
        if(opens.indexOf(symbol) >= 0){
            stack.push(symbol);
        } else if(stack.isEmpty()){
            balanced = false;
        } else {
            top = stack.pop();
            if(!(opens.indexOf(top) === closes.indexOf(symbol))){
                balanced = false;
            }
        }
        index++;
    }

    return balanced && stack.isEmpty();
}

console.log(isBalanced('[()()]'));