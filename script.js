const book = function (title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;

  this.info = function () {
    return `${this.title} by ${this.author}, ${this.pages}, ${
      this.read ? 'done reading' : 'not read yet'
    }`;
  };
};

const hobbit = new book('Hobbit', 'J.R.R Tolkien', 295, true);

console.log(hobbit.info());

let myLibrary = [];

const addBookToLibrary = function (book) {
  return myLibrary.push(book);
};
