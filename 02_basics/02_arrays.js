const marvelHeros = ['Thor', 'IronMan', 'SpiderMan']
const dcHeros = ['SuperMan', 'Flash', 'BatMan']

// marvelHeros.push(dcHeros)

// console.log(marvelHeros);
// console.log(marvelHeros[3][1])


// const allHeros = marvelHeros.concat(dcHeros)
// console.log(allHeros)


const allNewHeros = [...marvelHeros, ...dcHeros]
// console.log(allNewHeros)


const anotherArr = [1, 2, 3, [4, 5, 6], 7, [8, 9, 10, [11, 12, 13]]]

const useableAnotherArr = anotherArr.flat(Infinity)

console.log(useableAnotherArr)


console.log(Array.isArray("Prabhat"))
console.log(Array.from("Prabhat"))
console.log(Array.from({name: "Prabhat"}))  // Interesting Case

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));

