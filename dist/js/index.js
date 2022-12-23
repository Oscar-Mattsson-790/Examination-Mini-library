// GET API
var __awaiter =
  (this && this.__awaiter) ||
  function (thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P
        ? value
        : new P(function (resolve) {
            resolve(value);
          });
    }
    return new (P || (P = Promise))(function (resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      }
      function rejected(value) {
        try {
          step(generator["throw"](value));
        } catch (e) {
          reject(e);
        }
      }
      function step(result) {
        result.done
          ? resolve(result.value)
          : adopt(result.value).then(fulfilled, rejected);
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  };
function getBooks() {
  return __awaiter(this, void 0, void 0, function* () {
    try {
      const response = yield fetch(
        "https://my-json-server.typicode.com/zocom-christoffer-wallenberg/books-api/books"
      );
      if (response.status === 200) {
        const data = yield response.json();
        return data;
      } else {
        throw Error("Något gick fel, försök igen senare");
      }
    } catch (error) {
      console.log(error);
    }
  });
}
getBooks();
///////////////////////////////////////////////
// Selecting Elements
const mainPage = document.querySelector("main");
const secondMainPage = document.querySelector(".main__second__page");
const books = document.querySelectorAll(".book");
const secondPageBook = document.querySelector(".second__page_book_container");
const bookTitle1 = document.querySelector("#book_title_1");
const bookTitle2 = document.querySelector("#book_title_2");
const bookAuthor1 = document.querySelector("#book_author_1");
const bookAuthor2 = document.querySelector("#book_author_2");
const bookParagraph = document.querySelector("#paragraph_data");
const audience = document.querySelector("#audience");
const pages = document.querySelector("#pages");
const firstPublished = document.querySelector("#firstPublished");
const publisher = document.querySelector("#publisher");
// Return Arrow Button
const returnArrowButton = document.querySelector(".return__arrow__button");
returnArrowButton.addEventListener("click", () => {
  mainPage.style.display = "flex";
  secondMainPage.style.display = "none";
});
// Get data for books
books.forEach((book) => {
  book.addEventListener("click", () => {
    mainPage.style.display = "none";
    secondMainPage.style.display = "flex";
    secondPageBook.style.background = book.style.background;
    getBooks().then((data) => {
      data.forEach((bookInfo) => {
        if (Number(book.id) === bookInfo.id) {
          bookTitle1.innerHTML = bookInfo.title;
          bookTitle2.innerHTML = bookInfo.title;
          bookAuthor1.innerHTML = bookInfo.author;
          bookAuthor2.innerHTML = bookInfo.author;
          bookParagraph.innerHTML = bookInfo.plot;
          audience.innerHTML = bookInfo.audience;
          pages.innerHTML = bookInfo.pages;
          firstPublished.innerHTML = bookInfo.year;
          publisher.innerHTML = bookInfo.publisher;
        }
      });
    });
  });
});
