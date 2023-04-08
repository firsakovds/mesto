export default class UserInfo {
  constructor({nameHero, profHero}) {
    this._name = document.querySelector(nameHero);
    this._about = document.querySelector(profHero);
    //console.log(this._names)
  }
  //который возвращает объект с данными пользователя. 
  getUserInfo() {    
   return {
      name: this._name.textContent,
      about: this._about.textContent,      
    }    
  }
  //который принимает 
  //новые данные пользователя и добавляет их на страницу.
  setUserInfo({inputName, inputJob}) {
    this._name.textContent = inputName;
    this._about.textContent = inputJob;    
  }
}