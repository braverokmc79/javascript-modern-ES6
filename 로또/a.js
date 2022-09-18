const SETTING = {
    name: "LUCKY LOTTO!",
    count: 6,
    maxNumber: 36
}

function getRandomNumber({ count, maxNumber }) {
    console.log(count, maxNumber);
    let mySet = new Set();
    while (true) {
        if (mySet.size === count) break;
        let result = Math.floor(Math.random() * maxNumber) + 1;
        mySet.add(result);
    }

    return mySet;
}


console.log(getRandomNumber(SETTING));