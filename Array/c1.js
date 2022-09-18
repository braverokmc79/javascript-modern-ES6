let pre = [100, 200, "hello", null];
let newData = [0, 1, 2, 3, ...pre, 4];
console.log(newData);


function sum(a, b, c) {
    return a + b + c;
}
let pre2 = [100, 200, 300];

console.log("전개 연산자 이전 apply 사용 : ", sum.apply(null, pre2));

console.log("전개 연산자 :", sum(...pre2));