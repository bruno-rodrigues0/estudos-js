export class Queue {

    #count;
    #lowestCount;
    #items;

    constructor () {
        this.#count = 0;
        this.#lowestCount = 0;
        this.#items = {};
    }

    enqueue(element){
        this.#items[this.#count] = element;
        this.#count++;
    }

    dequeue(){
        if(this.isEmpty()){
            return undefined;
        }

        const result = this.#items[this.#lowestCount];
        delete this.#items[this.#lowestCount]; 
        this.#lowestCount++;

        return result;
    }

    peek(){
        return this.#items[this.#lowestCount];
    }

    isEmpty(){
        return this.size() === 0;
    }

    size(){
        return this.#count - this.#lowestCount;    
    }

    clear(){
        this.#items = {};
        this.#count = 0;
        this.#lowestCount = 0;
    }

    toString(){
        if(this.isEmpty()){
            return '';
        }

        let objString = `${this.#items[0]}`;
        for(let i = 1; i < this.size(); i++){
            objString += `, ${this.#items[i]}`;
        }

        return objString;
    }

}