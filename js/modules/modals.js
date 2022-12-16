// I denna modulen har jag med alla modaler som finns med på sidan.
// Även att inte alla modaler gör någon speciell funktion med andra funktioner som finns dit dom skickas,
// så ville jag ändå ha dom här för att få bättre struktur över programmet.

// 
const openModalBtn = document.querySelector('#modal-btn-show');
const closeModalBtn = document.querySelector('#modal-btn-close');
const movieModal = document.querySelector('#movieModal');

const popup = document.querySelector('#popup');
const popupMessage = document.querySelector('#popup-message');
const closePopupBtn = document.querySelector('#closePopup');

const searchElem = document.querySelector('#search-message');

//Modal som visar sparade filmer
function openModal() {
  movieModal.classList.add('show-modal')
}

openModalBtn.addEventListener('click', () => {
  openModal()
});

function closeModal() {
  searchElem.innerHTML = '';
  movieModal.classList.remove('show-modal')
}


closeModalBtn.addEventListener('click', () => {
  closeModal()
});

//Modal när inputfälten inte är ifyllda
function inputPopup() {
  popup.classList.add('show-popup');
  
  const elem = `

      <h2>Try again!</h2>
      <p>All fields must be filled!</p>
      
      `;
     popupMessage.insertAdjacentHTML('beforeend', elem);
}

//Modal som visar att en film har blivit tillagd
function openPopup(obj) {
  popup.classList.add('show-popup');
  
  const elem = `

      <h2>Good choice!</h2>
      <p>${obj.title} has been added to your favorites, go check it out!</p>
      
      `;
     popupMessage.insertAdjacentHTML('beforeend', elem);
}

function closePopup() {
  popup.classList.remove('show-popup');
  
}

closePopupBtn.addEventListener('click', () => {
  closePopup()
  popupMessage.innerHTML = '';
});




export { openModal, closeModal, openPopup, closePopup, inputPopup }