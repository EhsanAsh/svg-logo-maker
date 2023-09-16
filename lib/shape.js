// The application must include Triangle, Circle, and Square classes, as well as tests for each of these classes using Jest. While not a requirement, it is recommended that you place any common functionality and properties shared by the Triangle, Circle, and Square classes in a parent Shape class and use inheritance to reuse the code in the child classes.
// Keep itin mind that each shape should get an input for the text, text color and shape color and background color.

// Creating a class for the parent shape:
class Shape { 

  constructor(text, textColor, shapeColor, bgColor) { 

     // Checking to ensure that the Shape class cannot be instantiated directly
    // if (new.target === Shape) {
    //   throw new TypeError("Cannot construct Shape instances directly");
    // };

    // Checking to ensure that the entry is valid:

    if (!this.isValidEntry(text, "text")) {
      throw new TypeError("Please enter a string with exactly 3 characters");
    };

    if (!this.isValidEntry(textColor, "textColor")) {
      throw new TypeError("Please enter a valid text color");
    };

    if (!this.isValidEntry(shapeColor, "shapeColor")) {
      throw new TypeError("Please enter a valid shape color");
    };

    if (!this.isValidEntry(bgColor, "bgColor")) {
      throw new TypeError("Please enter a valid background color");
    };

    this.text = text;
    this.textColor = textColor;
    this.shapeColor = shapeColor;
    this.bgColor = bgColor;

  };

  // Creating a method to check if the entry is valid:
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

  };

  // Creating a method to check if the color is valid:
  isValidColor(color) { 

    const validColors = ["red", "green", "blue", "yellow", "black", "white", "magneta", "cyan", "gray", "orange", "pink", "purple", "brown", "silver", "gold", "maroon", "olive", "lime", "teal", "navy", "aqua", "fuchsia", "indigo", "violet", "turquoise", "tan", "salmon", "plum", "orchid", "khaki", "ivory", "coral", "crimson", "chocolate", "chartreuse", "beige", "azure", "aquamarine", "lavender", "linen", "peru", "tomato", "wheat", "thistle", "snow", "seashell", "powderblue", "papayawhip", "palegreen", "palegoldenrod"];
  
    // Used(https://stackoverflow.com/questions/12385500/regex-pattern-for-rgb-rgba-hsl-hsla-color-coding) as a reference for the regex patterns.
    const hexPattern = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/;
    const rgbPattern = /^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/;
    const rgbaPattern = /^rgba\((\d+),\s*(\d+),\s*(\d+),\s*([\d\.]+)\)$/;
    const hslPattern = /^hsl\(\d{1,3},\s*\d{1,3}%,\s*\d{1,3}%\)$/;
    const hslaPattern = /^hsla\(\d{1,3},\s*\d{1,3}%,\s*\d{1,3}%,\s*([\d\.]+)\)$/;

    if (typeof color !== "string" || color === undefined) {
      throw new TypeError("Please enter a string");
    };
    
    return validColors.includes(color) || hexPattern.test(color) || rgbPattern.test(color) || rgbaPattern.test(color) || hslPattern.test(color) || hslaPattern.test(color);

  };

  // Creating a method to check if the text is valid:
  isValidText(text) { 
      
      if (typeof text !== "string" || text === undefined) {
        throw new TypeError("Please enter a string");
      };
  
      return text.length === 3;
  
  };

  render() {
    const { text, textColor, shapeColor, bgColor } = this;
    return `
    <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
      <rect width="100%" height="100%" fill="${bgColor}" stroke-width="2" stroke="${shapeColor}"/>
      <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="${textColor}" font-family="Verdana" font-size="25" >${text}</text>
    </svg>
    `;
  };

};

module.exports = Shape; // Exporting the Shape class