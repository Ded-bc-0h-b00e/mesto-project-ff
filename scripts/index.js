
const cardTemplate = document.querySelector("#card-template").content;
const placesList = document.querySelector(".places__list");

function createCard(cardData, deleteCb) {
  const cardEl = cardTemplate.querySelector(".card").cloneNode(true);
  const cardImg = cardEl.querySelector(".card__image");
  const cardTitle = cardEl.querySelector(".card__title");
  const deleteBtn = cardEl.querySelector(".card__delete-button");
  cardImg.src = cardData.link;
  cardImg.alt = cardData.name;
  cardTitle.textContent = cardData.name;
  deleteBtn.addEventListener("click", () => {
    deleteCb(cardEl);
  });
  return cardEl;
}

function deleteCard(cardElement) {
  cardElement.remove();
}

initialCards.forEach((cardData) => {
  const cardElement = createCard(cardData, deleteCard);
  placesList.append(cardElement);
});