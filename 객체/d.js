
//Object setPrototypeOf로 객체만들기

const healthObj = {
    showHealth: function () {
        console.log("오늘 운동시간 : " + this.healthTime);
    },

    setHealth: function (newTime) {
        this.healthTime = newTime;
    }
}


// const myHealth = Object.assign(Object.create(healthObj), {
//     name: "crong",
//     lastTim: "11:20"
// });


const newObj = Object.setPrototypeOf({
    name: "crong",
    lastTim: "11:20"
}, healthObj);

console.log("myHealth is", newObj);

