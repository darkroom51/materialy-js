// const obj = {
//     name: 'Waldek',
//     surname: 'Fryc',
//     favColor: 'green'
// }
//
// console.log(`I'm ${obj.name} ${obj.surname}. I ${(obj.favColor==='green') ? 'like' : 'don\'t like'} green.`);

//funkcje strzalkowe---------------------------------------

// const returnOlaES5 = function() {
//     return 'Ola'
// }
//
// const returnOlaES6 = () => {
//     return 'Ola'
// }

// const returnOlaShortest = () => 'Ola'


// const returnOlaState = (emotion) => {
//     return `Ola is ${emotion}`
// }

// const returnOlaStateShortest = emotion => `Ola is ${emotion}`
//
//
// console.log (returnOlaState('in love'));

//--------------------------------------------------------

// const hello = (name, surname) => `Hello ${name} ${surname}`
// console.log(hello('waldek', 'sraldek'))

// const returnObj = () => {
//     return {name:'waldek', surname:'sraldek'}
// }
//
// const returnObj = () => ({name:'waldek', surname:'sraldek'})
// }

// cosnt trimString = string => string.slice(0,-2)

// const retArr = arr => arr.map(el => el+1)
//
// function retArr2 (arr) {
//     return arr.map(function (el){
//         return el + 1
//     })
// }

// const returnParzyste =  arr => arr.filter(el => el % 2 === 0)

// const  returnNieStringIParzyste = array => (
//     array
//         .filter(element => typeof element === 'number')
//         .filter(element => element % 2 === 0)
// )
//
//
// const retArr5 = arr => arr.map(el => typeof el === 'number' ? 'liczba' : 'nieliczba');
//
// const hehe = kot => {
//     kot.miau = () => console.log('miau');
//     return kot
// }

// const cat = {name: 'puszek'}
// const catThatMeows = hehe(cat);
// catThatMeows.miau();
// console.log(catThatMeows);

// const przelicznik = mile => 1.852 * mile

//Difference in THIS between normal and arrow function-------------------------------------------------
// function CounterDracula2Fun() {
//     this.counter = 1;
//     let self = this;
//     function tmp() {
//         console.log(++self.counter)
//     }
//     setInterval(tmp,1000)
// }
//
//
// function CounterDraculaNormal() {
//     this.counter = 1;
//     let self = this;
//     setInterval(function() {
//         console.log(++self.counter)
//     },1000)
// }
//
//
// function CounterDraculaArrow() {
//     this.counter = 1;
//     setInterval(() => {console.log(++this.counter)},1000)
// }
//
// const gogoCounter2Fun = new CounterDracula2Fun();
// const gogoCounterN = new CounterDraculaNormal();
// new CounterDraculaArrow();
//--------------------------------------------END OF DAY 1---------------------------------------------------




// Destrukturyzacja -----------------------------------------------------------------------------------

// const my = {
//     first: 'waldek',
//     last: 'fryc'
// }
//
// const {first, last} = my; ---> tworzy zmienne first i last
// const {first: myFirst, last: myLast} = my; ---> tworzy zmienne myFirst i myLast

// DYGRESJA: jesli zmienna jest o tej samej nazwie co proprety to mozna zrobic tak
// var name = 'Ala';
// var obj = {name : name};
// var obj1 = {name}

//---------------------------------------------------------------

// const my = {
//     first: 'waldek',
//     last: 'fryc'
// }
//
// const funfunName1 = (objInput) => {
//     console.log('First: ', objInput.first);
//     console.log('Last: ', objInput.last);
// }
//
// const funfunName2 = (objInput) => {
//     const {first, last} = objInput;
//     console.log('First: ', first);
//     console.log('Last: ', last);
// }
//
// const funfunName3 = ({first, last}) => {
//     console.log('First: ', first);
//     console.log('Last: ', last);
// }
//
// funfunName1(my);
// funfunName2(my);
// funfunName3(my);

//Proste uzycie zlozonych struktor danych-------------------------------------------------

// const ourObject = {
//     tjyhfgdfsadws: {
//         name: 'Ala',
//         surname: 'Kotowicz'
//     },
//     sgdadfajbgfvcd: {
//         name: 'Ola',
//         surname: 'Kotowiczowicz'
//     },
//     hmjgbdxfvszdca: {
//         name: 'Ela',
//         surname: 'Kotowiczowiczówna'
//     }
// }

// OUTPUT in console:
// Ala Kotowicz
// Ola Kotowiczowicz
// Ela Kotowiczowiczówna

// console.log(
//     Object.keys(ourObject)
// )

// using Object.keys

// v1

// Object.keys(ourObject)
//     .forEach((ourObjectKey) => {
//         const ourObjectValue = ourObject[ourObjectKey]
//         console.log(ourObjectValue.name + ' ' + ourObjectValue.surname)
//     })

// v2

// Object.keys(ourObject)
//     .forEach((ourObjectKey) => {
//         const ourObjectValue = ourObject[ourObjectKey]
//         const {name, surname} = ourObjectValue
//         console.log(name + ' ' + surname)
//     })

// v3

// Object.keys(ourObject)
//     .forEach((ourObjectKey) => {
//         const {name, surname} = ourObject[ourObjectKey]
//         console.log(name + ' ' + surname)
//     })


// using Object.keys

// console.log(
//     Object.values(ourObject)
// )

// v1

// Object.values(ourObject)
//     .forEach((ourObjectValue)=>{
//         console.log(ourObjectValue.name + ' ' + ourObjectValue.surname )
//     })

// v2

// Object.values(ourObject)
//     .forEach((ourObjectValue)=>{
//         const {name, surname} = ourObjectValue
//         console.log(name + ' ' + surname )
//     })


// v3
//
// Object.values(ourObject)
//     .forEach(({name, surname}) => {
//         console.log(`${name} ${surname}`)
//     })


// Using Object.entries

// console.log(
//     Object.entries(ourObject)
// )

// v1
//
// Object.entries(ourObject)
//     .forEach((smallArray) => {
//         const value = smallArray[1]
//         const {name, surname} = value
//         console.log(`${name} ${surname}`)
//     })

// v2
//
// Object.entries(ourObject)
//     .forEach((smallArray) => {
//         const key = smallArray[0]
//         const {name, surname} = smallArray[1]
//         console.log(`${key} - ${name} ${surname}`)
//     })

// v3

// Object.entries(ourObject)
//     .forEach(([key, value]) => {
//         const {name, surname} = value
//         console.log(`${key} - ${name} ${surname}`)
//     })

// v4 - deep destructuring

// Object.entries(ourObject)
//     .forEach(([key, {name, surname}]) => {
//         console.log(`${key} - ${name} ${surname}`)
//     })

//---------------------------------------------------------------

// const dataBase = {
//     id1: {
//         first: 'waldek',
//         last: 'fryc'
//     },
//     id2: {
//         first: 'waldek',
//         last: 'kowalski'
//     },
//     id3: {
//         first: 'waldek',
//         last: 'wisniewski'
//     }
// }
//
// Object.entries(dataBase)
//     .forEach( ([key,value]) => {
//     const {first, last} = value;
//     console.log(`${key} - ${first} ${last}`);
//     })

//CLASS -------------------------------------------------------

// class Animal {
//     // object constructor
//     // (executed when new Animal())
//     constructor(sound) {
//         this.sound = sound
//     }
//     // class method
//     makeSound() {
//         console.log(this.sound)
//     }
// }
//
// // class above is nearly the same as "old" OldAnimal constructor function
// function OldAnimal(sound) {
//     this.sound = sound
// }
//
// OldAnimal.prototype.makeSound = function () {
//     console.log(this.sound)
// }
//
// console.log(new Animal('wrrrr'))
// console.log(new OldAnimal('wrrrr'))

//Dziedziczenie ----------------------------------------------------

//DYGRESJA: dziedziczenie z zajec z Arkiem
// function Doctor(name, surname) {                    //konstruktor wlasnosci Doctor (dziedziczenie po Person)
//     Person.call(this, name, surname);               // this musi byc
//     this.hospital = 'Main';
// }
// Doctor.prototype = Object.create(Person.prototype); // !!! kopiujemy protopype z Person, zeby Doktor dziedziczyl jego metody. Metody sa dynamiczne
// Doctor.prototype.constructor = Doctor;              // to musi byc, zeby w obiekcie dziedziczacym byl constructor

//------------------------------------------------------------------

// class Animal {
//     // object constructor
//     // (executed when new Animal())
//     constructor(sound) {
//         this.sound = sound
//     }
//     // class method
//     makeSound() {
//         console.log(this.sound)
//     }
// }
//
// class Dog extends Animal {
//     constructor(breed) {
//         // executes Animal’s constructor super('woof')
//         // you must do it first
//         super('woof')
//         this.breed = breed
//     }
// }
//
// // class above is nearly the same as "old" OldAnimal constructor function
// function OldAnimal(sound) {
//     this.sound = sound
// }
//
// OldAnimal.prototype.makeSound = function () {
//     console.log(this.sound)
// }
//
// function OldDog(breed){
//     OldAnimal.call(this, 'woof') // the same as super call
//     this.breed = breed
// }
//
// OldDog.prototype = Object.create(Animal.prototype)
// OldDog.prototype.constructor = OldDog
//
// console.log(new Dog('dalmatynczyk'))
// console.log(new OldDog('dalmatynczyk'))

//MODULES -----------------------------------------------------------------

// import $ from 'jquery' ----> importaowanie paczek npm
// export default cat -----> export default
// import cat  -----> import default bez nawiasow dowolna nazwa zmiennej
// export {cat1, cat2, cat3} -----> more advanced way of exporting
// export default {object} -----> nie musi miec nazwy

// basic import
// import { cat as localCat } from './externalFile'
// console.log(localCat)

//more import
// import defaultCat, { cat as localCat, cat2 as localCat2 } from './externalFile'
// console.log(localCat)
// console.log(localCat2)
// console.log(defaultCat)