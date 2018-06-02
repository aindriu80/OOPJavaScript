// Method Overriding

function Shape(color) {
  this.color = color;
}

Shape.prototype.duplicate = function () {
  console.log('duplicate');
}

function extend(Child, Parent) {
  Child.prototype = Object.create(Parent.prototype);
  Child.prototype.constructor = Circle;

}

function Circle(radius, color) {
  Shape.call(this, color);

  this.radius = radius;
}

extend(Circle, Shape);

Circle.prototype.duplicate = function () {
  Shape.prototype.duplicate.call(this);

  console.log('duplicate circle');
}

Circle.prototype.draw = function () {
  console.log('draw');
}


function Square(size) {
  this.size = size;
}

extend(Square, Shape);

const s = new Shape();
const c = new Circle(1, 'red');

// Polymorphism

function Circle1() {

}

extend(Circle1, Shape);

Circle.prototype.duplicate = function () {
  console.log('duplicate circle');
}

function Square() {

}

extend(Square, Shape);

Square.prototype.duplicate = function () {
  console.log('duplicate square');
}

const shapes = [
  new Circle(),
  new Square()
];

for (let shape of shapes)
  shape.duplicate();