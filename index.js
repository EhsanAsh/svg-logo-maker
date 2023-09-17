// Description: This file is the entry point of the application. It creates a factory function to create the shapes and a function to render the shapes. Then it creates a function to initialize the app. Finally, it calls the init function to initialize the app.

const { readFile, writeFile } = require('fs/promises');
const inquirer = require("inquirer");
const Triangle = require("./lib/childShapes.js").Triangle;
const Circle = require("./lib/childShapes.js").Circle;
const Square = require("./lib/childShapes.js").Square;
// Creating a factory function to create the shapes ==>
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
// Creating a function to render the shapes ==>
const renderShape = (type, text, textColor, shapeColor, bgColor, ...args) => {
  const shape = shapeFactory(type, text, textColor, shapeColor, bgColor, ...args);
  return shape.render();
};

// Creating a function to initialize app:
const init = () => { 

  // calling readFile to asynchronously read the data from data/questions.json:
  readFile("./data/questions.json", "utf-8")
    .then((json) => {

      const data = JSON.parse(json);
      const questions = data.questions;

      // calling inquirer.prompt to asynchronously ask the user questions:
      return inquirer.prompt(questions);

    })
  
    .then((answers) => { 

      const { type, text, textColor, shapeColor, bgColor, ...args } = answers;

      // calling renderShape to render the shape:
      const shape = renderShape(type, text, textColor, shapeColor, bgColor, ...args);

      // calling writeFile to asynchronously write the shape to file:
      return writeFile("./examples/${type}.html", shape);

    });

};

// Calling init to initialize app:
init();