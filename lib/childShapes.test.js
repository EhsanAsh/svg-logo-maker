const Triangle = require('./childShapes.js').Triangle;
const Circle = require('./childShapes.js').Circle;
const Square = require('./childShapes.js').Square;

// Using jest to test the Triangle,Circle and Square class:

describe("Triangle", () => { 

  describe("instantiate", () => { 
      
      it("should be an instance of Triangle", () => {
        const triangle = new Triangle("abc", "red", "#ffffff", "rgb(210, 105, 30)", 100, 100);
        expect(triangle).toBeInstanceOf(Triangle);
      });
  
  });

  describe("base", () => { 

    it("should set the base properly", () => {
      const base = 100;
      const triangle = new Triangle("abc", "red", "#ffffff", "rgb(210, 105, 30)", base, 100);
      expect(triangle.base).toBe(base);
    });

    it("should throw an error when the base provided is not a number", () => {
      const base = "abc";
      expect(() => new Triangle(base)).toThrow("Please enter a valid number");
    });

    it("should throw an error when the base provided is undefined", () => {
      const base = undefined;
      expect(() => new Triangle(base)).toThrow("Please enter a valid number");
    });

  });

});