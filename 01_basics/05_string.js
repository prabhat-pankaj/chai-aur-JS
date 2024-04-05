const name = "Prabhat"
const repoCount = 50

// console.log(name + repoCount + " Value");

// console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('Vaishali-NIFT-com')

// console.log(gameName[0]);
// console.log(gameName.__proto__);


// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(5));
// console.log(gameName.indexOf('i'));

const newString = gameName.substring(0, 4)
// console.log(newString);

const anotherString = gameName.slice(-12, 4)
// console.log(anotherString);

const newStrinOne = "    Prabhat   "
// console.log(newStrinOne);
// console.log(newStrinOne.trim());


const url = "https://hitesh.com/hitesh%20choudhary"

// console.log(url.replace('%20', '-'))

// console.log(url.includes('hitesh'));
// console.log(url.includes('prabhat'));


// console.log(gameName.split('-'));


/*  Create JavaScript Strings
 1. Single quotes: 'Hello'
 2. Double quotes: "Hello"
 3. Backticks: `Hello`

 Example -->
    let name = 'Peter';
    let name1 = "Jack";
    let result = `The names are ${name} and ${name1};`


    You can also write a quote inside another quote.
    let myName = 'My name is "Prabhat".';


    However, the quote should not match the surrounding quote.
    let myName = 'My name is 'Prabhat'.';  ---> This will throws error
*/



/*  Access String Characters ---
    
You can access the characters in a string in two ways.

1. One way is to treat strings as an array.
const a = 'hello'
console.log(a[1])  // "e"

2. Another way is to use the mathod charAt().
conat a1 = 'Hello'
console.log(a1.charAt(0))  // "H"

*/




/*  JavaScript String are immutable

 In JavaScript, string are immutable. That means the characters of a string cannot be changed.\

 let a = "hello"
 a[0] = "H"
 console.log(a); //"hello"

 However, you can assign the variable name to a new string.

let a = "hello"
a = "Hello"
console.log(a)  // "Hello"
*/



/*   JavaScript is Case-Sensitive

Javascript is case-sensitive. That means in JavaScript, the lowercase and uppercase letters are treated as different values.

const a = "x"
const b = "X"
console.log(a === b)  // false

*/




// JavaScript Multiline Strings

// To use a multiline string, you can either use the + operator or the \ operator.

// const message1 = 'This is a long message lines' + 'that spans across multiple lines' + 'in the code.'

// const message2 = 'This is a long message \ that spans across multiple lines \ in the code. '
// console.log(message2);



// javaScript String Lenth 
// const a =  'Hello'
// console.log(a.length)



// JavaScript String Objects
// You can also create string using the (new) keyword.

const obj = 'hello'
const obj2 = new String('Hello')

// console.log(obj);  // 'hello'
// console.log(obj2);  //"Hello"

// console.log(typeof obj);  // "string"
// console.log(typeof obj2);  // "object"



// JavaScript String Methods
const text1 = "hello"
const text2 = "world"
const text3 = "    JavaScript   "

// concatenating two strings
const result1 = text1.concat(' ', text2)
// console.log(result1);

// converting the text to uppercase
const result2 = text1.toUpperCase()
// console.log(result2);

// removing witespace from the string
const result3 = text3.trim()
// console.log(result3)

// converting the string to an array
const result4 = text1.split()
// console.log(result4)

// slicing the string 
const result5 = text1.slice(1, 4)
// console.log(result5)



// JavaScript String() Function
// The String() function is used to convert various data types to strings.

const strFunc = 225  // number
const strFunc2 = true // boolean

// converting to string
const reslt1 = String(strFunc)
const reslt2 = String(strFunc2)

// console.log(reslt1)  // "225"
// console.log(reslt2)  // "true"



// Escape Character
// You can use the backslash escape character (\) to include special characters in a string.

const myName = 'My name is \'Prabhat\'.'
console.log(myName)