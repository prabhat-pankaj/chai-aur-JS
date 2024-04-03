// let score = "50" 
// let score = "50abs" // NaN
// let score = null  // 0
// let score = undefined // NaN
// let score = true  // 1
// let score = false  // 0
let score = "prabhat" //NaN

// console.log(typeof score);
// console.log(typeof(score));

let valueInNumber = Number(score)
// console.log(valueInNumber);


// "33" => 33
// "33abc" => NaN
// true => 1;  false => 0


// let isLoggedIn = 1  // true
// let isLoggedIn = ""   // false
// let isLoggedIn = " " // true
// let isLoggedIn = "prabhat" // true

// let booleanIsLoggedIn = Boolean(isLoggedIn)
// console.log(booleanIsLoggedIn);

// 1 => true;  0 => false
// "" => false;  " " => true
// "Prabhat" => true


let someNumber = 33

let stringNumber = String(someNumber)
// console.log(stringNumber);
// console.log(typeof stringNumber);


// Two types of type conversion ---
// 1. Implicit Conversion - automatic type conversion
// 2. Explicit Conversion - manual type conversion

// Example 1: Implicit Conversion to String

let result;

result = '3' + 2
// console.log(result);  // 32

result = '3' + true
// console.log(result);  // 3true

result = '3' + null
// console.log(result);  // 3null

result = '3' + undefined
// console.log(result);  // 3undefined

/* Note: When a number is added to a string, 
JavaScript converts the number to a string before concatenation.
*/


// Example 2: Implicit Conversion to Number
// numeric string used with - , / , * results number type

let num;

num = '4' - '2'
// console.log(num); // 2

num = '4' - 2
// console.log(num);  // 2

num = '8' / '2'
// console.log(num);  // 4

num = '4' * '2'
// console.log(num);  // 8


// Example 3: Non-numeric String Results to NaN
// non-numeric string used with - , / , * results to NaN

let nonNumericStr;

nonNumericStr = 'mayank' - 'rahul'
// console.log(nonNumericStr);  // NaN

nonNumericStr = 4 - 'rahul'
// console.log(nonNumericStr);  // NaN

nonNumericStr = 'mayank' / 'rahul'
// console.log(nonNumericStr);  // NaN

nonNumericStr = 'mayank' * 'rahul'
// console.log(nonNumericStr);  // NaN



// Example 4: Implicit Boolean Conversion to Number
// if boolean is used, true is 1, false is 0

let booleanConversion;
booleanConversion = '4' - true
// console.log(booleanConversion);  // 3

booleanConversion = 4 + true
// console.log(booleanConversion);  // 5

booleanConversion = 4 - false
// console.log(booleanConversion);  //  4

/*
Note: JavaScript considers 0 as false and all non-zero number as true.
 And, if true is converted to a number, the result is always 1.
*/



// Example 5: null Conversion to Number
// null is 0 when used with number

let nullConversion;
nullConversion = 4 + null
// console.log(nullConversion);  // 4

nullConversion = 4 - null
// console.log(nullConversion);  // 4

nullConversion = 4 * null
// console.log(nullConversion);  // 0

nullConversion = 4 / null
// console.log(nullConversion);  // Infinity


// Example 6: undefined used with number, boolean or null
// Arithmetic operation of undefined with number, boolean or null gives NaN


let undefNum;
undefNum = 4 + undefined
// console.log(undefNum);  // NaN

undefNum = 4 - undefined
// console.log(undefNum);  // NaN

undefNum = 4 / undefined
// console.log(undefNum);  // NaN

undefNum = 4 * undefined
// console.log(undefNum);  // NaN

undefNum = true + undefined
// console.log(undefNum);  // NaN

undefNum = null + undefined
// console.log(undefNum);  // NaN