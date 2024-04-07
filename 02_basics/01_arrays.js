// Array

const myarr = [1, 2, 3, 4, 5, 6]
const myHeros = ['superman', 'saktimaan', 'marval']

const myarr2 = new Array(1, 2, 3, 4)

// console.log(myarr[0]);


// Array Methods

// myarr.push(7, 8)
// myarr.pop()

// myarr.unshift(10)
// myarr.shift()

// console.log(myarr.includes(6));
// console.log(myarr.indexOf(6));


// const newArr = myarr.join()

// console.log(myarr);
// console.log( newArr);


// slice, splice

console.log("A ", myarr);

const myN1 = myarr.slice(1, 3)

console.log(myN1);
console.log("B ", myarr);

const myN2 = myarr.splice(1, 3)
console.log("C ", myarr);
console.log(myN2);