//ES2015 string 에 새로운 메서들.

let str = "hello world ! ^^ ~~";
let matchstr = "^ ~~";

console.log(str.startsWith(matchstr));
console.log(str.endsWith(matchstr));
console.log("includes  test :", str.includes("world"));