const Shape = require('./shape.js');

// Using jest library to test the Shape class:

describe("Shape", () => { 

  describe("instantiate", () => {

    it("should be an instance of Shape", () => {
      const shape = new Shape("abc", "red", "#ffffff", "rgb(210, 105, 30)");
      expect(shape).toBeInstanceOf(Shape);
    });

  });

  describe("text", () => {

    it("should set the text properly", () => {
      const text = "abc";
      const shape = new Shape(text, "red", "#ffffff", "rgb(210, 105, 30)");
      expect(shape.text).toBe(text);
    });

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

    it("should set the textColor properly", () => {
      const textColor = "red";
      const shape = new Shape("abc", textColor, "#ffffff", "rgb(210, 105, 30)");
      expect(shape.textColor).toBe(textColor);
    });

    it("should throw an error when the textColor provided is not a string", () => {
      const textColor = 1;
      expect(() => new Shape(textColor)).toThrow("Please enter a string");
    });

    it("should throw an error when the textColor provided is undefined", () => {
      const textColor = undefined;
      expect(() => new Shape(textColor)).toThrow("Please enter a string");
    });

    it("should throw an error if the textColor is not a valid color", () => {
      const textColor = "not a valid color";
      expect(() => new Shape("abc", textColor, "#ffffff", "rgb(210, 105, 30)")).toThrow("Please enter a valid text color");
    });

  });

});