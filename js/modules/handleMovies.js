// I denna moduel har jag allt som händer när man lägger till en film, söker på en film
// och tar bort en film. Kändes logiskt att ha i samma modul då.
// Om det hade varit lite fler funktioner kanske jag hade gjort en till modul,
// med dom funktionerna som skriver ut i html dokumentet.

import { db, collection, addDoc, getDocs, deleteDoc, query, where, doc} from './firebaseconfig.js';

const moviesElem = document.querySelector('#movies-elem');
const searchElem = document.querySelector('#search-message');

async function saveMovies(movie) {
  try {
    
      await addDoc(collection(db, 'movies'), movie);
  } catch (error) {
      console.log(error);
  }
}

async function removeFromDb(movieId) {
  try {
      
      await deleteDoc(doc(db, 'movies', movieId));
      moviesElem.innerHTML = ''; // Tömmer html i moviesElem
      getMovies(); // Fyller på med filmer i html igen
  } catch (error) {
      console.log('ERROR:', error);
  }
}

async function getMovies() {
  try {
      const favMovies = await getDocs(collection(db, 'movies'));
      moviesElem.innerHTML = '';
      displayMovies(favMovies)
      
  } catch (error) {
    console.log(error);
  }

}
function displayMovies(favMovies) {
 
  favMovies.forEach((movie) => {
  
  const elem = `
  <div class="div-elem">
  <p>Title: ${movie.data().title}</p>
  <p>Genre: ${movie.data().genre}</p>
  <p>Released: ${movie.data().date}</p>
  <button id="remove-btn" data-movie-id="${movie.id}">Delete</button>
  </div>
  `;
      moviesElem.insertAdjacentHTML('beforeend', elem);
  }); 
  addClickEvent(); 
}

function addClickEvent() {
  const removeBtnElem = document.querySelectorAll('#remove-btn')
  removeBtnElem.forEach((buttonElem)=> {
    
    buttonElem.addEventListener('click', (event) => {
      const movieId = event.target.getAttribute('data-movie-id');
      removeFromDb(movieId);
    })
  });
}

async function checkIfMovieExist(obj) {
  try {
      const titleQuery = query(collection(db, 'movies'), where('title', '==', obj.title));
      
      const result = await getDocs(titleQuery);
      let resultTitle = {};

      result.forEach((title) => {
          resultTitle = title;
          
      });
     
      return resultTitle;
  } catch (error) {
      console.log(error);
  }
}

async function handleTitles(obj) {

  const title = await checkIfMovieExist(obj);
  
  const titleId = title.id;
  
  if (titleId) {
    const elem = `
  
    <p>Movie found!</p>
    <p>Title: ${title.data().title}</p>
    <p>Genre: ${title.data().genre}</p>
    <p>Released: ${title.data().date}</p>
    
    `;
    
    searchElem.insertAdjacentHTML('beforeend', elem);
  } else {
    const elem = `
  
    <p>Can't find that movie in your favorites</p>
    
    `;
    
    searchElem.insertAdjacentHTML('beforeend', elem);
  }
} 

getMovies();

export { handleTitles, saveMovies, getMovies }