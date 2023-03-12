import {initialCards} from "./cards.js";
import Card from "./Card.js";
import FormValidator from "./FormValidator.js";
const profile = document.querySelector('.profile')
//необходимые данные
const nameHero = profile.querySelector('.profile__title')
const profHero = profile.querySelector('.profile__subtitle')
//нашли попапы
const popupEditProfile = document.querySelector('.popup_type_edit-profile')
const popUpAdd = document.querySelector('.popup_type_add-card')
export const popupImage = document.querySelector('.popup_type_image-closer')
const popupsAll = document.querySelectorAll('.popup')
//ищем в них формы
const formElementEdit = popupEditProfile.querySelector('.popup__form')
const formUpAdd = popUpAdd.querySelector('.popup__form_type_add')
//данные попапа карточки
export const popupFoto =  popupImage.querySelector('.popup__photo')
export const popupImageText = popupImage.querySelector('.popup__photo-text')
// Находим в формах поля ввода
const nameInput = formElementEdit.querySelector('.popup__input_place_name')
const jobInput = formElementEdit.querySelector('.popup__input_place_job')
const titleInput = formUpAdd.querySelector('.popup__input_place_space')
const linkInput = formUpAdd.querySelector('.popup__input_place_link')
//кнопки
const editBut = profile.querySelector('.profile__edit-button')
const buttonAdd = document.querySelector('.profile__add-button')
//темплейт нового места
const cardContainer = document.querySelector('.elements')
//все настройки для валидации
const config = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',  
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible'
}; 
//функции открытия и закрытия попапов
export function openPopup(popup) {
  popup.classList.add('popup_opened')  
  addListenerKeydown()
}
function closePopup(popup) {
  popup.classList.remove('popup_opened')
  removeListenerKeydown()
}
//функция открытия попап профиля
function openProfilePopup () {
  nameInput.value = nameHero.textContent
  jobInput.value = profHero.textContent
  openPopup(popupEditProfile)
  profValid.resetValidation()
}
//функции открытия попапа новой карточки
function openPopupAdd () {
  formUpAdd.reset()
  openPopup(popUpAdd)
  editValid.resetValidation() 
}
//функция закрытия новой карточки
function closePopupAdd () {
  closePopup(popUpAdd)
}
//копии
function createNewCard(dataCard, selectorTemlate) {
  const card = new Card(dataCard, selectorTemlate, handleOpenPopup);  
  return card.createCard()
}
function addCard(dataCard, selectorTemlate) {
 const cardElement = createNewCard(dataCard, selectorTemlate)
  cardContainer.prepend(cardElement)
}
//перебираем массив и создаем дефолтные карточки
initialCards.forEach(function(item) {
  addCard(item, '#elements__card')
})
//копии валидации
const profValid = new FormValidator(config, formElementEdit)
const editValid = new FormValidator(config, formUpAdd)
profValid.enableValidation()
editValid.enableValidation()
//клики
buttonAdd.addEventListener('click', openPopupAdd)
editBut.addEventListener('click', openProfilePopup)
document.querySelectorAll('.popup__button-close').forEach(button => {
  const buttonsPopup = button.closest('.popup') // нашли родителя с нужным классом
  button.addEventListener('click', () => closePopup(buttonsPopup)) // закрыли попап
});
//обработчики
function handleFormSubmit (evt) {
  evt.preventDefault()
  nameHero.textContent = nameInput.value
  profHero.textContent = jobInput.value
  closePopup(popupEditProfile)
}
function handleFormCardAddSubmit (evt) {
  evt.preventDefault()
  const data = {
    name: titleInput.value,
    link: linkInput.value
  }
  addCard(data, '#elements__card')
  formUpAdd.reset()
  closePopupAdd()
}
formElementEdit.addEventListener('submit', handleFormSubmit)
formUpAdd.addEventListener('submit', handleFormCardAddSubmit)
 //функция закрытия попап по нажатию esc
function popupCloseEsc(evt) {
 if (evt.key === 'Escape') {
    const popupActive = document.querySelector('.popup_opened')
    closePopup(popupActive)
  }  
}
//слушатель на нажатие 
function addListenerKeydown() {
  document.addEventListener('keydown', popupCloseEsc)
}
function removeListenerKeydown() {
  document.removeEventListener('keydown', popupCloseEsc)
}
//слушатель клика вне области всех попапов
popupsAll.forEach((popup) => {
  popup.addEventListener('click', function(e) {
    if (e.target.closest('.popup')) {
      closePopup(e.target)
    }
  })
})
//функция открытия картинки
function handleOpenPopup(title, link) {
  popupFoto.src = link; 
  popupFoto.alt = title; 
  popupImageText.textContent = title; 
  openPopup(popupImage); 
}  