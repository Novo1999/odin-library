'strict mode';

const container = document.querySelector('.container');
const titleInput = document.getElementById('title');
const authorInput = document.getElementById('author');
const pagesInput = document.getElementById('pages');
const readInputYes = document.querySelector('.read');
const readInputNo = document.querySelector('.not-read');
const form = document.querySelector('.wrap-2');
const submitBtn = document.getElementById('submit');
const addBook = document.querySelector('.addBook');

let myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;

  // createObject();

  addBookToLibrary = function (...book) {
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
  addBookToLibrary(newObj);
  newObj.renderBook(title, author, pagesCount, readStatus);
  form.style.display = 'none';
  container.style.display = 'grid';
});

addBook.addEventListener('click', () => {
  form.style.display = 'flex';
  container.style.display = 'none';
});
