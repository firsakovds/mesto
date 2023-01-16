//выбрали необходимые элементы блока profile
let formElement = document.querySelector('.profile')
// Находим поля формы в DOM
let nameInput = formElement.querySelector('.profile__title') 
let jobInput = formElement.querySelector('.profile__subtitle')
let editBut = formElement.querySelector('.profile__edit-button')

// выбираем необходимы элементы блока popup (кнопку закрытия popup)
let popupForm = document.querySelector('.popup')
let popupCloseBut = popupForm.querySelector('.popup__button-close')


//описываем реакцию на КЛИК кнопок profile__edit-button и popup__button-close
editBut.addEventListener('click', openPopup)
popupCloseBut.addEventListener('click', closePopup)

//описываем функции открытия формы popup и закрытия формы popup
function openPopup() {
  popupForm.classList.add('popup_opened');
}
function closePopup() {
  popupForm.classList.remove('popup_opened')
}

/*
// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет
function handleFormSubmit (evt) {
    evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
                                                // Так мы можем определить свою логику отправки.
                                                // О том, как это делать, расскажем позже.

    // Получите значение полей jobInput и nameInput из свойства value

    // Выберите элементы, куда должны быть вставлены значения полей

    // Вставьте новые значения с помощью textContent
}

// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
formElement.addEventListener('submit', handleFormSubmit);*/
