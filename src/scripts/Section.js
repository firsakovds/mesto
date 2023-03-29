export  default class Section {
  //принимает объект с двумя свойствами 
  //и селектор контейнера, в который нужно добавлять созданные элементы.
  constructor ({items, renderer}, containerSelector) {
    this._items = items;
    this._renderer = renderer;
    this._container = document.querySelector(containerSelector);
    //console.log(this._container)
  }
  // публичный метод, который отвечает за отрисовку всех элементов
  renderItem() {
    this._items.forEach((item) => {
      const renderedItem = this._renderer(item);
      this.addItem(renderedItem);
    })
  }
  //который принимает DOM-элемент и добавляет его в контейнер.
  addItem(cardElement) {
    this._container.prepend(cardElement);
  }
}