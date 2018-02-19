import { expect } from 'chai';
import { sum, sub, mult, div } from '../src/simple-calc.js';

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

      it('shoult exist the method `mult`', () => {
        expect(mult).to.exist;
        expect(mult).to.be.a('function');
      });

      it('shoult exist the method `div`', () => {
        expect(div).to.exist;
        expect(div).to.be.a('function');
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

  describe('Mult', () => {
    it('should return 8 when `mult(2, 4)`', () => {
      expect(mult(2, 4)).to.be.equal(8);
    });
    it('should return 6 when `mult(2, -4)`', () => {
      expect(mult(2, -4)).to.be.equal(-8);
    });
  });

  describe('Div', () => {
    it('should return 4 when `div(8, 2)`', () => {
      expect(div(8, 2)).to.be.equal(4);
    });
    it('should return `Não é possível a divisão por 0` when divide by 0', () => {
      expect(div(8, 0)).to.be.equal('Não é possível a divisão por 0');
    });
  });

});
