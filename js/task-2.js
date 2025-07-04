
class Storage { 
  #items
  constructor(arrItems) {
    this.#items = arrItems;
  }
  
  
  getItems() {
    return this.#items;
  }

  addItem(newItem) {
    this.#items.push(newItem);
  }

  removeItem(itemToRemove) {
    this.#items = this.#items.filter(item => item !== itemToRemove);
  }
}