export class Deck{

    #count;
    #lowestCount;
    #items;

    constructor(){
        this.#count = 0;
        this.#lowestCount = 0;
        this.#items = {};
    }

    addFront(element){
        if(this.isEmpty()){
            this.addBack(element);
        } else if (this.#lowestCount > 0){
            this.#lowestCount--;
            this.#items[this.#lowestCount] = element;
        } else {
            for(let i = this.#count; i > 0; i--){
                this.#items[i] = this.#items[i - 1]; 
            }
        }

        this.#count++;
        this.#lowestCount = 0;
        this.#items[0] = element;
    }

    addBack(element){
        this.#items[this.#count] = element;
        this.#count++;
    }

    removeFront(){
        if(this.isEmpty()){
            return undefined;
        }

        const result = this.#items[this.#lowestCount];
        delete this.#items[this.#lowestCount]; 
        this.#lowestCount++;

        return result;
    }

    removeBack(){
        if(this.isEmpty()){
            return undefined;
        }

        this.#count--;
        const result = this.#items[this.#count];
        delete this.#items[this.#count];
        return result;
    }

    peekFront(){
        return this.#items[this.#lowestCount];
    }

    peekBack(){
        return this.#items[this.#count];
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