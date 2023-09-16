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

    const { text, textColor, shapeColor, base, height } = this;

    return `
      <svg width="${base}" height="${height}">
        <polygon points="0,${height} ${base},${height} ${base / 2},0" style="fill:${shapeColor};stroke:${textColor};stroke-width:1" />
        <text x="${base / 2}" y="${height / 2}" fill="${textColor}" text-anchor="middle" alignment-baseline="central" font-size="20" font-family="Verdana">${text}</text>
      </svg>
    `;

  };

};

class Circle extends Shape { 

  constructor(text, textColor, shapeColor, bgColor, radius) {

    if (typeof radius !== 'number' || radius === undefined || radius <= 0 ) {
      throw new TypeError("Please enter a valid radius");
    };

    super(text, textColor, shapeColor, bgColor);
    this.radius = radius;

  };

  render() { 

    const { text, textColor, shapeColor, radius } = this;

    return `
      <svg width="${radius * 2}" height="${radius * 2}">
        <circle cx="${radius}" cy="${radius}" r="${radius}" stroke="${textColor}" stroke-width="1" fill="${shapeColor}" />
        <text x="${radius}" y="${radius}" fill="${textColor}" text-anchor="middle" alignment-baseline="central" font-size="20" font-family="Verdana">${text}</text>
      </svg>
    `;

  };

};

class Square extends Shape { 

  constructor(text, textColor, shapeColor, bgColor, side) { 

    if (typeof side !== 'number' || side === undefined || side <= 0) {
      throw new TypeError("Please enter a valid side");
    };

    super(text, textColor, shapeColor, bgColor);
    this.side = side;

  };

  render() { 

    const { text, textColor, shapeColor, side } = this;
    
    return `
    <svg width="${side}" height="${side}">
      <rect width="${side}" height="${side}" style="fill:${shapeColor};stroke:${textColor};stroke-width:1" />
      <text x="${side / 2}" y="${side / 2}" fill="${textColor}" text-anchor="middle" alignment-baseline="central" font-size="20" font-family="Verdana">${text}</text>
    </svg>
    `;

  };

};