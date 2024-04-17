function sayMyName() {
    console.log("P");
    console.log("R");
    console.log("A");
    console.log("B");
    console.log("H");
    console.log("A");
    console.log("T");
}

// sayMyName()

// function addTwoNums(num1, num2) {
//     console.log(num1 + num2)
// }


function addTwoNums(num1, num2) {
    
    // let result = num1 + num2
    // return result;
       return num1 + num2
}


const result = addTwoNums(7, 8)
// console.log("Result: ", result);


function logInUserMessage(username) {
    if (!username) {
        console.log("Please enter a userName");
        return
    }
    return `${username} just logged In`
}

// console.log(logInUserMessage("Prabhat"))
// console.log(logInUserMessage())


function calculateCartPrice(val1, val2, ...num1) {
    return num1
}

// console.log(calculateCartPrice(200, 400, 500, 2000))

const user = {
    username: "Vaishali",
    price: 299
}

function handleObject(anyobject) {
    console.log(`UserName is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)
handleObject({
    username: "prabhat",
    price: 499
})


const myNewArray = [200, 400, 100, 500]

function returnSecondValue(getArray) {
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 300, 600]));