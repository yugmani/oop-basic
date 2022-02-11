// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>Look at the console</h1>`;

// 1
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
// console.log(`Area of rectangle is: ${rectangle.area} sq units.`);

// 2
const person = {
  name: 'Bob Smith',
  interest: ['music', 'dance'],
  greet: function () {
    return `Welcome ${this.name}`;
  },
};

// console.log(person.name);
// console.log(person.interest[0]);
// console.log(person.greet());

// 3 
function Person(name) {
  this.name = name;

  this.greeting = function(){
    alert("HI! I\'m " + this.name + '.')
  }
}

let person1 = new Person('Bob');

// console.log(person1);
// console.log(person1.name);
// console.log(person1.greeting());

