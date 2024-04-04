const score = 400
// console.log(score);

const balance = new Number(100)
// console.log(balance);

// console.log(balance.toString().length);
// console.log(balance.toFixed(2));

const otherNumber = 123.6753
// console.log(otherNumber.toPrecision(4));

const hundreds = 1000000
// console.log(hundreds.toLocaleString('en-IN'));


// +++++++++++++++++++++++++++ MATHS ++++++++++++++++++++++++++++++++++++++++

// console.log(Math);
// console.log(Math.abs(-4));
// console.log(Math.round(4.6));
// console.log(Math.ceil(4.2));
// console.log(Math.floor(4.2));
// console.log(Math.min(4, 3, 2, 8, 9));
// console.log(Math.max(4, 3, 2, 6, 8, 9, 10));

// console.log(Math.random());
// console.log((Math.random() * 10) + 1);
// console.log(Math.floor(Math.random() * 10) + 1);

const min = 10
const max = 20

// console.log(Math.floor(Math.random() * (max - min + 1)) + min)



// Exponential notation e to include too large or too small numbers
const a1 = 5e9;
// console.log(a1); //5000000000

const a2 = 5e-5;
// console.log(a2); // 0.00005


// Numbers can also be denoted in hexadecimal notation.

const a = 0xff;
// console.log(a); // 255

const b = 0x00 ;
// console.log(b); // 0

const result = Math.abs(0.2 - 0.3 + 0.1);

// console.log(result);
// Expected output: 2.7755575615628914e-17

// console.log(result < Number.EPSILON);
// Expected output: true


const x = Number.MIN_SAFE_INTEGER - 1;
const y = Number.MIN_SAFE_INTEGER - 2;

// console.log(Number.MIN_SAFE_INTEGER);
// Expected output: -9007199254740991

// console.log(x);
// Expected output: -9007199254740992

// console.log(x === y);
// Expected output: true


const numObj = 123.74784

// console.log(numObj.toExponential()); // 7.71234e+1
// console.log(numObj.toExponential(4)); // 7.7123e+1
// console.log(numObj.toExponential(2)); // 7.71e+1
// console.log((77.1234).toExponential()); // 7.71234e+1
// console.log((77).toExponential()); // 7.7e+1




const numObj2 = 12345.6789;

// console.log(numObj2.toFixed()); // '12346'; rounding, no fractional part
// console.log(numObj2.toFixed(1)); // '12345.7'; it rounds up
// console.log(numObj2.toFixed(6)); // '12345.678900'; additional zeros


let num = 5.123456;

// console.log(num.toPrecision()); // '5.123456'
// console.log(num.toPrecision(5)); // '5.1235'
// console.log(num.toPrecision(2)); // '5.1'
// console.log(num.toPrecision(1)); // '5'

num = 0.000123;

// console.log(num.toPrecision()); // '0.000123'
// console.log(num.toPrecision(5)); // '0.00012300'
// console.log(num.toPrecision(2)); // '0.00012'
// console.log(num.toPrecision(1)); // '0.0001'



const count = 10;
// console.log(count.toString()); // "10"

// console.log((17).toString()); // "17"
// console.log((17.2).toString()); // "17.2"

const p = 6;
// console.log(p.toString(2)); // "110"
// console.log((254).toString(16)); // "fe"
// console.log((-10).toString(2)); // "-1010"
// console.log((-0xff).toString(2)); // "-11111111"