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
// console.log(`Area of square is: ${square.area} sq units.`);

//instance of a rectangle
const rectangle = new Rectangle(20, 30);
// console.log(`Area of rectangle is: ${rectangle.area} sq units.`);

// 2
// Method: Special Property of Object
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
// Constructor Function
function Person(name) {
  this.name = name;

  this.greeting = function () {
    console.log("HI! I'm " + this.name + '.');
  };
}

let person1 = new Person('Bob');

// console.log(person1);
// console.log(person1.name);
// console.log(person1.greeting());

// 4
// Create objects using `create()`
let person2 = Object.create(person1);
person2.name = 'dob';
// console.log(person2.greeting());
// console.log(person2);

//5
// Verify an Object's Constructor with instanceof
// console.log(person2 instanceof Person);

// 6
// Own Properties
function User(name, age, status) {
  this.name = name;
  this.age = age;
  this.status = status;
  this.designation = function () {
    console.log(`Hello! I\'m ${this.name} & work as ${this.status}.`);
  };
}

const user1 = new User('Irene', 27, 'engineer');

// hasOwnProperty()
let myProps = [];
for (let property in user1) {
  if (user1.hasOwnProperty(property)) {
    myProps.push(property);
  }
}

// console.log(myProps);

// 7
// Prototypes
User.prototype = {
  constructor: User,
  phone: '310',

  performance: function () {
    console.log('Excellent');
  },
};

const user2 = new User('Moona', 21, 'Receptionist');

// console.log(user1);
// console.log(User.prototype.isPrototypeOf(user2)); // true
// console.log(User.prototype.isPrototypeOf(user1)); // false
// console.log(user1.hasOwnProperty('phone')); // false
// console.log(user2.hasOwnProperty('phone')); // false

// 8
//INHERITANCE
function Cat(name) {
  this.name = name;
}

Cat.prototype = {
  constructor: Cat,
  //   eat: function () {   //DRY
  //     console.log('nom nom nom');
  //   },
};

function Bear(name) {
  this.name = name;
}

Bear.prototype = {
  constructor: Bear,
  // eat: function () { //DRY
  //   console.log('nom nom nom');
  // },
};

function Animal() {}

Animal.prototype = {
  constructor: Animal,

  eat: function () {
    console.log('nom nom nom');
  },
};
