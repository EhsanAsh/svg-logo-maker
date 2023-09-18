// Creating a test file to test the shapeFactory function ==>

const shapeFactory = require("../index.js").shapeFactory;
const Triangle = require("./childShapes.js").Triangle;
const Circle = require("./childShapes.js").Circle;
const Square = require("./childShapes.js").Square;

describe("shapeFactory", () => {

  it("should return an instance of the Triangle class", () => {
    const triangle = shapeFactory("triangle", "ASH", "red", "green", "blue", { base: 10, height: 10 });
    expect(triangle).toBeInstanceOf(Triangle);
  });

  it("should return an instance of the Circle class", () => {
    const circle = shapeFactory("circle", "ASH", "red", "green", "blue", { radius: 10 });
    expect(circle).toBeInstanceOf(Circle);
  });

  it("should return an instance of the Square class", () => { 
    const square = shapeFactory("square", "ASH", "red", "green", "blue", { side: 10 });
    expect(square).toBeInstanceOf(Square);
  });

  it("should throw an error if the type is not valid", () => {
    expect(() => shapeFactory("pentagon", "ASH", "red", "green", "blue", {})).toThrow("Please enter a valid type");
  });

});
