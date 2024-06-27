export default class Currency {
  constructor(code, name) {
    this.code = code;
    this.name = name;
  }

  // Name get & set
  get code() {
    return this._code;
  }

  set code(code) {
    if (typeof code !== 'string') {
      throw new TypeError('Code must be a string.');
    }

    this._code = code;
  }

  // Name get & set
  get name() {
    return this._name;
  }

  set name(name) {
    if (typeof name !== 'string') {
      throw new TypeError('Name must be a string.');
    }

    this._name = name;
  }

  // Methode
  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }
}
