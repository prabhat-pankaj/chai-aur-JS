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
console.log(logInUserMessage())
