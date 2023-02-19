const profile = document.querySelector('.profile')
//необходимые данные
const nameHero = profile.querySelector('.profile__title')
const profHero = profile.querySelector('.profile__subtitle')
//нашли попапы
const popupEditProfile = document.querySelector('.popup_type_edit-profile')
const popUpAdd = document.querySelector('.popup_type_add-card')
const popupImage = document.querySelector('.popup_type_image-closer')
const popupsAll = document.querySelectorAll('.popup')
//ищем в них формы
const formElementEdit = popupEditProfile.querySelector('.popup__form')
const formUpAdd = popUpAdd.querySelector('.popup__form_type_add')
//данные попапа карточки
const popupFoto =  popupImage.querySelector('.popup__photo')
const popupImageText = popupImage.querySelector('.popup__photo-text')
// Находим в формах поля ввода
const nameInput = formElementEdit.querySelector('.popup__input_place_name')
const jobInput = formElementEdit.querySelector('.popup__input_place_job')
const titleInput = formUpAdd.querySelector('.popup__input_place_space')
const linkInput = formUpAdd.querySelector('.popup__input_place_link')
//кнопки
const editBut = profile.querySelector('.profile__edit-button')
const popupCloseButEdit = popupEditProfile.querySelector('.popup__button-close_type_profile')
const buttonAdd = document.querySelector('.profile__add-button')
const buttonAddClose = popUpAdd.querySelector('.popup__button-close_type_add')
const popupImageClose = popupImage.querySelector('.popup__button-close_type_image')
const popupButProfileInvalid = document.querySelector('.popup__save-profile')
const popupButFormAddInvalid = document.querySelector('.popup__create')
//темплейт нового места
const cardTemplate = document.querySelector('#elements__card').content
const cardContainer = document.querySelector('.elements')
//функции открытия и закрытия попапов
function openPopup(popup) {
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
  popupButProfileInvalid.disabled = true
  openPopup(popupEditProfile)
}
//функция закрытия попап профиля
function closeProfilePopup () {  
  closePopup(popupEditProfile)
}
//функции открытия попапа новой карточки
function openPopupAdd () {
  popupButFormAddInvalid.disabled = true
  openPopup(popUpAdd)
}
//функция закрытия новой карточки
function closePopupAdd () {
  closePopup(popUpAdd)
}
function closePopupImage () {
  closePopup(popupImage)
}
//перебираем массив и создаем дефолтные карточки
initialCards.forEach(function(item) {
  cardContainer.append(createCard(item.name, item.link))
})
function createCard (title, link) {
  const cardElement = cardTemplate.cloneNode(true)
  //переменные поле и ссылка
  const cardFoto = cardElement.querySelector('.element__foto')
  const cardTitle = cardElement.querySelector('.element__title')
  const cardLink = cardFoto.src = link
  const cardLinkAlt = cardFoto.alt = title
  const cardName = cardTitle.textContent = title
  //реакция на клик по лайку
  const cardLike = cardElement.querySelector('.element__like')
  cardLike.addEventListener('click', function(evt) {
    evt.target.classList.toggle('element__like_active')
  })
  //реакция на клик по корзине  
  const basketCard = cardElement.querySelector('.element__delete-button')
  basketCard.addEventListener('click', function(evt) {
    evt.target.closest('.element').remove()
  })
  //открытие картинки
  cardFoto.addEventListener('click', function() {
    openPopup(popupImage)
    popupFoto.src = cardLink
    popupFoto.alt = cardLinkAlt
    popupImageText.textContent = cardName
  });
  return cardElement
}
//клики
buttonAddClose.addEventListener('click', closePopupAdd)
buttonAdd.addEventListener('click', openPopupAdd)
editBut.addEventListener('click', openProfilePopup)
popupCloseButEdit.addEventListener('click', closeProfilePopup)
popupImageClose.addEventListener('click', closePopupImage)
//обработчики
function handleFormSubmit (evt) {
  evt.preventDefault()
  nameHero.textContent = nameInput.value
  profHero.textContent = jobInput.value
  closePopup(popupEditProfile)
}
function handleFormCardAddSubmit (evt)  {
  evt.preventDefault()
  cardContainer.prepend(createCard(titleInput.value, linkInput.value))
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
  window.addEventListener('keydown', popupCloseEsc)
}
function removeListenerKeydown() {
  window.removeEventListener('keydown', popupCloseEsc)
}
//слушатель клика вне области всех попапов
popupsAll.forEach((popup) => {
  popup.addEventListener('click', function(e) {
    if (e.target.closest('.popup')) {
      closePopup(e.target)
    }
  })
})
