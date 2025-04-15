/*Using ES6 new Syntax & features:
Write a script to create different shapes (rectangle, square, circle) make 
all of them inherits from shape class.


a. each shape contains two functions to calculate its area and its 
parameter.
b. Display the area and each object parameter in your console by 
overriding toString().
c. Make your classes in an external file and import them in a module 
to create objects.*/

class Shape {
  constructor(color) {
    this.color = color;
  }

  discribe() {
    console.log(`this shape color is : ${this.color}`);
  }

  area() {
    throw new Error("Method 'area()' must be implemented.");
  }

  perimeter() {
    throw new Error("Method 'perimeter()' must be implemented.");
  }
}

class Rectangle extends Shape {
  constructor(color, width, height) {
    super(color);
    this.width = width;
    this.height = height;
  }

  area() {
    return this.width * this.height;
  }

  perimeter() {
    return 2 * (this.width + this.height);
  }

  toString() {
    return (
      `Rectangle (color: ${this.color}, width: ${this.width}, height: ${this.height})\n` +
      `Area: ${this.area()}, Perimeter: ${this.perimeter()}`
    );
  }
}

class Circle extends Shape {
  constructor(color, radius) {
    super(color);
    this.radius = radius;
  }

  area() {
    return Math.PI * this.radius ** 2;
  }

  perimeter() {
    return 2 * Math.PI * this.radius;
  }

  toString() {
    return (
      `Circle (color: ${this.color}, radius: ${this.radius})\n` +
      `Area: ${this.area().toFixed(2)}, Perimeter: ${this.perimeter().toFixed(
        2
      )}`
    );
  }
}

class Square extends Shape {
  constructor(color, side) {
    super(color);
    this.side = side;
  }

  area() {
    return this.side * this.side;
  }

  perimeter() {
    return 4 * this.side;
  }

  toString() {
    return (
      `Square (color: ${this.color}, side: ${this.side})\n` +
      `Area: ${this.area()}, Perimeter: ${this.perimeter()}`
    );
  }
}

export { Rectangle, Circle, Square };
