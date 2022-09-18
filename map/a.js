// map & WeakMap
// 1) Array -> Set, weakset
// 2) Object -> map, weakmap

//map 은 key/value

let wm = new WeakMap();
let myfun = function () { };

//이 함수가 얼마나 실행될지를 알려고 할때.

wm.set(myfun, 0);
//console.log(wm);

let count = 0;
for (let i = 0; i < 10; i++) {
    count = wm.get(myfun); //get value
    count++;
    wm.set(myfun, count);
}

//myfun 함수가 키값
console.log(wm);
console.log(wm.get(myfun));
myfun = null;
console.log(wm.has(myfun));





