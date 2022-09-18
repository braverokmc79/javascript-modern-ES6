//default parameter

function sum(value, size) {
    size = size || 1;
    return value * size;
}
console.log(sum(3));


function sum2(value, size = 10) {
    return value * size;
}
console.log(sum2(3));


function sum3(value, size = { value: 5 }) {
    return value * size.value;
}
console.log(sum3(5));