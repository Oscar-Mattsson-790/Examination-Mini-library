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
const bookElem = document.querySelector(".book1");

bookElem.addEventListener("click", () => {
  console.log("Clicked");
  mainElem.style.display = "none";
});
