// Dates

const myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toLocaleTimeString());

// console.log(typeof myDate);

// const myCreatedDate = new Date(2023, 0, 23)
// let myCreatedDate = new Date(2023, 0, 23, 6, 30)
// let myCreatedDate = new Date("2023-11-29")
let myCreatedDate = new Date("11-29-2002")

// console.log(myCreatedDate.toDateString());

let myTimeStamp = Date.now()
// console.log(myTimeStamp);
// console.log(myCreatedDate.getDate());
// console.log(Math.floor(Date.now() / 1000));


let newDate = new Date()
// console.log(newDate.getFullYear());
// console.log(newDate.getDate());
// console.log(newDate.getMonth() + 1);


// console.log(`${newDate.getDate()} and time is ${newDate.getTime()}`);


newDate.toLocaleString('default', {
    weekday: "long"
})