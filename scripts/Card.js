//можно обойтись без импорта попапов, но тогда надо было функцию открытия делать ВНЕ карточки в пр6
import {openPopup, popupImage, popupFoto, popupImageText} from './index.js'
export  default class Card {
  constructor(dataCard, selectorTemlate) {
    this._title = dataCard.name;
    this._link = dataCard.link;
    this._selectorTemlate = selectorTemlate;    
  }
  //клонировали и получили разметку 
  _cardTemplate() {
    const newCard = document.querySelector(this._selectorTemlate).content.querySelector(".element").cloneNode(true);
    return newCard;
  }
  //приватный метод удаления карточки
  _deleteCard = () => {
    this._basketCard .closest('.element').remove()
  }
  //приватный метод лайка
  _bigLike = () => {
    this._cardLike.classList.toggle('element__like_active')
  }
 //приватный метод слушителя
  _eventListeners () {
    this._cardElement.querySelector('.element__delete-button').addEventListener('click',this._deleteCard)
    this._cardElement.querySelector('.element__like').addEventListener('click',this._bigLike)
    this._cardFoto.addEventListener('click', () => {
      openPopup(popupImage);
      popupFoto.src = this._cardLink
      popupFoto.alt = this._cardLinkAlt
      popupImageText.textContent = this._cardName      
    });
  }
  //публичный метод создания карточки
  createCard() {
    this._cardElement = this._cardTemplate();
    //переменные поле и ссылка
    this._cardFoto = this._cardElement.querySelector('.element__foto')
    this._cardTitle = this._cardElement.querySelector('.element__title')
    this._cardLink = this._cardFoto.src = this._link
    this._cardLinkAlt = this._cardFoto.alt = this._title
    this._cardName = this._cardTitle.textContent = this._title
    this._cardLike = this._cardElement.querySelector('.element__like')
    this._basketCard = this._cardElement.querySelector('.element__delete-button')
    this._eventListeners()
    return this._cardElement
  }
}
