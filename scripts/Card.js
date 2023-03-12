export  default class Card {
  constructor(dataCard, selectorTemlate, handleOpenPopup) {
    this._title = dataCard.name;
    this._link = dataCard.link;
    this._selectorTemlate = selectorTemlate;
    this._handleOpenPopup= handleOpenPopup;
  }
  //клонировали и получили разметку 
  _cardTemplate() {
    const newCard = document.querySelector(this._selectorTemlate).content.querySelector(".element").cloneNode(true);
    return newCard;
  }
  //приватный метод удаления карточки
  _deleteCard = () => {
    this._cardElement.remove()
    this._cardElement = null
  }
  //приватный метод лайка
  _changeLike = () => {
    this._cardLike.classList.toggle('element__like_active')
  }  
 //приватный метод слушителя
  _eventListeners () {
    this._cardElement.querySelector('.element__delete-button').addEventListener('click',this._deleteCard)
    this._cardElement.querySelector('.element__like').addEventListener('click',this._changeLike)    
    this._cardElement.querySelector('.element__foto').addEventListener('click', () => { 
      this._handleOpenPopup(this._title, this._link) 
    });  
  }
  //публичный метод создания карточки
  createCard() {
    this._cardElement = this._cardTemplate()
    //переменные поле и ссылка
    this._cardElement.querySelector('.element__foto').src = this._link
    this._cardElement.querySelector('.element__foto').alt = this._title
    this._cardElement.querySelector('.element__title').textContent = this._title
    this._cardLike = this._cardElement.querySelector('.element__like')   
    this._eventListeners()
    return this._cardElement
  }
}
