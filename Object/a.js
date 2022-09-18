const name = "crong";
const age = 33;

const obj = {
    name: name,
    age: age
}
//console.log(obj);



function getObj() {
    let name = "crong";

    const getName = function () {
        return name;
    }

    const setName = function (newname) {
        name = newname;
    }

    const printName = function () {
        console.log(name);
    }

    return {
        getName,
        setName
    }
}
var obj2 = getObj();
console.log(obj2.setName(11));
console.log(obj2.getName());
console.log(obj2.printName);



