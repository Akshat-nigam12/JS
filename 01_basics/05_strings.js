const name = "Akshat"
const age = 34

// console.log(`My Name is ${name} and my age is ${age}`);

const newname = new String("hello")
// console.log(newname);
// console.log(newname[1]);
// console.log(newname.__proto__);
// console.log(newname.charAt(4)); //gives the char at index 4
// console.log(newname.indexOf('o'));  // gives the index of char 

const anotherstring  = newname.slice(-5,4)
// console.log(anotherstring);

const newstr = "            akshat        "
console.log(newstr);
console.log(newstr.trim());
console.log(newstr.trimStart());
console.log(newstr.trimEnd());

const url = "https://akshatnigam2020@gmail.com"
console.log(url);

const n = "hello-how-are-you"
console.log(n.split('-'))