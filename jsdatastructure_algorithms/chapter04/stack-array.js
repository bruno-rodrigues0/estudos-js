// Estrutura de dados de pilha (stack) 
//      Coleção ordenada de items que obedece ao princípio LIFO (Last In First Out)


// Craindo uma classe Stack baseada em array

class Stack {
    constructor(){
        this.items = [];
    }

    // Push de elementos na stack

    push(element){
        this.items.push(element);
    }

    // Pop de elementos da pilha
    pop(){
        return this.items.pop();
    }

    // Principio LIFO se aplica a classe, pois apenas possui metodos de adição e subtração de itens no final do array (topo da stack)

    // Dando uma espiada no elemento que está no topo da pilha

    peek(){
        return this.items[this.items.length - 1];
    }

    // Verifiando se a pilha está vazia
    isEmpty(){
        return this.items.length === 0;
    }

    size(){
        return this.items.length;
    }

    //Limpando elemntos da pilha

    clear(){
        this.items = [];
    }
}

// Usando a classe Stack

const stack = new Stack();

console.log(stack.isEmpty()); // true

stack.push(5);
stack.push(8);
stack.push('Bruno');

console.log(stack.peek()); // 'Bruno'

stack.push(11);

console.log(stack.size()); // 4
console.log(stack.isEmpty()); // false

stack.pop();
stack.pop();

console.log(stack.size()); // 2


