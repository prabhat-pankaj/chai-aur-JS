// for

for (let i = 0; i < 10; i++) {
    const element = i
    if (element === 5) {
       // console.log("5 is best num");
    }
   // console.log(element);
    
}


for (let i = 1; i <= 10; i++) {
    //console.log(`Outer Loop Value: ${i}`);
    for (let p = 1; p < 12; p++) {
    //   console.log(`Inner Loop Value: ${p} And Inner Loop ${i}`);  
   // console.log(i + '*' + p + '= ' + i*p );
    }
}

let myArr = ["Flash", "Batman", "Superma"]
//console.log(myArr.length);
for (let index = 0; index < myArr.length; index++) {
    const element = myArr[index];
   // console.log(element);
}



// break and continue 

// for (let i = 1; i <= 20; i++) {
//     if (i == 5) {
//         console.log('5 is Detected');
//         break
//     }
//     console.log(`The Value of I Is: ${i}`);
    
// }


for (let i = 1; i <= 20; i++) {
    if (i == 5) {
        console.log('5 is Detected');
       continue
    }
    console.log(`The Value of I Is: ${i}`);
    
}