
export default class CodeSquad {
    constructor(props) {
        this.lectures = ['java', "iOS"];
    }

    getLectures() {
        return this.lectures;
    }

    getTime = () => {
        return Date.now();
    }
    getCurrentHour = () => {
        return (new Date).getHours();
    }
}




















