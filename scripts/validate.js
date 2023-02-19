//все настройки для валидации
enableValidation({
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',  
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible'
}); 
// делаем массив из доступных форм
function enableValidation(data) {
  const forms = Array.from(document.querySelectorAll(data.formSelector))
  //перебираем массив 
  forms.forEach(function(form) {
    form.addEventListener('submit', function(e) {
      e.preventDefault()
    })
    setInputListenet(form, data)
  })
}
function setInputListenet(form, data) {
  const inputs = Array.from(form.querySelectorAll(data.inputSelector))
  const buttonSave = form.querySelector(data.submitButtonSelector)
  toggleButtonSave(inputs, buttonSave, data)
  inputs.forEach(function (input) {
    input.addEventListener('input', function () {
      valid(form, input, data)
      toggleButtonSave(inputs, buttonSave, data)
    })
  })
}
//показать кастомное сообщение об ошибке
function seeInputError(form, input, data) {
  const inputError = form.querySelector(`#${input.id} + .popup__error`)
  const customErrorText = input.getAttribute('title') 
  input.classList.add(data.inputErrorClass)
  inputError.textContent = customErrorText
  inputError.classList.add(data.errorClass)
}
//убрать сообщение об ошибке
function hideInputError(form, input, data) {
  const inputError = form.querySelector(`#${input.id} + .popup__error`)
  input.classList.remove(data.inputErrorClass)
  input.classList.remove(data.errorClass)
  inputError.textContent = ""
}
//проверяем на валидность
function valid(form, input, data) {
  if (!input.validity.valid) {
    seeInputError(form, input, data)
  } else {
    hideInputError(form, input, data)
  }
}
//проверяем все ли элементы массива валидны
function fieldIsValid(inputs) {
  return inputs.some(function (input) {
    return !input.validity.valid
  })
}
//ссостояние кнопки сохранить
function toggleButtonSave(inputs, buttonSave) {
  if (fieldIsValid(inputs)) {
    buttonSave.setAttribute('disabled', 'disabled');
  } else {
    buttonSave.removeAttribute('disabled');
  }
}
