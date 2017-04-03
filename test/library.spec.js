/*global describe, it, before */

const chai = require('chai');
const Library = require('../lib/Library.js');

chai.expect();

const expect = chai.expect;

describe('Given an instance of my library',  () => {
  describe('when I need the name', () => {
    it('should return the name', () => {
      expect(Library.name).to.be.equal('Library');
    });
  });
});

let example;
describe('Given an instance of example', () => {
  before(() => {
    example = Library.example([1,2,3]);
  });
  describe('when I access the items of the example', () => {
    it('should return the first item', () => {
      expect(example.firstItem()).to.be.equal(1);
    });
  });
});
