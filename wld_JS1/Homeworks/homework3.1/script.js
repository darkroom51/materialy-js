/* map() as prototype */
Array.prototype.myMap = function (fnForEveryElement) {
    var arrayResult=[];;
    for(var i = 0; i < this.length; i++) {
      arrayResult[i] = fnForEveryElement(this[i], i, this)
    }
    return arrayResult
}
//------TEST------
console.log([1,2,3].myMap(x => x ** 2), [1,4,9]);
console.log([1,2,3].myMap(x => 2 * x), [2,4,6]);
console.log([1,2,3].myMap(x => 2 ** x), [2,4,8]);
console.log([1,2,3].myMap(x => x.toString()), ["1","2","3"]);
console.log(["1","2","3"].myMap(x => parseInt(x)), [1,2,3]);

/* map() as regular function */
// var myMap = function (array, fnForEveryElement) {
//     var arrayResult=[];
//     for(var i = 0; i < array.length; i++) {
//         arrayResult[i] = fnForEveryElement(array[i], i, array)
//     }
//     return arrayResult
// }
// //------TEST------
// console.log(myMap([1,2,3], x => x ** 2), [1,4,9]);
// console.log(myMap([1,2,3], x => 2 * x), [2,4,6]);
// console.log(myMap([1,2,3], x => 2 ** x), [2,4,8]);
// console.log(myMap([1,2,3], x => x.toString()), ["1","2","3"]);
// console.log(myMap(["1","2","3"], x => parseInt(x)), [1,2,3]);




/* forEach() as prototype */
// Array.prototype.myForEach = function (fnForEveryElement) {
//     for(var i = 0; i < this.length; i++) {
//         fnForEveryElement(this[i], i, this)
//     }
// }

/* forEach() as regular function */
// var ourOwnForEach = function (array, fnForEveryElement) {
//     for(var i = 0; i < array.length; i++) {
//         fnForEveryElement(array[i], i, array)
//     }
// }




/* howto prototypes ===========================================
function Person(name, surname){ //kontruktor wlasnosci Person
    this.health = 50;
    this.name = name;
    this.surname = surname;
}
Person.prototype.sayHello = function() {               //dodawanie metod Person
   console.info('Greetings from '+ this.name);
}

function Doctor(name, surname) {                    //konstruktor wlasnosci Doctor (dziedziczenie po Person)
    Person.call(this, name, surname);               // this musi byc
    this.hospital = 'Main';
}
Doctor.prototype = Object.create(Person.prototype); // !!! kopiujemy protopype z Person, zeby Doktor dziedziczyl jego metody. Metody sa dynamiczne
Doctor.prototype.constructor = Doctor;              // !!! Inicjalizujemy propotype w Doctor
Doctor.prototype.cure = function (person) {         // dodajemy metode tylko do Doctor (Person nie dziedziczy w gore)
    if (person instanceof Person === false){
        throw new Error('No Person to cure!');
    }
    person.health += 10;
}
============================================================== */