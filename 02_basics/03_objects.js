// singleton 

//object.literals

// const mySym = Symbol("key1")

// const JsUser = {
//     name: "Akshat",
//     "full name" : "Akshat Nigam",
//     age: 32,
//     [mySym]: "mykey1"
// }

// console.log(JsUser.name);
// console.log(JsUser["name"]);
// console.log(JsUser["full name"]);
// console.log(JsUser[mySym]); // mykey1
// console.log(JsUser.mySym);  // undefined
// console.log(typeof mySym);  // symbol

// JsUser.age  = 4
// console.log(JsUser["age"]);

// Object.freeze(JsUser)
// JsUser.age  = 56

// console.log(JsUser);


// JsUser.greeting = function(){
//     console.log("Hello JS user");
// }
// JsUser.greetingTwo = function(){
//     console.log(`Hello JS user, ${this.name}`);
// }

// console.log(JsUser.greeting());
// console.log(JsUser.greetingTwo());

// ways to create objects
const tinderUser = new Object() //singolton object
       //or
const tinUser = {}   // non singolton object
// 
// console.log(tinderUser);
// console.log(tinUser);

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Akshat",
            lastname: "Nigam"
        }
    }
}

// console.log(regularUser.fullname.userfullname);



const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj3 = {5: "a", 6: "b"}

// const obj3 = { obj1, obj2 }
const obj4 = Object.assign({}, obj1, obj2, obj3)  // {} will act as a target and if we will not use it then all value will go in obj1
console.log(obj4);
console.log(obj1);

// const obj4 = {...obj1, ...obj2, ...obj3}
// console.log(obj4);

const {email} = regularUser

console.log(email);
console.log(regularUser["email"]);
console.log(regularUser.email);


// {
//     "" : "",
//     "" : ""
// }   //json
// API











