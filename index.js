// Description: This file is the entry point of the application. It creates a factory function to create the shapes and a function to render the shapes. Then it creates a function to initialize the app. Finally, it calls the init function to initialize the app.

const { readFile, writeFile } = require('fs/promises');
const inquirer = require("inquirer");
const Triangle = require("./lib/childShapes.js").Triangle;
const Circle = require("./lib/childShapes.js").Circle;
const Square = require("./lib/childShapes.js").Square;
// Creating a factory function to create the shapes ==>
const shapeFactory = (type, text, textColor, shapeColor, bgColor, args) => {

  switch (type) { 
    case "triangle":
      return new Triangle(text, textColor, shapeColor, bgColor, parseFloat(args.base), parseFloat(args.height));
    case "circle":
      return new Circle(text, textColor, shapeColor, bgColor, parseFloat(args.radius));
    case "square":
      return new Square(text, textColor, shapeColor, bgColor, parseFloat(args.side));
    default:
      throw new TypeError("Please enter a valid type");
  };

};
// Creating a function to render the shapes ==>
const renderShape = (type, text, textColor, shapeColor, bgColor, args) => {
  const shape = shapeFactory(type, text, textColor, shapeColor, bgColor, args);
  return shape.render();
};

// Creating a function to initialize app:
const init = () => { 

  console.log(`Welcome to the SVG Logo Creation Tool! 🎨
Ready to create a stunning SVG logo? Let's get started!
Here's how it works:

Text Input:
  You will first be prompted to provide a short text for your logo. This will be displayed
  prominently on your chosen shape.

Text Color:
  Choose a color for the text. You can either provide a standard color name (like 'red', 'blue') or use specific formats like
  HEX (#ff5733), RGB (rgb(255, 87, 51)), etc.

Background Color:
  choose a background color for your logo. This will set the tone for the entire design, so pick something that complements your
  text and shape colors!

Shape Selection:
  Next, decide on the base shape of your logo. You can choose from:
  Triangle 🔺
  Circle ⚫
  Square ◼️

Shape Size:
  Depending on the shape you choose, you'll be prompted to provide the necessary dimensions. For example, if you choose a
  circle, you'll be asked to provide a radius. If you choose a triangle, you'll be asked to provide a height and base.

Shape Color:
  Once you've chosen the shape, you'll be prompted to pick a color for it. Again, standard color
  names or specific formats are both acceptable.

Once you've provided all the necessary inputs, the application will generate a beautiful SVG logo tailored to your preferences.
You can then download and use it as you see fit.
  
Let's dive in! 💼
`);

  // calling readFile to asynchronously read the data from data/questions.json:
  readFile("./data/questions.json", "utf-8")
    .then((json) => {

      const data = JSON.parse(json);
      const questions = data.questions;

      // Adding dynamic logic to the questions, based on the user's answers for shape type. This is done to ensure that the user is only asked relevant questions.
      // Used inquirer's when property to add dynamic logic to the questions.
      const modifiedQuestions = questions.map((question) => { 

        switch (question.name) { 

          case "radius":
            question.when = (answers) => answers.type === "circle";
            question.validate = (input) => !isNaN(parseFloat(input)) && input > 0 || "Please enter a valid radius";
            break;
          case "side":
            question.when = (answers) => answers.type === "square";
            question.validate = (input) => !isNaN(parseFloat(input)) && input > 0 || "Please enter a valid side length";
            break;
          case "height":
          case "base":
            question.when = (answers) => answers.type === "triangle";
            question.validate = (input) => !isNaN(parseFloat(input)) && input > 0 || "Please enter a valid height";
            break;
          default:
            break;

        };
        return question;

      });

      // calling inquirer.prompt to asynchronously ask the user questions:
      return inquirer.prompt(modifiedQuestions);

    })
  
    .then((answers) => { 

      const { type, text, textColor, shapeColor, bgColor, ...args } = answers;

      // calling renderShape to render the shape:
      const shape = renderShape(type, text, textColor, shapeColor, bgColor, args);

      // calling writeFile to asynchronously write the shape to file:
      return writeFile("./examples/logo.svg", shape);

    })
  
    .then(() => console.log("Successfully created shape!"))
  
    .catch((err) => console.log(err));

};

// Calling init to initialize app:
init();