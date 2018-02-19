import { expect } from 'chai';
import { sum, sub } from '../src/simple-calc.js';

describe('SimpleCalc', () => {

  // smoke tests
  describe('Smoke tests', () => {

      it('shoult exist the method `sum`', () => {
        expect(sum).to.exist;
        expect(sum).to.be.a('function');
      });

      it('shoult exist the method `sub`', () => {
        expect(sub).to.exist;
        expect(sub).to.be.a('function');
      });

  });

  describe('Sum', () => {
    it('should return 6 when `sum(2, 4)`', () => {
      expect(sum(2, 4)).to.be.equal(6);
    });
    it('should return -2 when `sum(2, -4)`', () => {
      expect(sum(2, -4)).to.be.equal(-2);
    });
  });

  describe('Sub', () => {
    it('should return -2 when `sub(2, 4)`', () => {
      expect(sub(2, 4)).to.be.equal(-2);
    });
    it('should return 6 when `sub(2, -4)`', () => {
      expect(sub(2, -4)).to.be.equal(6);
    });
  });

});
