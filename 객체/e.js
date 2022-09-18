
//Object setPrototypeOf 로 객체간 prototype chain생성하기

const healthObj = {
    showHealth: function () {
        console.log("오늘 운동시간 : " + this.healthTime);
    },

    setHealth: function (newTime) {
        this.healthTime = newTime;
    }
}


//child obj
const healthChildObj = {
    getAge: function () {
        return this.age;
    }
}

//healthObj  , healthChildObj
Object.setPrototypeOf(healthChildObj, healthObj);


const childObj = Object.setPrototypeOf({
    age: 22
}, healthChildObj);


childObj.setHealth("11:55");
childObj.showHealth();

console.log("childeobj is", childObj);


