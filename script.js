// // let usersArr = [{
// //     name: "Rusty",
// //          year: 2005,
// //          place_of_residence: "State Arizona, Surprise",
// //          place_of_work: "Pilot"
// // },

// // {
// //          name: "Rusty",
// //          year: 2005,
// //          place_of_residence: "State Arizona, Surprise",
// //          place_of_work: "Pilot"
// // },

// // {
// //          name: "Rusty",
// //          year: 2005,
// //          place_of_residence: "State Arizona, Surprise",
// //          place_of_work: "Pilot"
// // },
// // ]

// // console.log(usersArr);
// // console.log(userArr[0]);
// // console.log(usersArr[1],type);
// // console.log(usersArr[2]);

// // let matrix = [
// //     [1,2,3],
// //     [4,5,6],
// //     [7,8,9]

// // ];
// // console.log(matrix)
// // console.log(matrix[0][1])

// // let arrOne = ["Ваня", "Ivan", "Olya"];

// // // console.log(arrOne)
// // // console.log(arrOne.length);

// // // let arrNew = arrOne
// // // arrNew.length = 2;

// // // console.log(arrOne)

// // // let arr = ["Ваня", "Никита", "Olya"]
// // // arr[0] = "Коля"
// // // console.log(arr)

// // // arr[3] = "Ваня"
// // // console.log(arr)

// // arr.push("Вася")
// // console.log(arr)

// // arr.push("Дима", "Katya")
// // console.log(arr)

// // let arr = ["Ваня", "Никита", "Olya"]
// // arr.shift();
// // console.log(arr)



// //  let arrOne = ["Ваня", "Никита", "Olya"]
 
// //  console.log(arr)

// //  delete arr[2]
// //  console.log(arr)
// //  console.log(arr[1])
// //  console.log(arr.length)
 
// // let arrTwo = arrOne.slice(1, 2);
// // console.log(arrTwo)

// // let arrThree = arrOne.slice(-2,-1)
// // console.log(arrThree)

// // let arrFour = arrOne.slice()
// // console.log(arrFour)

// // let arrOne = ["Ваня", "Ivan","Olya"]
// // let arrTwo = arrOne.concat("Petya")
// // console.log(arrTwo)

// // let arr = ["Ваня", "Ivan","Olya"]

// // console.log(arr.indexOf("Ivan"))
// // console.log(arr.indexOf("Вася"))
// // console.log(arr.indexOf("Ivan", 2))

// // console.log(arr.includes("Ivan"))
// // console.log(arr.includes("Вася"))
// // console.log(arr.includes("Ivan", 2))

// //  let usersArr = [{
// //      name: "James",
// //      year: 1999,
// //     place_of_residence: "State Arizona, Yuma",
// //     place_of_work: "Special Forces"
// // },
// // {
// //      name: "Nikson",
// //      year: 1998,
// //      place_of_residence: "State Arizona, Tucson",
// //      place_of_work: "unemployed"
// //  },
// //  {
// //      name: "Simon",     year: 2000,
// //     place_of_residence: "State Arizona, Saint-Rose",
// //      place_of_work: "Medic"
// //  }]

// // //  let resultOne = usersArr.find(function(item, index, array) {
// // //     return item.year === 1998;
// // //  });
// // //  console.log(resultOne)

// //  let resultOne = usersArr.find(function(item => item.year == 1998)

// //  console.log(resultOne);

// //  let arrTwo = [8,22,1];

// //  console.log(arrTwo.sort());

// //  function conspareNumeric(a,b) {
// //     console.log(`Сравниваем" ${a} и ${b}`);
// //         if (a > b) return 1;
// //         if (a == b) return 0;
// //         if (a < b) return -1;
// //         return a - b
// //  }
// // console.log(arrTwo.sort((a,b) => a - b));
// // console.log(arrTwo.sort(conspareNumeric))
// // console.log("8" > "22")

// // let obj = {}
// // let arr = []

// // console.log(typeof obj)
// // console.log(typeof arr)

// // if (Array.isArray(arr)) {
// //     console.log("it's massive"); }
// // else {
// //     console.log("its not massive")
// // }

// let arr = ["Maksim", "Roger", "Olya"]
// console.log(arr.length);

// for(let i = 0; i < arr.length;i++) {
//     console.log(arr[i]);
// }

// for (let arrItem of arr) {
//     console.log(arrItem)
// }

// let arr = ["Maksim", "Roger", "Olya"]

// arr.forEach(function (item, index, array) {
//     console.log (`${item} находится  на ${index} позиции в ${array}`)
// });

// let arrOne = [1, 2, 3, 4];
// let reduceValueOne = arrOne.reduce(function(previosValue, item, index, array) {
//     return item + previosValue;
// }, 0);
// console.log(reduceValueOne)

// let arrTwo = ["Maksim", "Roger", "Olya"]
// let reduceValueTwo = arrTwo.reduce(function(previosValue, item, index, array){
//     console.log(previosValue);
//     console.log(item);
//     return `${item}, ${previosValue}`;

// },0);
// console.log(`Пользователи: ${reduceValueTwo}`)

function getSumm() {
let numOne, numTwo;

function getNumOne () {
    numOne = 1;

}
function getNumTwo () {
    numTwo = 2;
}
getNumOne();
getNumTwo();

let numSumm = numOne + numTwo;
console.log(numSumm)
}