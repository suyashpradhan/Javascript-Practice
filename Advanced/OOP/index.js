function book(bookName, bookPrice) {
    console.log(typeof book);
}

book();

book();

class Book {
    constructor(bookName, bookPrice) {
        this.bookName = bookName;
        this.bookPrice = bookPrice;
    }
}

let gg = new Book('Title', 42);
console.log(typeof gg);