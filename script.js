'use strict';

const container = document.querySelector('.container');
const titleInput = document.getElementById('title');
const authorInput = document.getElementById('author');
const pagesInput = document.getElementById('pages');
const readInputYes = document.querySelector('.read');
const readInputNo = document.querySelector('.not-read');
const formDiv = document.querySelector('.wrap-2');
const submitBtn = document.getElementById('submit');
const addBook = document.querySelector('.btn-add');
const form = document.querySelector('.form');
const crossBtn = document.querySelector('.cross');
const deleteBtn = document.querySelector('.btn-delete');
const deletePrompt = document.querySelector('.deleteAllPrompt');
const promptBtn = document.querySelectorAll('.promptBtn');
let myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;

  Book.addBookToLibrary = function (...book) {
    myLibrary.push(...book);
  };

  Book.prototype.renderBook = function (title, author, pages, read) {
    const html = `<li class="list">
    <p class="name">${title}</p>
    <h3><span class="book-info">Author:</span> ${author}</h3>
    <h5><span class="book-info">Pages: </span>${pages} Pages</h5>
    <h2>
    <span class="book-info">Status:  ${
      read === 'true' ? 'Done Reading ✅' : "Haven't read yet </span>"
    } 
    </h2>
    </li>`;
    container.insertAdjacentHTML('afterbegin', html);
  };
}

function createObj(title, author, pages, read) {
  if (!title || !author || !pages || !read) {
    alert('❗Fill all info❗');
    return;
  }
  return new Book(title, author, pages, read);
}

let retrievedBooks = JSON.parse(localStorage.getItem('savedBooks'));
/* Steps */
// User writes on a form (title,author,pages,read or not)
// form submits
// A new object is created
// Object pushed into the myLibrary array
// Render the book to the library

submitBtn.addEventListener('click', e => {
  e.preventDefault();
  const title = titleInput.value;
  const author = authorInput.value;
  const pagesCount = pagesInput.value;
  const readStatus = readInputYes.checked
    ? readInputYes.value
    : readInputNo.value;
  const newObj = createObj(title, author, pagesCount, readStatus);
  if (retrievedBooks === null) myLibrary = [];
  Book.addBookToLibrary(newObj);
  newObj.renderBook(title, author, pagesCount, readStatus);
  formDiv.style.display = 'none';
  container.style.display = 'grid';
  form.reset();
  localStorage.setItem('savedBooks', JSON.stringify(myLibrary));
});

function savedLibrary() {
  myLibrary = [];
  myLibrary = retrievedBooks;
  if (retrievedBooks === null) return;
  myLibrary.forEach(book => {
    const savedLibrary = createObj(
      book.title,
      book.author,
      book.pages,
      book.read
    );
    savedLibrary.renderBook(book.title, book.author, book.pages, book.read);
  });
}
savedLibrary();

addBook.addEventListener('click', () => {
  formDisplay('flex', 'none');
});

crossBtn.addEventListener('click', () => {
  formDisplay('none', 'grid');
});

function formDisplay(formDisp, containerDisp) {
  formDiv.style.display = formDisp;
  container.style.display = containerDisp;
}

deleteBtn.addEventListener('click', () => {
  if (container.innerHTML !== '') deleteAll();
});

function deleteAll() {
  deletePrompt.style.display = 'flex';
  deletePrompt.addEventListener('click', e => {
    if (e.target.classList.contains('yes')) {
      deletePrompt.style.display = 'none';
      setTimeout(() => {
        retrievedBooks = null;
        localStorage.clear();
        container.style.display = 'none';
        container.innerHTML = '';
      }, 500);
    } else {
      deletePrompt.style.display = 'none';
      container.style.display = 'grid';
    }
  });
}
