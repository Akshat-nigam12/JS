const id1 = Symbol('11')
const id2 = Symbol('11')
// console.table([id1,id2]);
// console.log(id1===id2)

const bigNumber = 32423415323332343434n  //n change it in bigint

//Reference (Non primitive)

//Array , Objects, function

const heros = ["shakti", "naagraj", "doga"];

let myobj = {
    name:"akshat",
    age: 32,
}

// console.log(typeof bigNumber)

//********************************************* */+++++++++++++


let userOne ={
    email: "user@gmail.com",
    age: 34,
}

let userTwo=userOne
// userTwo.email = "user2@gmail.com"
// userTwo.age=2

console.table([userOne.email,userOne.age,userTwo.email,userTwo.age])
