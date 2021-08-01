const header__getStartedBtn = document.querySelector(".header__getStartedBtn")

header__getStartedBtn.addEventListener("click", () => {
    window.scrollTo(0, document.documentElement.clientHeight);
});

// materialize initalization
M.AutoInit();

document.addEventListener('DOMContentLoaded', function () {
    var elems = document.querySelectorAll('.parallax');
    var instances = M.Parallax.init(elems, {});
});

document.addEventListener('DOMContentLoaded', function () {
    var elems = document.querySelectorAll('.carousel');
    var instances = M.Carousel.init(elems, {});
});

// scroll up button
const table__scrolUpBtn = document.querySelector(".table__scrollUpBtn");

table__scrolUpBtn.addEventListener("click", () => {
    window.scrollTo(0, 0);
});

// del button
const table__delBtn = document.querySelector(".table__delBtn");

table__delBtn.addEventListener("click", () => {
    // removing data
    localStorage.removeItem("movie_ratings");
    table__ratings.lastElementChild.innerHTML = "<tr><th>Movie</th><th>IMDB</th></tr>";
});

// Get data
const section__ratingForm = document.querySelector(".section__ratingForm");
const section__carousel = document.querySelector(".section__carousel");
const table__ratings = document.querySelector(".table__ratings");

const prevData = JSON.parse(localStorage.getItem("movie_ratings")) || [];

// generating html elements for previously stored data
prevData.map(({ movie, rating }) => {
    // table row
    const newRow = document.createElement("tr");
    newRow.innerHTML = `<td>${movie}</td><td>${rating}</td>`;
    table__ratings.lastElementChild.appendChild(newRow);
    // carousel card
    const newCard = document.createElement("div");
    newCard.innerHTML = `<h1>${movie}</h1><h2>${rating}</h2>`;
    newCard.className = "section__dataCard carousel-item";
    section__carousel.appendChild(newCard);
});

// Updating data
section__ratingForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const data = new FormData(e.target);

    const movie = data.get("movie");
    const rating = data.get("rating");

    if (movie && rating) {
        const prevData = JSON.parse(localStorage.getItem("movie_ratings")) || [];
        prevData.push({ movie, rating });
        localStorage.setItem("movie_ratings", JSON.stringify(prevData));

        // generating html elements for previously stored data
        // creating a row
        const newRow = document.createElement("tr");
        newRow.innerHTML = `<td>${movie}</td><td>${rating}</td>`;
        table__ratings.lastElementChild.appendChild(newRow);

        e.target.reset();
    }
    else if (!movie) alert("Please enter the movie's name.");
    else alert("Please enter the movie's IMDB rating.");
});

