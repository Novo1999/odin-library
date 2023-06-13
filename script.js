'strict mode';

const container = document.querySelector('.container');
let myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

addBookToLibrary = function (...book) {
  return myLibrary.push(...book);
};

Book.prototype.renderBook = function () {
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

function createObject() {}

const hobbit = new Book('Hobbit', 'J.R.R Tolkien', 295, true);
const taken = new Book('Taken', 'J.R.R Tolkien', 295, true);
const jello = new Book('Jello', 'Hemlo', 295, false);
const cork = new Book('Cork', 'J.R.R Tolkien', 295, true);
const blob = new Book('Blob', 'Demlo', 295, true);
const tom = new Book('Tom', 'J.R.R Tolkien', 295, false);

addBookToLibrary(hobbit, taken, jello, cork, blob, tom);

myLibrary.forEach(book => book.renderBook());
// myLibrary.push(hobbit, taken, jello, cork, blob, tom);

/* Steps */

// User writes on a form (title,author,pages,read or not)
// form submits
// A new object is created
// Object pushed into the myLibrary array
// Render the book to the library
