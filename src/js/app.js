import "../scss/app.scss";

window.addEventListener("DOMContentLoaded", () => {
  const button = document.querySelector(".button");
  button.addEventListener("click", (event) => {
    event.preventDefault();
  });
});

let addArticle = () => {
  const articles = document.createElement("article");
  articles.classList.add("message");
  articles.innerHTML = "sample text";
  document.body.appendChild(articles);
};

document.body.addEventListener("click", (event) => {
  let count = 5;
  while (count != 0) {
    addArticle();
    count--;
  }
  event.preventDefault();
});