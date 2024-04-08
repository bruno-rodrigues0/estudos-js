import { Node } from "./linked-list-models";

function defaultEquals(a, b) {
    return a === b;
  }  

export default class LinkedList{

    #count;
    #head;
    #equalsFn;

    constructor(equalsFn = defaultEquals){
        this.#count = 0;
        this.#head = undefined;
        this.#equalsFn = equalsFn;
    }   

    push(){
        
    }
}