// @ts-check

import { Deck } from './deck.js'

function palindromeChecker(isPalindrome = ''){
    let result = true;
 
    if(isPalindrome === undefined || isPalindrome === null || isPalindrome !== null && isPalindrome === ''){
        return false;
    }

    isPalindrome = isPalindrome.toLocaleLowerCase().split(' ').join('');
    let deck = new Deck();
    for(let i = 0; i < isPalindrome.length; i++){
        deck.addBack(isPalindrome.charAt(i)); 
    };

    while(deck.size() > 1 && result){
        let firstChar, lastChar;
        firstChar = deck.removeFront();
        lastChar = deck.removeBack();
        if(firstChar !== lastChar){
            result = false;
        }
    }

    return result;
}

console.log(palindromeChecker('subi no onibus'));