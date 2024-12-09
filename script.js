// // // // let usersArr = [{
// // // //     name: "Rusty",
// // // //          year: 2005,
// // // //          place_of_residence: "State Arizona, Surprise",
// // // //          place_of_work: "Pilot"
// // // // },

// // // // {
// // // //          name: "Rusty",
// // // //          year: 2005,
// // // //          place_of_residence: "State Arizona, Surprise",
// // // //          place_of_work: "Pilot"
// // // // },

// // // // {
// // // //          name: "Rusty",
// // // //          year: 2005,
// // // //          place_of_residence: "State Arizona, Surprise",
// // // //          place_of_work: "Pilot"
// // // // },
// // // // ]

// // // // console.log(usersArr);
// // // // console.log(userArr[0]);
// // // // console.log(usersArr[1],type);
// // // // console.log(usersArr[2]);

// // // // let matrix = [
// // // //     [1,2,3],
// // // //     [4,5,6],
// // // //     [7,8,9]

// // // // ];
// // // // console.log(matrix)
// // // // console.log(matrix[0][1])

// // // // let arrOne = ["Ваня", "Ivan", "Olya"];

// // // // // console.log(arrOne)
// // // // // console.log(arrOne.length);

// // // // // let arrNew = arrOne
// // // // // arrNew.length = 2;

// // // // // console.log(arrOne)

// // // // // let arr = ["Ваня", "Никита", "Olya"]
// // // // // arr[0] = "Коля"
// // // // // console.log(arr)

// // // // // arr[3] = "Ваня"
// // // // // console.log(arr)

// // // // arr.push("Вася")
// // // // console.log(arr)

// // // // arr.push("Дима", "Katya")
// // // // console.log(arr)

// // // // let arr = ["Ваня", "Никита", "Olya"]
// // // // arr.shift();
// // // // console.log(arr)



// // // //  let arrOne = ["Ваня", "Никита", "Olya"]
 
// // // //  console.log(arr)

// // // //  delete arr[2]
// // // //  console.log(arr)
// // // //  console.log(arr[1])
// // // //  console.log(arr.length)
 
// // // // let arrTwo = arrOne.slice(1, 2);
// // // // console.log(arrTwo)

// // // // let arrThree = arrOne.slice(-2,-1)
// // // // console.log(arrThree)

// // // // let arrFour = arrOne.slice()
// // // // console.log(arrFour)

// // // // let arrOne = ["Ваня", "Ivan","Olya"]
// // // // let arrTwo = arrOne.concat("Petya")
// // // // console.log(arrTwo)

// // // // let arr = ["Ваня", "Ivan","Olya"]

// // // // console.log(arr.indexOf("Ivan"))
// // // // console.log(arr.indexOf("Вася"))
// // // // console.log(arr.indexOf("Ivan", 2))

// // // // console.log(arr.includes("Ivan"))
// // // // console.log(arr.includes("Вася"))
// // // // console.log(arr.includes("Ivan", 2))

// // // //  let usersArr = [{
// // // //      name: "James",
// // // //      year: 1999,
// // // //     place_of_residence: "State Arizona, Yuma",
// // // //     place_of_work: "Special Forces"
// // // // },
// // // // {
// // // //      name: "Nikson",
// // // //      year: 1998,
// // // //      place_of_residence: "State Arizona, Tucson",
// // // //      place_of_work: "unemployed"
// // // //  },
// // // //  {
// // // //      name: "Simon",     year: 2000,
// // // //     place_of_residence: "State Arizona, Saint-Rose",
// // // //      place_of_work: "Medic"
// // // //  }]

// // // // //  let resultOne = usersArr.find(function(item, index, array) {
// // // // //     return item.year === 1998;
// // // // //  });
// // // // //  console.log(resultOne)

// // // //  let resultOne = usersArr.find(function(item => item.year == 1998)

// // // //  console.log(resultOne);

// // // //  let arrTwo = [8,22,1];

// // // //  console.log(arrTwo.sort());

// // // //  function conspareNumeric(a,b) {
// // // //     console.log(`Сравниваем" ${a} и ${b}`);
// // // //         if (a > b) return 1;
// // // //         if (a == b) return 0;
// // // //         if (a < b) return -1;
// // // //         return a - b
// // // //  }
// // // // console.log(arrTwo.sort((a,b) => a - b));
// // // // console.log(arrTwo.sort(conspareNumeric))
// // // // console.log("8" > "22")

// // // // let obj = {}
// // // // let arr = []

// // // // console.log(typeof obj)
// // // // console.log(typeof arr)

// // // // if (Array.isArray(arr)) {
// // // //     console.log("it's massive"); }
// // // // else {
// // // //     console.log("its not massive")
// // // // }

// // // let arr = ["Maksim", "Roger", "Olya"]
// // // console.log(arr.length);

// // // for(let i = 0; i < arr.length;i++) {
// // //     console.log(arr[i]);
// // // }

// // // for (let arrItem of arr) {
// // //     console.log(arrItem)
// // // }

// // // let arr = ["Maksim", "Roger", "Olya"]

// // // arr.forEach(function (item, index, array) {
// // //     console.log (`${item} находится  на ${index} позиции в ${array}`)
// // // });

// // // let arrOne = [1, 2, 3, 4];
// // // let reduceValueOne = arrOne.reduce(function(previosValue, item, index, array) {
// // //     return item + previosValue;
// // // }, 0);
// // // console.log(reduceValueOne)

// // // let arrTwo = ["Maksim", "Roger", "Olya"]
// // // let reduceValueTwo = arrTwo.reduce(function(previosValue, item, index, array){
// // //     console.log(previosValue);
// // //     console.log(item);
// // //     return `${item}, ${previosValue}`;

// // // },0);
// // // console.log(`Пользователи: ${reduceValueTwo}`)

// // // function getSumm() {
// // // let numOne, numTwo;

// // // function getNumOne () {
// // //     numOne = 1;

// // // }
// // // function getNumTwo () {
// // //     numTwo = 2;
// // // }
// // // getNumOne();
// // // getNumTwo();

// // // let numSumm = numOne + numTwo;
// // // console.log(numSumm)
// // // }

// // // let globalVar = "Я глобальная переменная";
// // // let numOne, numTwo; {

// // // function getOne() {
// // //     numOne = 1;
// // //     console.log(globalVar)
// // // }
// // // function getNumTwo() {
// // //     numTwo = 2
// // // }

// // // getNumOne ();
// // // getNumTwo ();

// // // letNumSumm = numOne + NumTwo;
// // // console.log(globalVar);
// // // }

// // // class Animal {
// // //     static type = "ANIMAL"
// // //     constructor(options) {
// // //         this.name = options.name
// // //         this.age = options.age
// // //         this.hasTail = options.hasTail


// // //     }
// // //     voice() {
// // //         console.log("I'm animal!")
// // //     }
// // // }

// // // const animal = new Animal[{
// // //     name: "Animal",
// // //     age: 5,
// // //     hasTail: true
// // // }]
// // // console.log()

// // // let date1 = new Date("2021-05-17");
// // // console.log(date1);
// // // let date2 = new Date("06/25/2021");
// // // console.log(date2);
// // // let date3 = new Date("November 2, 1999 13:25:00");
// // // console.log(date3);
// // // let date4 = new Date("1999-11-02T13:25:00");
// // // console.log(date4);
// // // let date5 = new Date("2021-05-17");
// // // console.log(date5);

// // // const toda = new Date();
// // // console.log(toda);

// // // Date.now()
// // // const date6 = new Date(2022, 0, 12, 3, 45, 12, 500);
// // // console.log(date6);

// // // console.log("Разница между датами в мл.с", date2-date1);
// // // console.log("Разница между датами в днях", Math.round((date2-date1)/24/60/60/1000));

// // // console.log(Date.parse("11/08.2025"))

// // // const date7 = new Date(1728357351109);
// // // console.log(date7);

// // // let today = new Date();
// // // let yesterday = new Date(today - 24 * 60 * 60 * 1000);
// // // let tomorrow = new Date(today + 24 * 60 * 60 * 1000);
// // // console.log(yesterday, today, tomorrow);

// // let userdata = prompt("Enter your birthday in year-month-day format", "2002-08-14");
// // let birthday = new Date(userdata) == "invalid Date" ?
// // new Date(): new Date (userdata);
// // console.log(birthday);
// // let days = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"]
// // alert("You were born on " + days[birthday.getDay()]);


// // function Student (firstname, lastname, birthday) (
// //     - this.firstname = firstname;
// //     - this.lastname = lastname;
// //     - this.birthday = birthday;

// //     student.prototype.showInfo = function () {
// //         console.log ("student name: " + this.fisrtname + " " + this.lastname");
// //     }
// // )
// // student.prototype.showAge = function(){
// //     const deltaTime = Date.now() - 
// //     Date.parse (this.birthday);
// //     const studentAge = Match.floor(deltaTime/(365*24*60*60*1000));
// //     console.log(this.firstname + "" + this.lastname + " is " + studentAge + " years old.");
// // }

// function Hotel (name, country, rooms, bookedRooms) {
//     this.name = name;
//     this.country = country;
//     this.rooms = rooms;
//     this.bookedRooms = bookedRooms;
//     this.availableRooms = function() {
//         return this.rooms - this.bookedRooms;
//     }
//     this.availablePercent = function() {
//         return Math.floor(this.availableRooms()/
//         this.rooms *100) + "%";
//     }
// }


// let antiqueRomanPalace = new Hotel("Antique Roman Palace",
//     "Turkey", 270, 130),
//     sharmDreamsClub = new Hotel("Sharm Dreams Ckub", "Egypt", 320, 212),
//     miramarenHotel = new Hotel("Miramaren Hotel", "Greece", 70, 63);
//     console.log (antiqueRomanPalace.availableRooms(),
//     antiqueRomanPalace.availablePercent());
//     console.log(sharmDreamsClub.availableRooms(),
//     sharmDreamsClub.availablePercent());
//     console.log(miramarenHotel.availableRooms(),
//     miramarenHotel.availablePercent());

class Rectangle {
    constructor(width, height) {
        width = width;
        height = height;
}
square(width,height) {
    console.log(width,height);
    return width*height;
}
perimeter(width,height) {
    return 2*(width+height);
}
}
let rect1 = new Rectangle(20,30);
 console.log(rec1.square(), rect1.perimeter());
 let rect2 = new Rectangle(78,92);
 console.log(rect2.square(),rect2.perimeter());