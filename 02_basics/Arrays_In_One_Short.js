// Creating an Array using Array Literal

let courses = ['HTML', 'CSS', 'Javascript', 'React']
// console.log(courses);


// Creating an Array using Array Constructor (JavaScript new Keyword)

let courses1 = new Array('HTML', 'CSS', 'Javascript', 'React')
// console.log(courses1);

// Array while declaring
let arr = new Array(3)
arr[0] = 10;
arr[1] = 20;
arr[2] = 30;
// console.log(arr);


// Basic Operations on Javascript Arrays

// 1. Accessing Elements of an Array

// console.log(courses[0]);
// console.log(courses[1]);
// console.log(courses[2]);
// console.log(courses[3]);

// 2. Accessing the First Element of an Array

let firstItem = courses[0]
// console.log("First Item: ", firstItem);


// 3. Accessing the Last Element of an Array

let lastItem = courses[courses.length - 1]
// console.log("Last Item: ", lastItem);


// 4. Modifying the Array Elements
// console.log(courses);

courses[1] = 'Bootstrap'
// console.log(courses);


// 5. Adding Element to the Array

courses.push('Node.js')

courses.unshift('Web Development')
// console.log(courses);


// 6. Removing Element from an Array

// console.log('Original Array: ' + courses);

// Removes and returns the last element
let lastElement = courses.pop()
// console.log('After Removed the last elements: '+ courses);

// Removes and returns the first element
let firstElement = courses.shift()
// console.log('After Removed the First elements: ' + courses);

// Removes 2 elements starting from index 1
courses.splice(1, 2)
// console.log('After Removed 2 elements starting from index 1: ' + courses);