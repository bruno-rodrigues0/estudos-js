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


// function sum (){
//     let array = []
    
//     for(item of arguments){
//         array.push(item)
//     }

//     console.log(array)
// }

import express from 'express'

const app = express()

app.get('/', (req, res) => {
    const users = ['Bruno', 'Gabriel']

    return res.json({ users })
});

app.listen(3333);