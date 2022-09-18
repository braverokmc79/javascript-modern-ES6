//arrow function

setTimeout(() => {
    console.log("setTimeout arrow");
}, 1000);

// let newArr = [1, 2, 3, 4, 5, 6].map((v) => {
//     return v * 2;
// });

let newArr = [1, 2, 3, 4, 5, 6].map((v) => v * 2);


console.log(newArr);