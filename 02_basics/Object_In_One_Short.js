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

console.log(object1.hasOwnProperty('property1'));
