//WeakMap 활용

// function Area(height, width) {
//     this.height = height;
//     this.width = width;
// }


// Area.prototype.getArea = function () {
//     return this.height * this.width;
// }

// let myarea = new Area(10, 20);


const wm = new WeakMap();

function Area(height, width) {
    wm.set(this, { height, width });
}

Area.prototype.getArea = function () {
    const { height, width } = wm.get(this);
    return height * width;
}

let myarea = new Area(10, 20);
console.log(myarea.getArea());
console.log(myarea.height);


myarea = null;

console.log(wm.has(myarea));










