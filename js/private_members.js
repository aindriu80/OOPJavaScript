const _radius = new WeakMap();
const _move = new WeakMap();

class Circle {
    constructor(radius) {
        _radius.set(this, radius);

        // Undefined problem..
        // _move.set(this, function () {
        _move.set(this, () => {
            console.log('move', this);
        });
    }

    draw() {
        // console.log(_radius.get(this));
        _move.get(this)();
        console.log('draw');
    }
}

const c = new Circle(1);