import { Queue } from './queue.js';

function hotPotato(players) {
    let queue = new Queue();
    let num = Math.floor(Math.random() * (5 - 15)) + 2;
    let eliminmatedList = [];
    for (let i = 0; i < players.length; i++) {
        queue.enqueue(players[i]);
    }
    while (queue.size() > 1) {
        for (let i = 0; i < num; i++) {
            queue.enqueue(queue.dequeue());
        }
        eliminmatedList.push(queue.dequeue());
        num = num = Math.floor(Math.random() * (5 - 15)) + 2;
    }
    return {
        eliminated: eliminmatedList,
        winner: queue.dequeue()
    };
}
let player = ['Gabriel', 'Pedro', 'Sofia', 'Ana Clara', 'Lucca'];
console.log(hotPotato(player));
