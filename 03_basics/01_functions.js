function CalculatePrice (...num){ // here ... will act as a rest operator, it will combine the values and return it as an array
    return num
}

const arr=CalculatePrice(222,321,34);
for (let index = 0; index < arr.length; index++) {
    console.log(arr[index]);
}


const user = {
    username: "hitesh",
    prices: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)
handleObject({
    username: "sam",
    price: 399
})

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]));