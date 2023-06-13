const container = document.querySelector('.container');
let myLibrary = [];

const book = function (title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;

  this.addBookToLibrary = function (...book) {
    return myLibrary.push(book);
  };

  this.renderBook = function () {
    const html = `<li class="list">
    <p class="name">${this.title}</p>
    <h3><span class="book-info">Author:</span> ${this.author}</h3>
    <h5><span class="book-info">Pages: </span>${this.pages} Pages</h5>
    <h2>
    <span class="book-info">Status: </span> ${
      this.read ? 'Done Reading ✅' : "Haven't read yet"
    } 
    </h2>
    </li>`;
    container.innerHTML += html;
  };
};

const hobbit = new book('Hobbit', 'J.R.R Tolkien', 295, true);
const taken = new book('Taken', 'J.R.R Tolkien', 295, true);
const jello = new book('Jello', 'Hemlo', 295, false);
const cork = new book('Cork', 'J.R.R Tolkien', 295, true);
const blob = new book('Blob', 'Demlo', 295, true);
const tom = new book('Tom', 'J.R.R Tolkien', 295, false);

book.addBookToLibrary(hobbit, taken, jello, cork, blob, tom);
console.log(myLibrary);

myLibrary.forEach((book, index) => {
  console.log(book[index]);
});
