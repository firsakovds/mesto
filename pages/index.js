// Находим форму в DOM
let formElement = document.querySelector('.popup')
// Находим поля формы в DOM
let nameInput = formElement.querySelector('.popup__input_name') 
let jobInput = formElement.querySelector('.popup__input_job')
let savePopupBut = formElement.querySelector('.popup__save')
//находим блок profile
let profile = document.querySelector('.profile')
//Находим кнопку для вызова popup
let editBut = profile.querySelector('.profile__edit-button')
//Находим поля блока profile c именем и профессией
let nameHero = profile.querySelector('.profile__title')
let profHero = profile.querySelector('.profile__subtitle')
// выбираем необходимы элементы блока popup (кнопку закрытия popup)
let popupCloseBut = formElement.querySelector('.popup__button-close')
//описываем реакцию на КЛИК кнопок profile__edit-button и popup__button-close
editBut.addEventListener('click', openPopup)
popupCloseBut.addEventListener('click', closePopup)
//описываем функции открытия формы popup и закрытия формы popup
function openPopup() {
  formElement.classList.add('popup_opened')
  nameInput.value = nameHero.textContent
  jobInput.value = profHero.textContent
}
function closePopup() {
  formElement.classList.remove('popup_opened')
}
function handleFormSubmit (evt) {
    evt.preventDefault(); 
    nameHero.textContent = nameInput.value
    profHero.textContent = jobInput.value   
    closePopup()
}
formElement.addEventListener('submit', handleFormSubmit);
