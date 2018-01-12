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
