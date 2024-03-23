class Book {
    constructor(title, pages, isbn) {
        this.title = title;
        this.pages = pages;
        this.isbn = isbn;
        Book.prototype.printIsbn = function () {
            console.log(this.isbn)
        }
    }
}

// class Books{
//     title = string;
//     pages = number;
//     isbn = number;
// }

let book = new Book("jsdatastructure", "500", "18267")
let otherbook = new Book("Se eu ficar", "354", "12387")

console.log(book, typeof(book))
console.log(otherbook, typeof(otherbook))

otherbook.printIsbn()
