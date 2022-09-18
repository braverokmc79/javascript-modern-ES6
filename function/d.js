//reset parameter

function checkNum() {
    const agrArray = Array.prototype.slice.call(arguments);
    console.log(agrArray);
    console.log(toString.call(agrArray));
    const result = agrArray.every((v) => typeof v === "number");
    console.log("result : ", result);
}


//const result = checkNum(10, 2, 3, 5, 6, "555");

// ...agrArray 스프레이드 배열 매개변수가 다음과 같은 역할을 한다.
//  const agrArray = Array.prototype.slice.call(arguments);

function checkNum2(...agrArray) {
    console.log("arguments   : ", arguments);
    console.log(toString.call(agrArray));
    const result = agrArray.every((v) => typeof v === "number");
    console.log("result : ", result);
    // agrArray.map(arg => console.log(arg));
}


const result2 = checkNum2(10, 2, 3, 5, 6, "555", false);