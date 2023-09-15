// The application must include Triangle, Circle, and Square classes, as well as tests for each of these classes using Jest. While not a requirement, it is recommended that you place any common functionality and properties shared by the Triangle, Circle, and Square classes in a parent Shape class and use inheritance to reuse the code in the child classes.
// Keep itin mind that each shape should get an input for the text, text color and shape color and background color.

// Creating a class for the parent shape:
class Shape { 

  constructor(text, textColor, shapeColor, bgColor) { 

     // Checking to ensure that the Shape class cannot be instantiated directly
    if (new.target === Shape) {
      throw new TypeError("Cannot construct Shape instances directly");
    };

    this.text = text;
    this.textColor = textColor;
    this.shapeColor = shapeColor;
    this.bgColor = bgColor;

  }

  isValidEntry(value, type) {

    switch (type) { 
      case "text":
        return this.isValidText(value);
      case "textColor":
        return this.isValidColor(value);
      case "shapeColor":
        return this.isValidColor(value);
      case "bgColor":
        return this.isValidColor(value);
      default:
        throw new TypeError("Please enter a valid type");
    }

  }

  render() {
    const { text, textColor, shapeColor, bgColor } = this;
    return `
    <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
      <rect width="100%" height="100%" fill="${bgColor}" stroke-width="2" stroke="${shapeColor}"/>
      <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="${textColor}" font-family="Verdana" font-size="25" >${text}</text>
    </svg>
    `;
  }

};


// Each shape class should be tested for a render() method that returns a string for the corresponding SVG file with the given shape color.