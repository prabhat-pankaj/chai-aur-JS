function myFunction(g1, g2) {
    return g1 / g2
}
const value = myFunction(10, 2)
// console.log(value);

function addValue(num1, num2) {
        return num1 + num2
    
}
// console.log(addValue(12, 8));


// Function Expression
const square = function (number){
    return number * number
}
const x = square(7)
// console.log(x);



// Arrow Function
const a = ['Hydrogen', 'Helium', 'Lithium', 'Beryllium']

const a2 = a.map(function (s) {
    return s.length
})

// console.log('Normal way ', a2)

const a3 = a.map((s) => s.length)

// console.log('Using Arrow Function ', a3)


function multiply(a, b) {
    b = typeof b !== 'undefined' ? b : 1
    return a * b;
}

// console.log(multiply(69));