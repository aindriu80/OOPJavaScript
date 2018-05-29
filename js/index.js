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