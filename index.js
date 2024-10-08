import { createSearchBar } from "./components/SearchBar/SearchBar.js";
import { CharacterCard } from "./components/CharacterCard/CharacterCard.js";


const cardContainer = document.querySelector('[data-js="card-container"]');
const searchBarContainer = document.querySelector(
  '[data-js="search-bar-container"]'
);
// const searchBar = document.querySelector('[data-js="search-bar"]');
const navigation = document.querySelector('[data-js="navigation"]');
const prevButton = document.querySelector('[data-js="button-prev"]');
const nextButton = document.querySelector('[data-js="button-next"]');
const pagination = document.querySelector('[data-js="pagination"]');

// States
let maxPage = 1;
let page = 1;
let searchQuery = "";

searchBarContainer.append(createSearchBar());


export async function fetchCharacters() {
  const response = await fetch(
    `https://rickandmortyapi.com/api/character/?page=${page}&name=${searchQuery}`
  );
  const data = await response.json();

  console.log(data);

  cardContainer.innerHTML = "";
  maxPage = data.info.pages;
  data.results.forEach((character) => {
    const card = CharacterCard(character);
    cardContainer.append(card);
  });
  pagination.textContent = `${page} / ${maxPage}`;
}
fetchCharacters();

/* export async function fetchPages(maxPage) {
  const responseInfo = await fetch(
    `https://rickandmortyapi.com/api/character=${Page}`
  );
  const data = await responseInfo.json();
} */
// Pagination

prevButton.addEventListener("click", () => {
  if (page > 1) {
    page--;
    fetchCharacters(page);
  } else {
    console.log("Du bist auf der ersten Seite.");
  }
});

nextButton.addEventListener("click", () => {
  if (page < maxPage) {
    page++;
    fetchCharacters(page);
  } else {
    console.log("Maximale Seitenzahl erreicht.");
  }
});

// searchBar.addEventListener("submit", (event) => {
//   event.preventDefault();
//   searchQuery = event.target.elements.query.value;
//   page = 1;
//   fetchCharacters();
// });
