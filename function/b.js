// //this context of Arrow function
// const myObj = {
//     runTimeout() {
//         setTimeout(function () {
//             console.log(this === window);
//             this.printData();
//         }, 200);
//     },

//     printData() {
//         console.log("hi Codeequal");
//     }
// }

// myObj.runTimeout();

//this context of Arrow function
const myObj = {
    runTimeout() {
        setTimeout(() => {
            console.log(this === window);
            this.printData();
        }, 200);
    },

    printData() {
        console.log("hi Codeequal");
    }
}

myObj.runTimeout();