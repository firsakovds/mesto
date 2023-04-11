import './index.css'; 
import Card from '../components/Card.js';
import FormValidator from '../components/FormValidator.js';
import Section from '../components/Section.js';
import PopupWithForm from '../components/PopupWithForm.js';
import PopupWithImage from '../components/PopupWithImage.js';
import UserInfo from '../components/UserInfo.js';
import Api from '../components/Api.js';
import PopupWithConfirm from '../components/PopupWithConfirm';
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
  buttonAvatar,
  formAvatar,
} from '../utils/constants.js'
const api = new Api({
 baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-63',
 headers: {
    authorization: 'fd6fbc3f-6166-47d9-adb3-abe48f771ff4',
    'Content-Type': 'application/json'
  }
});
Promise.all([api.getUserInfo(), api.getInitialCards()])
  .then(([userServerData, cardsData]) => {
    userInfo.setUserInfo(userServerData);
    cardList.renderItem(cardsData);
  }).catch((err) => {
    alert(err);
  });
//копии
const userInfo = new UserInfo({
  nameHero: '.profile__title',
  profHero: '.profile__subtitle',
  avatar: '.profile__avatar',
})
const cardList = new Section(
  {
    //items: initialCards,
    renderer:  createNewCard,    
  },
  '.elements'
)
//cardList.renderItem(); 
//копии валидации
const profValid = new FormValidator(config, formElementEdit);
const editValid = new FormValidator(config, formUpAdd);
const avatarValid = new FormValidator(config, formAvatar);
profValid.enableValidation();
editValid.enableValidation();
avatarValid.enableValidation();
const popupWithImage = new PopupWithImage('.popup_type_image-closer');
popupWithImage.setEventListeners();
const popupEditForm = new PopupWithForm('.popup_type_edit-profile', handleFormProfSubmit)
popupEditForm.setEventListeners();
const popupCardForm = new PopupWithForm('.popup_type_add-card', handleFormSublitCard)
popupCardForm.setEventListeners();
const popupWithConfirm = new PopupWithConfirm ('.popup_type_delete', handleRemoveConfirmSubmit)
popupWithConfirm.setEventListeners();
const popupWithAvatar = new PopupWithForm('.popup_type_avatar', handleFormSublitAvatar)
popupWithAvatar.setEventListeners();
function createNewCard(dataCard) {
  const card = new Card(
    dataCard,
     '#elements__card',
      handleOpenPopup,
      handleBacketButClick,
      handleLikeClick,
      userInfo.returnMyId()
      );  
  return card.createCard()
}
//смена аватара
function handleFormSublitAvatar(avatar) {
  popupWithAvatar.renderLoading(true);
  api.patchAvatar(avatar)
  .then((res) => {
    userInfo.setUserInfo(res);
    popupWithAvatar.close(); 
   })
   .catch((err) => {
    console.log(err)
   })
   .finally(() => {
    popupWithAvatar.renderLoading(false);
  })
}
buttonAvatar.addEventListener('click', () => {
  avatarValid.resetValidation();
  popupWithAvatar.open()
})
//удаление карточки
function handleRemoveConfirmSubmit(card) {
  popupWithConfirm.renderLoading(true);
  api.deleteCard(card.cardId)
  .then(() => {
    card.deleteCard();
    popupWithConfirm.close()
  })
  .catch((err) => {
    alert(err)
  })
  .finally(() => {
    popupWithConfirm.renderLoading(false);
  })
}
 function handleBacketButClick(card) { 
  popupWithConfirm.open(card)
 }
 //лайки
function handleLikeClick(card) {  
  if ((card.checkLike)) {
    api.deleteLikeCard(card.cardId)
    .then((data) => {
      card.deleteLike(data.likes.length);      
    })
    .catch((err) => {
      console.log(err)
    });
  } else {
    api.putLikeCard(card.cardId)
    .then((data) => {
      card.addLike(data.likes.length);     
    })
    .catch((err) => {
      console.log(err)
    });  
  }  
}
//данные героя
function handleFormProfSubmit(data) {
  popupEditForm.renderLoading(true);
 api.patchUserInfo(data)
 .then((res) => {
  userInfo.setUserInfo(res);
  popupEditForm.close(); 
 })
 .catch((err) => {
  console.log(err)
 })
 .finally(() => {
  popupEditForm.renderLoading(false);
})  
 }
 function handleOpenPopup(title, link) {
  popupWithImage.open(title, link);
}
//карточка
function handleFormSublitCard(data) {
  popupCardForm.renderLoading(true);
  api.postNewCard(data)
  .then((res) => {
    cardList.addItem(createNewCard(res))
  popupCardForm.close();
  })
  .catch((err) => {
    console.log(err)
   })
  .finally(() => {
    popupCardForm.renderLoading(false);
  })  
}
buttonAdd.addEventListener("click", () => {
  editValid.resetValidation();
  popupCardForm.open();
})
editBut.addEventListener("click", () => {
  const {name, about} = userInfo.getUserInfo();
  nameInput.value = name;
  jobInput.value = about;
  profValid.resetValidation();
  popupEditForm.open();
 })