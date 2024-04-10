// Javascript code demonstrating a simple object
let school = {
    name: 'Vivekananda School',
    location: 'Delhi',
    established: '1871',
    displayInfo: function () {
        console.log(`${school.name} was established in ${school.established} at ${school.location}`);
    }
}

// school.displayInfo()


// Javascript Object Properties

let mySchool;
 mySchool = {
    name: 'Vivekananda School',
    location: 'Delhi',
    established: '1971',
    20: 1000,
    displayInfo: function () {
        console.log(`The value of the key 20 is ${mySchool['20']}`)
    }
}
// mySchool.displayInfo()

mySchool = {
    name: 'Vivekananda School',
    displayInfo: function () {
        console.log(`${mySchool.name.split(' ')[0]}`)
    }
}
// mySchool.displayInfo()


// hasOwnProperty code in js
const object1 = new Object();
object1.property1 = 42;

// console.log(object1.hasOwnProperty('property1'));



// Accessing object members
mySchool = {
    name: 'Vivekanada',
    location: 'Delhi',
    established: 1971,
    20 : 1000,
    displayInfo: function() {
        console.log(`${school.name} was established in ${school.established} at ${school.location}`)
    }
}
// console.log(mySchool.name)

// console.log(mySchool.established);



// Bracket Notation
mySchool = {
    name: 'Vivekanada School',
    location: 'Delhi',
    established: 1995,
    20: 1000,
    displayInfo: function() {
        document.write(`${school.name} was established in ${school.established} at ${school.location}`)
    }
}

// console.log(mySchool['name']);

// console.log(mySchool['20']);



let person = {
    gender: 'male'
}

let person1 = Object.create(person)
person1.name = 'Prabaht'
person1.age = 21
person1.nationality = 'Indian'

for (let key in person1) {
    // console.log(key);
}


// Deleting Properties 
// let obj1 = {
//     propFirst : 'Name'
// }

// console.log(obj1.propFirst);
// delete obj1.propFirst

// console.log(obj1.propFirst);



// we can not delete inherited properties or non-configurable properties

let obj1 = {
    propfirst: 'Name'
}
console.log(obj1.propfirst);  // Name
let obj2 = Object.create(obj1)

console.log(obj2.propfirst);  // Name

console.log(delete obj2.propfirst);  // true
    // Surprisingly Note that this will return true 
    // regardless of whether the deletion was successful
    console.log(obj2.propfirst);  // Name