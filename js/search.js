document.addEventListener("DOMContentLoaded", () => {
const searchInput = document.getElementById("searchInput");
const articles = document.querySelectorAll("article");

searchInput.addEventListener("keyup", () => {
const query = searchInput.value.toLowerCase();
articles.forEach(article => {
const text = article.innerText.toLowerCase();
article.style.display = text.includes(query) ? "" : "none";
});
});
});
