// const map= new Map()
// map.set("I" , "Akshat")
// map.set("II" , "Nigam")
// map.set("III","Akshat")

// console.log(map);

// for(const key in map){
//     console.log(key);
// }

// const myobject = {
//     js :"javaScript",
//     cpp:"c++",
//     rb : "ruby"
// }

// for (const key in myobject){
//     console.log(myobject[key]);
// }

// const arr = [1,3,4,5,6,8,9]
// for (const key of arr){
//     console.log(key);
// }



// for each

// const language = ["hindi", "English", "Marathi"]

// language.forEach( function (item){
//     console.log( item);
// } )

// language.forEach(  (item) =>{
//     console.log( item);
// } )


// function print(item){
//     console.log(item);
// }

// language.forEach(print)


const nums = [1,2,3,4]
// const values  = nums.filter( (item ) => (item>4))

// console.log(values);

// let userBooks = books.filter( (bk) => bk.publish >= 2000)

// const newNums = nums.map((item) => (item+10))
// console.log(newNums);


// chaining // use two or more functions together

const newNums = nums
            .map( (num) => num*10)
            .map( (num) => num+1)
            .filter( (num) => num>40)


console.log(newNums);


//  reduce *******************

const initialValue = 0
const ans = nums.reduce(
    (accumulator , currentValue) => accumulator + currentValue, 0
);

// const name = nums.reduce( () => () , 0)

console.log(ans);


