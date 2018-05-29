// Value vs Reference Types.

// Value type
// using let instead of var
let a = 10;
let b = a;

// Two independent variables
// a is 20, b is 10

a = 20;


// Reference type, reference is copied
// x = 20, y = 20
let x = {
    value: 10
};
let y = x;

x.value = 20;

// Primitives are copied by their value
// Objects are copied by their reference



let obj = {
    value: 10
};

function increase(obj) {
    obj.value++;
}

// object is passed by its reference
increase(obj);
console.log(obj);

// Adding or Removing Properties

function Circle(radius) {
    this.radius = radius;
    this.draw = function () {
        console.log('draw');
    }
}

const circle = new Circle(10);

circle.location = {
    x: 1
};

const propertyName = 'center location';
circle.location = {
    x: 1
};

delete circle['location'];

// To enemurate all members use a for loop
for (let key in circle) {
    // use typeof operator to check type of value
    if (typeof circle[key] !== 'function')
        console.log(key, circle[key]);
}

// To get all the keys use Object.keys
const keys = Object.keys(circle);
console.log(keys);

// To check of the existence of a property 
// use the in operator.
if ('radius' in circle)
    console.log('Circle has a radius.');