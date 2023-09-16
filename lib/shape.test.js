const Shape = require('./shape.js');

// Using jest library to test the Shape class:

describe("Shape", () => { 

  describe("text", () => {

    it("should throw an error when the text provided is not a string", () => {
      const text = 1;
      expect(() => new Shape(text)).toThrow("Please enter a string");
    });

    it("should throw an error when the text provided is undefined", () => {
      const text = undefined;
      expect(() => new Shape(text)).toThrow("Please enter a string");
    });

    it("should throw an error if the text is not exactly 3 characters long", () => {
      const text = "ab";
      expect(() => new Shape(text)).toThrow("Please enter a string with exactly 3 characters");
    });

  });

  describe("textColor", () => { 

    it("should throw an error when the textColor provided is not a string", () => {
      const textColor = 1;
      expect(() => new Shape(textColor)).toThrow("Please enter a string");
    });

  });

});