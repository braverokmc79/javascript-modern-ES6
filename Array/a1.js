var data = [1, 2, undefined, NaN, null, ""];
for (var i = 0; i < data.length; i++) {
    console.log(data[i]);
}

data.forEach(function (value) {
    console.log(value);
});

//object 사용, array 에서는 사용하지 않는다.
//문제점 for in 을 사용시 자신가지고 있지 않는 상위 객체 까지 출력
//Array.protoype.getIndex =function(){};
for (let idx in data) {
    console.log(data[idx]);
}

console.log("배열 출력 for of :");
for (let value of data) {
    console.log(value);
}

console.log("str for of==> 문자열도 문자 단위로 출력 가능");
var str = "hello world !!!";
for (let value of str) {
    console.log(value);
}





