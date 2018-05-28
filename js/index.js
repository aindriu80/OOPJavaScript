// Factory function
function createCircle(radius) {
    return {
        radius,
        draw: function () {
            console.log('draw');
        }
    };
}


const circle = createCircle(1);

// define constructor function
function Circle(radius) {
    // console.log('this', this);
    this.radius = radius;
    this.draw = function () {
        console.log('draw');
    }
}

const Circle1 = new Function('radius', `
this.radius = radius;
this.draw = function () {
    console.log('draw');
}
`);

Circle.call({}, 1);
Circle.apply({}, [1, 2, 3]);

const circle1 = new Circle1(1);
const another = new Circle(1);