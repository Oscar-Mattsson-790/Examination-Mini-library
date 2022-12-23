// GET API

interface Book {
  audience: string;
  author: string;
  color: string;
  id: number;
  pages: string;
  plot: string;
  publisher: string;
  title: string;
  year: string;
}

async function getBooks() {
  try {
    const response = await fetch(
      "https://my-json-server.typicode.com/zocom-christoffer-wallenberg/books-api/books"
    );
    if (response.status === 200) {
      const data: Book[] = await response.json();
      return data;
    } else {
      throw Error("Något gick fel, försök igen senare");
    }
  } catch (error) {
    console.log(error);
  }
}

getBooks();
///////////////////////////////////////////////

// Selecting Elements
const mainPage: HTMLElement = document.querySelector("main");
const secondMainPage: HTMLElement = document.querySelector(
  ".main__second__page"
);
const books: NodeListOf<HTMLElement> = document.querySelectorAll(".book");
const secondPageBook: HTMLElement = document.querySelector(
  ".second__page_book_container"
);
const bookTitle1: HTMLElement = document.querySelector("#book_title_1");
const bookTitle2: HTMLElement = document.querySelector("#book_title_2");
const bookAuthor1: HTMLElement = document.querySelector("#book_author_1");
const bookAuthor2: HTMLElement = document.querySelector("#book_author_2");
const bookParagraph: HTMLElement = document.querySelector("#paragraph_data");
const audience: HTMLElement = document.querySelector("#audience");
const pages: HTMLElement = document.querySelector("#pages");
const firstPublished: HTMLElement = document.querySelector("#firstPublished");
const publisher: HTMLElement = document.querySelector("#publisher");

// Return Arrow Button
const returnArrowButton: HTMLElement = document.querySelector(
  ".return__arrow__button"
);

returnArrowButton.addEventListener("click", () => {
  mainPage.style.display = "flex";
  secondMainPage.style.display = "none";
});

// Get data for books

books.forEach((book: HTMLElement) => {
  book.addEventListener("click", () => {
    mainPage.style.display = "none";
    secondMainPage.style.display = "flex";
    secondPageBook.style.background = book.style.background;

    getBooks().then((data: Book[]) => {
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
