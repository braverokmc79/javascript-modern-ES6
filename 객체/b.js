//Object assign 메서드.

var healthObj = {

    init: function (name, healthTime) {
        this.name = name;
        this.healthTime = healthTime;
        this.showHelth();
    },
    showHelth: function () {
        console.log("오늘 운동시간  : " + this.healthTime);
    }
}

healthObj.init("홍길동", "12:00");
console.log("-----------------");
console.log("");

const myHealth = Object.create(healthObj);
myHealth.healthTime = "11:20";
myHealth.name = "crong";
console.log(myHealth);

console.log("-----------------");
console.log("");
const myHealth2 = Object.assign(Object.create(healthObj), {
    name: "crong",
    lastTime: "11:30"
});
console.log("Object.assign myHealth2 :", myHealth2);













