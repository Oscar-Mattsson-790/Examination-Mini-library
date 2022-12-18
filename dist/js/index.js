"use strict";

async function getBooks() {
  try {
    const response = await fetch(
      "https://my-json-server.typicode.com/zocom-christoffer-wallenberg/books-api/books"
    );
    console.log(response);
    if (response.status === 200) {
      const data = await response.json();
      console.log(data);
    } else {
      throw Error("Något gick fel, försök igen senare");
    }
  } catch (error) {
    console.log(error);
  }
}
getBooks();

const mainElem = document.querySelector("main");
const secondMainElem = document.querySelector(".main__second__page");
const books = document.querySelectorAll(".book");
const secondPageBook = document.querySelector(".second__page_book_container");

books.forEach((book) => {
  book.addEventListener("click", () => {
    console.log(book.style.background);
    mainElem.style.display = "none";
    secondMainElem.style.display = "flex";
    secondPageBook.style.background = book.style.background;
  });
});
