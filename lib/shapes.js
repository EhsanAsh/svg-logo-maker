// The application must include Triangle, Circle, and Square classes, as well as tests for each of these classes using Jest. While not a requirement, it is recommended that you place any common functionality and properties shared by the Triangle, Circle, and Square classes in a parent Shape class and use inheritance to reuse the code in the child classes.
// Keep itin mind that each shape should get an input for the text, text color and shape color and background color.
// first create a class for the parent shape:

class Shape { 
  constructor(text, textColor, shapeColor, bgColor) { 
    this.text = text;
    this.textColor = textColor;
    this.shapeColor = shapeColor;
    this.bgColor = bgColor;
  }

  render() {
    const { text, textColor, shapeColor, bgColor } = this;
    return `
    <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
      <rect width="100%" height="100%" style="fill:${bgColor};stroke-width:3;stroke:${shapeColor}" />
      <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" style="fill:${textColor}; font: 20px Verdana, Helvetica, Arial, sans-serif;">${text}</text>
    </svg>
    `;
  }
  
};


// Each shape class should be tested for a render() method that returns a string for the corresponding SVG file with the given shape color.