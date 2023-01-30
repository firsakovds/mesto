// Находим форму в DOM
let popUp = document.querySelector('.popup')
let formElement = popUp.querySelector('.popup__form')
// Находим поля формы в DOM
let nameInput = formElement.querySelector('.popup__input_place_name') 
let jobInput = formElement.querySelector('.popup__input_place_job')
let savePopupBut = formElement.querySelector('.popup__save')
//находим блок profile
let profile = document.querySelector('.profile')
//Находим кнопку для вызова popup
let editBut = profile.querySelector('.profile__edit-button')
//Находим поля блока profile c именем и профессией
let nameHero = profile.querySelector('.profile__title')
let profHero = profile.querySelector('.profile__subtitle')
// выбираем необходимы элементы блока popup (кнопку закрытия popup)
let popupCloseBut = popUp.querySelector('.popup__button-close_type_profile')
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


//popup добавления карточки
//ищем форму в DOM
const popUpAdd = document.querySelector('.popup__add-card');
const formElementAdd = popUpAdd.querySelector('.popup__form-add');
//находим поля формы add 
const spaceAdd = formElementAdd.querySelector('.popup__input_place_space');
const linkAdd = formElementAdd.querySelector('.popup__input_place_link');
//Находим кнопку для вызова popup__add-card добавления карточки 
const ButAdd = profile.querySelector('.profile__add-button');
// выбираем необходимы элементы блока popup (кнопку закрытия popup)
let popupCloseButAdd = popUpAdd.querySelector('.popup__button-close_type_add')
//описываем реакцию на КЛИК кнопок profile__add-button и popup__button-close_type_add
ButAdd.addEventListener('click', openPopupAdd);
popupCloseButAdd.addEventListener('click', closePopupAdd);

function openPopupAdd() {
  popUpAdd.classList.add('popup_opened')
};

function closePopupAdd() {
  popUpAdd.classList.remove('popup_opened')
};