// class Book {
//     constructor(title, pages, isbn) {
//         this.title = title;
//         this.pages = pages;
//         this.isbn = isbn;
//         Book.prototype.printIsbn = function () {
//             console.log(this.isbn)
//         }
//     }
// }

// let book2 = {
//     name: "string"
// }

// // class Books{
// //     title = string;
// //     pages = number;
// //     isbn = number;
// // }

// let book = new Book("jsdatastructure", "500", "18267")
// let otherbook = new Book("Se eu ficar", "354", "12387")

// console.log(book, typeof(book))
// console.log(otherbook, typeof(otherbook))

// otherbook.printIsbn()

// document.write("Olá!")

// const book = {
//     name: "Learning JavaScript Data Structure and Algorithms"
// };

// console.log("You are reading " + book.name + ".,\nand this is a new line\nand so is this. ");

// console.log(
// `Your are reading ${book.name},
// and this is a new line,
// and so is this.`
// )


// let [x, y] = [1, 6];

// console.log(x, y);

// [x, y] = [y, x];

// console.log(x, y);

// Property shorthand

// let [x, y] = ['a', 'b'];

// let obj = {x, y}

// console.log(obj);


// Declaração de funções como propriedades em objetos

// const hello = {
//     name: 'abc',
//     printHello(){
//         console.log('Hello, World');
//     }
// }

// hello.printHello();

// declaração de classes

//             //sintaxe antiga
// function Books(title, pages, isbn){
//     this.title = title;
//     this.pages = pages;
//     this.isbn = isbn;
// }

// Books.prototype.prinTitle = function() {
//     console.log(this.title);
// }

// //nova sintaxe

// class Book {
//     constructor(title, pages, isbn){
//         this.title = title;
//         this.pages = pages;
//         this.isbn = isbn;
//     }
//     printIsbn(){
//         console.log(this.isbn);
//     }
// }

// let book  = new Book('Se eu ficar', '512', 1398)

// console.log(book.title);
// book.title = 'Para onde ela foi';
// console.log(book.title);


//        //        // Herança

// class ITbooks extends Book{
//     constructor(title, pages, isbn, technology){
//         super(title, pages, isbn);
//         this.technology = technology;
//     }

//     printTech(){
//         console.log(this.technology);
//     }
// }

// let jsBook = new ITbooks('Learning JS Algorithms', '234', '12387503890', 'JavaScript');

// console.log(jsBook.title);
// jsBook.printTech();


                // GETTERS E SETTERS


// class Person {
//     constructor(name){
//         this._name = name;
//     }

//     get name(){
//         return this._name;
//     }

//     set name(value){
//         this._name = value;
//     }
// }

// let lotrChar = new Person('Frodo');

// console.log(lotrChar.name);
// lotrChar.name = 'Gandalf';
// console.log(lotrChar.name);
// lotrChar._name = 'Sam';
// console.log(lotrChar.name);


                // exponencial

// const area  = 3.14*r**2;


                // MÓDULOS

// import { circleArea as circle, squareArea as square } from './17-CalcArea.js';

// console.log(circle(5));
// console.log(square(2));

