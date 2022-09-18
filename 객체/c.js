
//Object assign 메서드
//객체 복사
const previousObj = {
    name: "crong",
    lastTime: "11:30"
}

const myHealth = Object.assign({}, previousObj, {
    lastTime: "12:30",
    name: "호녹스",
    age: 99
});

console.log("myHealth is : ", myHealth);
console.log("previousObj === myHealth  :", previousObj === myHealth);


const myHealth2 = Object.assign({}, previousObj, {});
console.log("previousObj === myHealth2 :", previousObj === myHealth2);

