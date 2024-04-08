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

    push(element){
        const node = new Node(element);
        let current;

        if(this.#head == null){
            this.#head = node;
        } else {
            current = this.#head;

            while(current.next != null){
                current = current.next;
            }

            current.next = node;
        }

        this.#count++;
    }
}