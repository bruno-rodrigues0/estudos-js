// @ts-check

import { Stack } from "./stack.js";

function baseConverter(decNumber = 0, base = 2){
    const remStack = new Stack();

    let number = decNumber;
    let digits = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    let rem;
    let baseString = '';

    if(!(base >=2 && base <= 36)){
        return '';
    }

    while(number > 0){
        rem = Math.floor(number % base);
        remStack.push(rem);
        number = Math.floor(number / base);
    }

    console.log(remStack.toString());

    while(!remStack.isEmpty()){
        baseString += digits[remStack.pop()];        
    }

    return baseString;
}

console.log(baseConverter(71, 36));