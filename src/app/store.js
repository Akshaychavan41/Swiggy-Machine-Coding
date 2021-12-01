export default class Store {
  constructor() {
    this._store = [];
  }
  getStore() {
    return this._store;
  }
  setStore(data) {
    this._store = data;
  }

  getLocalState() {
    return window.localStorage.getItem("data");
  }
  setLocalState() {
    return window.localStorage.setItem("data", data);
  }
}
