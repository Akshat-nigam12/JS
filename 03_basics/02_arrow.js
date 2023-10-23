const user = {

    userName : "Akshat",

    welcomeMessage: function() {
        console.log(`${this.userName}, Welcome to this show`);
        console.log(this);
    }
}


// user.welcomeMessage()
// user.userName = "Kajal"
// user.welcomeMessage()

// console.log(this);


// const addTwoEle =  (num1, num2) => {
//     return num1+num2
// }

// or

const addTwoEle =  (num1, num2) => num1+num2


console.log(addTwoEle(5,10));