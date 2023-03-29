import {initialCards} from './cards.js';
import Card from './Card.js';
import FormValidator from './FormValidator.js';
import Section from './Section.js';
import PopupWithForm from './PopupWithForm.js';
import PopupWithImage from './PopupWithImage.js';
import UserInfo from './UserInfo.js';
const profile = document.querySelector('.profile')
//нашли попапы
const popupEditProfile = document.querySelector('.popup_type_edit-profile')
const popUpAdd = document.querySelector('.popup_type_add-card')
export const popupImage = document.querySelector('.popup_type_image-closer')
//ищем в них формы
const formElementEdit = popupEditProfile.querySelector('.popup__form')
const formUpAdd = popUpAdd.querySelector('.popup__form_type_add')
//данные попапа карточки
export const popupFoto =  popupImage.querySelector('.popup__photo')
export const popupImageText = popupImage.querySelector('.popup__photo-text')
// Находим в формах поля ввода
const nameInput = formElementEdit.querySelector('.popup__input_place_name')
const jobInput = formElementEdit.querySelector('.popup__input_place_job')
//кнопки
const editBut = profile.querySelector('.profile__edit-button')
const buttonAdd = document.querySelector('.profile__add-button')
//все настройки для валидации
const config = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',  
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible'
};
//копии
const userInfo = new UserInfo({
  nameHero: '.profile__title',
  profHero: '.profile__subtitle'
})
const cardList = new Section(
  {
    items: initialCards,
    renderer:  createNewCard,
  },
  '.elements'
)
cardList.renderItem(); 
//копии валидации
const profValid = new FormValidator(config, formElementEdit);
const editValid = new FormValidator(config, formUpAdd);
profValid.enableValidation();
editValid.enableValidation();
const popupWithImage = new PopupWithImage('.popup_type_image-closer');
popupWithImage.setEventListeners();
const popupEditForm = new PopupWithForm('.popup_type_edit-profile', handleFormProfSubmit)
popupEditForm.setEventListeners();
const popupCardForm = new PopupWithForm('.popup_type_add-card', handleFormSublitCard)
popupCardForm.setEventListeners();
function createNewCard(dataCard) {
  const card = new Card(dataCard, '#elements__card', handleOpenPopup);  
  return card.createCard()
}
function handleFormProfSubmit(data) {
  userInfo.setUserInfo(data);
  popupEditForm.close();
  console.log(data)
 }
 function handleOpenPopup(title, link) {
  popupWithImage.open(title, link);
}
function handleFormSublitCard(data) {
  cardList.addItem(createNewCard(data))
  popupCardForm.close();
}
buttonAdd.addEventListener("click", () => {
  editValid.enableValidation();
  popupCardForm.open();
})
editBut.addEventListener("click", () => {
  const {name, prof} = userInfo.getUserInfo();
  nameInput.value = name;
  jobInput.value = prof;
  profValid.enableValidation();
  popupEditForm.open();
 })