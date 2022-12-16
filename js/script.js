// Funktionerna här börjar köra programmet och jag ville bara ha med dom i denna modulen,
// för att smidigt se vad man kan göra.

import { openModal, closeModal, openPopup, closePopup, inputPopup } from './modules/modals.js';
import { handleTitles, saveMovies, getMovies } from './modules/handleMovies.js';


const formAddMovies = document.querySelector('#form-one');
const formSearchMovie = document.querySelector('#form-two');

const searchElem = document.querySelector('#search-message');

//Funktion som söker efer en film
function searchForMovie() {
formSearchMovie.addEventListener('submit', (e) => {
  e.preventDefault();
  
  searchElem.innerHTML = '';
  const fd = new FormData(formSearchMovie);
  const obj = Object.fromEntries(fd)
  if (obj.title === '') {
    
  } else {
  handleTitles(obj);
}
  formSearchMovie.reset();
  });
}

//Funktion som lägger till filmer
function searchForm() {

  formAddMovies.addEventListener('submit', (e) => {
  e.preventDefault();
   
  const fd = new FormData(formAddMovies);
  const obj = Object.fromEntries(fd);
if (obj.title, obj.genre, obj.date === '') {
  inputPopup();
} else {
  saveMovies(obj);
  getMovies();
  openPopup(obj);
  formAddMovies.reset();
}
  });
}

searchForm();
searchForMovie();
