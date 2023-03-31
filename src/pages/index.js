import './index.css'; 
import Card from '../components/Card.js';
import FormValidator from '../components/FormValidator.js';
import Section from '../components/Section.js';
import PopupWithForm from '../components/PopupWithForm.js';
import PopupWithImage from '../components/PopupWithImage.js';
import UserInfo from '../components/UserInfo.js';
import {
  profile,
  popupEditProfile,
  popUpAdd,
  popupImage,
  formElementEdit,
  formUpAdd,
  popupFoto,
  popupImageText,
  nameInput,
  jobInput,
  editBut,
  buttonAdd,
  config,
  initialCards,
} from '../utils/constants.js'
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
 }
 function handleOpenPopup(title, link) {
  popupWithImage.open(title, link);
}
function handleFormSublitCard(data) {
  cardList.addItem(createNewCard(data))
  popupCardForm.close();
}
buttonAdd.addEventListener("click", () => {
  editValid.resetValidation();
  popupCardForm.open();
})
editBut.addEventListener("click", () => {
  const {name, prof} = userInfo.getUserInfo();
  nameInput.value = name;
  jobInput.value = prof;
  profValid.resetValidation();
  popupEditForm.open();
 })