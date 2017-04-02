import Example from './example';

class Library {
  constructor() {
    this._name = 'Library';
  }

  get name() {
    return this._name;
  }

  example(items) {
    return new Example(items);
  }
}

export default new Library();
