import { CharacterCard } from "./components/CharacterCard/CharacterCard.js";

const cardContainer = document.querySelector('[data-js="card-container"]');
const searchBarContainer = document.querySelector(
  '[data-js="search-bar-container"]'
);
const searchBar = document.querySelector('[data-js="search-bar"]');
const navigation = document.querySelector('[data-js="navigation"]');
const prevButton = document.querySelector('[data-js="button-prev"]');
const nextButton = document.querySelector('[data-js="button-next"]');
const pagination = document.querySelector('[data-js="pagination"]');

// States
const maxPage = 1;
const page = 1;
const searchQuery = "";

export async function fetchCharacters(pageIndex) {
  const response = await fetch(`https://rickandmortyapi.com/api/character/?page=${pageIndex}`);
  const data = await response.json();
  console.log(data);

  cardContainer.innerHTML = "";

  data.results.forEach((character) => {
    const card = CharacterCard(character);
    cardContainer.append(card);
  });
}
fetchCharacters();


// Pagination



let pageIndex = 1;

prevButton.addEventListener("click", () => {

  if (pageIndex >= 1) {
    pageIndex--
    fetchCharacters(pageIndex);
    updatePaginationDisplay(pageIndex);
  } else {
    console.log("Du bist auf der ersten Seite.");
  }
  
  });



nextButton.addEventListener("click", () => {

  if (pageIndex < 20) {
    pageIndex++
    fetchCharacters(pageIndex);
    updatePaginationDisplay(pageIndex);
  } else {
    console.log("Maximale Seitenzahl erreicht.");
  }
  
  });



  function updatePaginationDisplay(pageIndex) {
    pagination.textContent = `${pageIndex} / 20`; 
  };
  
  

