// singleton 

//object.literals

const mySym = Symbol("key1")

const JsUser = {
    name: "Akshat",
    "full name" : "Akshat Nigam",
    age: 32,
    [mySym]: "mykey1"
}

// console.log(JsUser.name);
// console.log(JsUser["name"]);
// console.log(JsUser["full name"]);
// console.log(JsUser[mySym]); // mykey1
// console.log(JsUser.mySym);  // undefined
// console.log(typeof mySym);  // symbol

JsUser.age  = 4
// console.log(JsUser["age"]);

// Object.freeze(JsUser)
JsUser.age  = 56

// console.log(JsUser);


JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());





























