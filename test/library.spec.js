import lib from '../lib/Library';

//import chai from 'chai';
const chai = require('chai');
//import Library from '../lib/library.js';
const Library = require('../lib/Library.js');

chai.expect();

const expect = chai.expect;

//let lib;

describe('Given an instance of my library',  () => {
//   before(() => {
//     lib = new Library();
//   });
  describe('when I need the name', () => {
    it('should return the name', () => {
      expect(lib.name).to.be.equal('Library');
    });
  });
});

let example;
describe('Given an instance of example', () => {
  before(() => {
    example = lib.example([1,2,3]);
  });
  describe('when I access the items of the example', () => {
    it('should return the first item', () => {
      expect(example.firstItem()).to.be.equal(1);
    });
  });
});
