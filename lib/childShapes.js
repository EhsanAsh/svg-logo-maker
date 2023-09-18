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

    const parentRender = super.render();// calling the render method of the parent class
    const { text, textColor, shapeColor, base, height } = this;

    const triangleRender =
      `<svg x="calc(40% + 150px - ${base / 2}px)" y="calc(50% + 100px - ${height / 2}px)" width="${base}" height="${height}">
        <polygon points="0,${height} ${base},${height} ${base / 2},0" style="fill:${shapeColor};stroke:${textColor};stroke-width:1" />
        <text x="${base / 2}" y="${height / 2}" fill="${textColor}" text-anchor="middle" alignment-baseline="central" font-size="${base / 5}" font-family="Verdana" font-weight="bold">${text}</text>
      </svg>
    </svg>`;
    return parentRender.replace("{{CHILD-CONTENT}}", triangleRender); // replacing the {{CHILD-CONTENT}} placeholder with the triangleRender

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

    const parentRender = super.render();// calling the render method of the parent class
    const { text, textColor, shapeColor, radius } = this;

    const circleRender =
      `<svg x="calc(40% + 150px - ${radius}px)" y="calc(50% + 100px - ${radius}px)"  width="${radius*2}" height="${radius*2}">
        <circle cx="${radius}" cy="${radius}" r="${radius}" stroke="${textColor}" stroke-width="1" fill="${shapeColor}" />
        <text x="${radius}" y="${radius}" fill="${textColor}" text-anchor="middle" alignment-baseline="central" font-size="${radius/2}" font-family="Verdana" font-weight="bold">${text}</text>
      </svg>
    </svg>`;
    return parentRender.replace("{{CHILD-CONTENT}}", circleRender); // replacing the {{CHILD-CONTENT}} placeholder with the circleRender

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

    const parentRender = super.render();// calling the render method of the parent class
    const { text, textColor, shapeColor, side } = this;

    const squareRender =
      `<svg x="calc(40% + 150px - ${side / 2}px)" y="calc(50% + 100px - ${side / 2}px)" width="${side}" height="${side}">
        <rect width="${side}" height="${side}" style="fill:${shapeColor};stroke:${textColor};stroke-width:1" />
        <text x="${side / 2}" y="${side / 2}" fill="${textColor}" text-anchor="middle" alignment-baseline="central" font-size="${side / 4}" font-family="Verdana" font-weight="bold">${text}</text>
      </svg>
    </svg>`;
    return parentRender.replace("{{CHILD-CONTENT}}", squareRender); // replacing the {{CHILD-CONTENT}} placeholder with the squareRender

  };

};

module.exports = { Triangle, Circle, Square }; // Exporting the Triangle, Circle, and Square classes