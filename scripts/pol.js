const content = document.querySelector('.content');
const cardContainer = content.querySelector('.elements');
const buttonAdd = content.querySelector('.profile__add-button');



const popUpAdd = document.querySelector('.popup__add-card');
const formUpAdd = popUpAdd.querySelector('.popup__form-add');
const titleInput = popUpAdd.querySelector('.popup__input_place_space');
const linkInput = popUpAdd.querySelector('.popup__input_place_link');
const buttonAddClose = popUpAdd.querySelector('.popup__button-close_type_add');
const buttonCreateNewCard = formUpAdd.querySelector('.popup__create');


buttonAdd.addEventListener('click', openPopupAdd);
buttonAddClose.addEventListener('click', closePopupAdd);

function openPopupAdd () {
  popUpAdd.classList.add('popup_opened')
  


};

function closePopupAdd () {
  popUpAdd.classList.remove('popup_opened')

};

function addCard(title, link) {
  const cardTemplate = document.querySelector('.elements__card').content;
  const cardElement = cardTemplate.querySelector('.element').cloneNode(true);
  cardElement.querySelector('.element__title').textContent = title;
  cardElement.querySelector('.element__foto').textContent = link;
  cardContainer.append(cardElement);

  cardElement.querySelector('.element__like').addEventListener('click', function (evt) {
    evt.target.classList.toggle('.element__like_active');
  });
  return cardElement; 
};
buttonCreateNewCard.addEventListener('click', function () {
  const title = document.querySelector('.popup__input_place_space');
  const link = document.querySelector('.popup__input_place_link');
  addCard(title.Value, link.Value);
});

function handleFormCardAddSubmit (evt) {
  evt.preventDefault();   
  titleInput.value = '';
  linkInput.value = '';
  
  closePopupAdd();
};
formUpAdd.addEventListener('submit', handleFormCardAddSubmit);