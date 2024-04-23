const user ={
    username: 'prabhat',
    price: 199,

    welcomeMessage: function() {
        console.log(`${this.username}, welcome to website`);
        console.log(this);
    }
}

// user.welcomeMessage()
// user.username = 'sam'
// user.welcomeMessage()

// console.log(this);



// function chai() {
//     let username = "Prabhat"
//     console.log(this.username);
// }
// chai()



// const chai = function () {
//     let username = "Prabhat"
//     console.log(this.username);
// }


const chai =  () => {
    let username = "Prabhat"
    console.log(this);
}

// chai()


// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) => num1 + num2

// const addTwo = (num1, num2) => (num1 + num2)

const addTwo = (num1, num2) => ({username: "Prabhat"})


console.log(addTwo(10, 20))