const Shape = require('./shape.js');

class Triangle extends Shape {

  constructor(text, textColor, shapeColor, bgColor, base, height) {

    if (typeof base !== 'number' || typeof height !== 'number') {
      throw new TypeError("Please enter a valid number");
    };

    super(text, textColor, shapeColor, bgColor);
    this.base = base;
    this.height = height;

  };

  render() { 

    const { text, textColor, shapeColor, bgColor, base, height } = this;
    return `
    
      <svg width="${base}" height="${height}">
        <polygon points="0,${height} ${base},${height} ${base / 2},0" style="fill:${shapeColor};stroke:${textColor};stroke-width:1" />
        <text x="${base / 2}" y="${height / 2}" fill="${textColor}" text-anchor="middle" alignment-baseline="central" font-size="20" font-family="Verdana">${text}</text>
      </svg>

    `;

  };

};