var myMap = function (array, fnForEveryElement) {
    var arrayResult=[];
    for(var i = 0; i < array.length; i++) {
        arrayResult[i] = fnForEveryElement(array[i], i, array)
    }
    return arrayResult
}

//------TEST------
console.log(myMap([1,2,3], x => x ** 2), [1,4,9]);
console.log(myMap([1,2,3], x => 2 * x), [2,4,6]);
console.log(myMap([1,2,3], x => 2 ** x), [2,4,8]);
console.log(myMap([1,2,3], x => x.toString()), ["1","2","3"]);
console.log(myMap(["1","2","3"], x => parseInt(x)), [1,2,3]);


/*

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
 */