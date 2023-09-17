// Description: This file is the entry point of the application. It creates a factory function to create the shapes and a function to render the shapes.

const Triangle = require("./lib/childShapes.js").Triangle;
const Circle = require("./lib/childShapes.js").Circle;
const Square = require("./lib/childShapes.js").Square;

// Creating a factory function to create the shapes:
const shapeFactory = (type, text, textColor, shapeColor, bgColor, ...args) => {

  switch (type) { 
    case "triangle":
      return new Triangle(text, textColor, shapeColor, bgColor, ...args);
    case "circle":
      return new Circle(text, textColor, shapeColor, bgColor, ...args);
    case "square":
      return new Square(text, textColor, shapeColor, bgColor, ...args);
    default:
      throw new TypeError("Please enter a valid type");
  };

};

// Creating a function to render the shapes:
const renderShape = (type, text, textColor, shapeColor, bgColor, ...args) => {
  const shape = shapeFactory(type, text, textColor, shapeColor, bgColor, ...args);
  return shape.render();
};

renderShape();