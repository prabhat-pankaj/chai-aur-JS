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


// JavaScript Implicit Conversion

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




// JavaScript Explicit Conversion

/* 1. Convert to Number Explicitly
To convert numeric strings and boolean values to numbers, you can use Number() */

let convertNum;
// string to number
result = Number('324')
// console.log(result);  // 324

result = Number('324e-1')
// console.log(result);   // 32.4

// boolean to number
result = Number(true)
// console.log(result);  // 1

result = Number(false)
// console.log(result);  // 0

// empty strings and null values return 0
let empNull;
empNull = Number(null)
// console.log(empNull)  // 0

empNull = Number(' ')
// console.log(empNull)   // 0



// If a string is an invalid number, the result will be NaN.
let invalidStr;
invalidStr = Number("Prabhat")
// console.log(invalidStr)  // NaN

invalidStr = Number(undefined)
// console.log(invalidStr)  // NaN

invalidStr = Number(NaN)
// console.log(invalidStr)  // NaN



/* Note: You can also generate numbers from strings using parseInt(), 
parseFloat(), unary operator + and Math.floor().*/

let parseNum;
parseNum = parseInt('20.01')
// console.log(parseNum);  // 20

parseNum = parseFloat('20.01')
// console.log(parseNum);  // 20.01

parseNum = +'20.01'
// console.log(parseNum);  // 20.01

parseNum = Math.floor('20.01')
// console.log(parseNum);  // 20




/* 2. Convert to String Explicitly
To convert other data types to strings, you can use either String() or toString().*/

// number to string
let numToStr;
numToStr = String(324)
// console.log(numToStr)
// console.log(typeof numToStr)

numToStr = String(2 + 6)
// console.log(numToStr)  // 8
// console.log(typeof numToStr)

// other dataTypes to String
numToStr = String(null)
// console.log(numToStr)
// console.log(typeof numToStr)

numToStr = String(undefined)
// console.log(numToStr)
// console.log(typeof numToStr)

numToStr = String(NaN)
// console.log(numToStr)
// console.log(typeof numToStr)

numToStr = String(true)
// console.log(numToStr)
// console.log(typeof numToStr)

numToStr = String(false)
// console.log(numToStr)
// console.log(typeof numToStr)

// using toString()
numToStr = (324).toString()
// console.log(numToStr)
// console.log(typeof numToStr)

numToStr = true.toString()
// console.log(numToStr)
// console.log(typeof numToStr)

/* Note: String() takes null and undefined and converts them to string.
 However, toString() gives error when null are passed.*/




 /*  3. Convert to Boolean Explicitly
To convert other data types to a boolean, you can use Boolean().
In JavaScript, undefined, null, 0, NaN, '' converts to false. */

let convBoolean;
convBoolean = Boolean('');
// console.log(convBoolean); // false

convBoolean = Boolean(0);
// console.log(convBoolean); // false

convBoolean = Boolean(undefined);
// console.log(convBoolean); // false

convBoolean = Boolean(null);
// console.log(convBoolean); // false

convBoolean = Boolean(NaN);
// console.log(convBoolean); // false



// All other values give true.
convBoolean2 = Boolean(324);
// console.log(convBoolean2); // true

convBoolean2 = Boolean('hello');
// console.log(convBoolean2); // true

convBoolean2 = Boolean(' ');
// console.log(convBoolean2); // true



/*
Value	String Conversion	Number Conversion	Boolean Conversion
1	        "1"	                1	                true
0	        "0"	                0	                false
"1"	        "1"	                1	                true
"0"	         "0"	            0	                true
"ten"	    "ten"	            NaN	                true
true	     "true"	             1	                true
false	       "false"	          0	                false
null	          "null"          0	                false
undefined	     "undefined       NaN	                false
''	                ""	           0	            false
' '	                " "	           0	              true
*/