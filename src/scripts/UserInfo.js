export default class UserInfo {
  constructor({nameHero, profHero}) {
    this._name = document.querySelector(nameHero);
    this._prof = document.querySelector(profHero);
    //console.log(this._names)
  }
  //который возвращает объект с данными пользователя. 
  getUserInfo() {    
   return {
      name: this._name.textContent,
      prof: this._prof.textContent,      
    }    
  }
  //который принимает 
  //новые данные пользователя и добавляет их на страницу.
  setUserInfo({inputName, inputJob}) {
    this._name.textContent = inputName;
    this._prof.textContent = inputJob;    
  }
}