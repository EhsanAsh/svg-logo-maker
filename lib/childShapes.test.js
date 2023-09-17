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

describe("Circle", () => { 

  describe("instantiate", () => {

    it("should be an instance of Circle", () => {
      const circle = new Circle("abc", "red", "#ffffff", "rgb(210, 105, 30)", 100);
      expect(circle).toBeInstanceOf(Circle);
    });

  });

  describe("radius", () => { 

    it("should set the radius properly", () => {
      const radius = 100;
      const circle = new Circle("abc", "red", "#ffffff", "rgb(210, 105, 30)", radius);
      expect(circle.radius).toBe(radius);
    });

    it("should throw an error when the radius provided is not a number", () => { 
      const radius = "abc";
      expect(() => new Circle(radius)).toThrow("Please enter a valid radius");
    });

    it("should throw an error when the radius provided is undefined", () => { 
      const radius = undefined;
      expect(() => new Circle(radius)).toThrow("Please enter a valid radius");
    });

  });

});