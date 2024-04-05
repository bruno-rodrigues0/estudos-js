// Criando uma classe JavaScript Stack baseada em objeto

export class Stack{
    #count; // Private property
    #items; // Private property
    
    constructor(){
        this.#count = 0;
        this.#items = {};
    }

    // Push de elementos da pilha
    push(element){
        this.#items[this.#count] = element;
        this.#count++; 
    }

    // Verificando se a pilha está vazio e o seu tamanho

    size(){
        return this.#count;
    }

    isEmpty(){
        return this.#count === 0;
    }

    // Pop de lementos da pilha
    pop(){
        if(this.isEmpty()){
            return undefined;
        }

        this.#count--;
        const result = this.#items[this.#count];
        delete this.#items[this.#count];
        return result;
    }

    //Dando uma espiada no topo e limpando a pilha

    peek(){
        if(this.isEmpty())
        {
            return undefined;
        }

        return this.#items[this.#count - 1];
    }

    clear(){
        this.#items = {};
        this.#count = 0;
    }

    // Criando o método toString

    toString(){
        if(this.isEmpty()){
            return '';
        }

        let objString = `${this.#items[0]}`;
        for(let i = 1; i < this.#count; i++){
            objString += `, ${this.#items[i]}`;
        }

        return objString;
    }
}

// const stack = new Stack();

// stack.push(5);
// stack.push(8);

// console.log(stack.toString());

// Tornando um item private com WeakMap

const items = new WeakMap();

class Stack2 {
    constructor(){
        items.set(this, []);
    }

    push(element){
        const s  = items.get(this);
        s.push(element);
    }

    pop(){
        const s = items.get(this);
        const r = s.pop();
        return r;
    }

    // Outros metodos
}