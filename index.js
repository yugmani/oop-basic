// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;

// Class Declarations
class Rectangle {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }

  //Getter
  get area() {
    return this.calcArea();
  }

  //Method
  calcArea() {
    return this.height * this.width;
  }
}

// instance of a square
const square = new Rectangle(20, 20);
console.log(`Area of square is: ${square.area} sq units.`);

//instance of a rectangle
const rectangle = new Rectangle(20, 30);
console.log(`Area of rectangle is: ${rectangle.area} sq units.`);
