// Находим форму в DOM
const popUp = document.querySelector('.popup')
const formElement = popUp.querySelector('.popup__form')
// Находим поля формы в DOM
let nameInput = formElement.querySelector('.popup__input_place_name') 
let jobInput = formElement.querySelector('.popup__input_place_job')
const savePopupBut = formElement.querySelector('.popup__save')
//находим блок profile
const profile = document.querySelector('.profile')
//Находим кнопку для вызова popup
const editBut = profile.querySelector('.profile__edit-button')
//Находим поля блока profile c именем и профессией
let nameHero = profile.querySelector('.profile__title')
let profHero = profile.querySelector('.profile__subtitle')
// выбираем необходимы элементы блока popup (кнопку закрытия popup)
const popupCloseBut = popUp.querySelector('.popup__button-close_type_profile')
//описываем реакцию на КЛИК кнопок profile__edit-button и popup__button-close
editBut.addEventListener('click', openPopup)
popupCloseBut.addEventListener('click', closePopup)
//описываем функции открытия формы popup и закрытия формы popup
function openPopup() {
  popUp.classList.add('popup_opened')
  nameInput.value = nameHero.textContent
  jobInput.value = profHero.textContent
}
function closePopup() {
  popUp.classList.remove('popup_opened')
}
function handleFormSubmit (evt) {
    evt.preventDefault(); 
    nameHero.textContent = nameInput.value
    profHero.textContent = jobInput.value   
    closePopup()
}
formElement.addEventListener('submit', handleFormSubmit);
// ниже идут задания пр5
//popup формы добавления карточки
const popUpAdd = document.querySelector('.popup_type_add-card');
//форма карточки в доме
const formUpAdd = popUpAdd.querySelector('.popup__form-add');
//кнопкаоткрытия попап карточки
const buttonAdd = document.querySelector('.profile__add-button');
//кнопка закрытия попап карточки
const buttonAddClose = popUpAdd.querySelector('.popup__button-close_type_add');
//поля ввода попапа карточки
let titleInput = formUpAdd.querySelector('.popup__input_place_space');
let linkInput = formUpAdd.querySelector('.popup__input_place_link');
//кнопка создать карточку
const buttonCreateNewCard = formUpAdd.querySelector('.popup__create');
//темплейт нового места
const cardTemplate = document.querySelector('#elements__card').content;
const cardContainer = document.querySelector('.elements');
// элементы попапа клозер
//находим кнопку выхова попап картинки
const popupImage = document.querySelector('.popup_type_image-closer');
const popupFoto =  popupImage.querySelector('.popup__photo');
const popupImageText = popupImage.querySelector('.popup__photo-text');
const popupImageClose = popupImage.querySelector('.popup__button-close_type_image');
//дефолтный массив
const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];
//перебираем массив и создаем дефолтные карточки
initialCards.forEach(function(item) {
  cardContainer.append(createCard(item.name, item.link));
});
//открытие попап карточки
buttonAdd.addEventListener('click', openPopupAdd);
function openPopupAdd () {
  popUpAdd.classList.add('popup_opened')
};
//закрытие попап карточки
buttonAddClose.addEventListener('click', closePopupAdd);
function closePopupAdd () {
  popUpAdd.classList.remove('popup_opened')
};
function createCard (title, link) {
  const cardElement = cardTemplate.cloneNode(true);
  //переменные поле и ссылка
  const cardFoto = cardElement.querySelector('.element__foto');
  let cardTitle = cardElement.querySelector('.element__title');
  const cardLink = cardFoto.src = link;
  const cardName = cardTitle.textContent = title;
  //реакция на клик по лайку
  const cardLike = cardElement.querySelector('.element__like');
  cardLike.addEventListener('click', function(evt) {
    evt.target.classList.toggle('element__like_active');
  });
  //реакция на клик по корзине  
  const basketCard = cardElement.querySelector('.element__delete-button');
  basketCard.addEventListener('click', function(evt) {
    evt.target.closest('.element').remove();
  });
  //открытие картинки
  cardFoto.addEventListener('click', function() {
    popupImage.classList.add('popup_opened');
    popupFoto.src = cardLink;
    popupImageText.textContent = cardName;
  }); 
  return cardElement;
}
function handleFormCardAddSubmit (evt)  {
  evt.preventDefault();
  cardContainer.prepend(createCard(titleInput.value, linkInput.value));
  titleInput.value = '';
  linkInput.value = '';
  closePopupAdd();
}
buttonCreateNewCard.addEventListener('click', function () {
  const title = document.querySelector('.popup__input_place_space');
  const link = document.querySelector('.popup__input_place_link');
  createCard(title.Value, link.Value);
});
formUpAdd.addEventListener('submit', handleFormCardAddSubmit);
//закрытие картинки
popupImageClose.addEventListener('click', function() {
  popupImage.classList.remove('popup_opened');
});




  
  
  


