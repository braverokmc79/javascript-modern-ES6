function addMark() {
    //let newData = [];

    // for (let i = 0; i < arguments.length; i++) {
    //     newData.push(arguments[i] + "!");
    // }
    //가짜 배열을 from  통해 진째 배열로 만든다.
    let newArray = Array.from(arguments);
    let newData = newArray.map(function (value) {
        return value + "!";
    })
    console.log(newData);
}

addMark(1, 2, 3, 4, 5, 6, 7, 8, 9);