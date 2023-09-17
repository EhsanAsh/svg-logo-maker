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

  describe("shapeColor", () => {

    it("should set the shapeColor properly", () => {
      const shapeColor = "#ffffff";
      const shape = new Shape("abc", "red", shapeColor, "rgb(210, 105, 30)");
      expect(shape.shapeColor).toBe(shapeColor);
    });

    it("should throw an error when the shapeColor provided is not a string", () => {
      const shapeColor = 1;
      expect(() => new Shape(shapeColor)).toThrow("Please enter a string");
    });

    it("should throw an error when the shapeColor provided is undefined", () => {
      const shapeColor = undefined;
      expect(() => new Shape(shapeColor)).toThrow("Please enter a string");
    });

    it("should throw an error if the shapeColor is not a valid color", () => {
      const shapeColor = "ffffff";
      expect(() => new Shape("abc", "red", shapeColor, "rgb(210, 105, 30)")).toThrow("Please enter a valid shape color");
    });

  });

  describe("bgColor", () => {

    it("should set the background Color properly", () => {
      const bgColor = "rgba(210, 105, 30, 0.5)";
      const shape = new Shape("abc", "red", "#ffffff", bgColor);
      expect(shape.bgColor).toBe(bgColor);
    });

    it("should throw an error when the background Color provided is not a string", () => {
      const bgColor = 1;
      expect(() => new Shape(bgColor)).toThrow("Please enter a string");
    });

    it("should throw an error when the background Color provided is undefined", () => {
      const bgColor = undefined;
      expect(() => new Shape(bgColor)).toThrow("Please enter a string");
    });

    it("should throw an error if the background Color is not a valid color", () => {
      const bgColor = "rgb(210)";
      expect(() => new Shape("abc", "red","rgb(210, 105, 30)", bgColor)).toThrow("Please enter a valid background color");
    });

  });

});