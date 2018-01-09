//------------------------------ OBJECT LITERAL ------------------------

var person = {
    firstname: 'waldek',
    lastname: 'fryc',
    age: 18,
    favColor: 'blue',
    welcome: function (msg) {
        console.log(this.firstname +' says: '+ msg)
    },
    setFirstName: function(firstName){
        this.firstName = firstName
    }
}

var favPet= {
    maker: 'ducati',
    model: 'monster',
    engine: {
        capacity: 750,
        type: 'L-Twin',
        power: 62,
        torque: 62
    },
    color: ['red', 'gold'],
    year: 1997,
    listParameters: function () {
        console.log('This is: '+ this.maker +' '+this.model)
    },
    test: function () {
        console.log(this)
    }

}

var car = {
    brand: 'fiat',
    model: '500',
    netPrice: 10,
    tax:23,
    calcPrice: function () {
        return this.netPrice*this.tax
    }
}

var truck = {
    brand: 'fiat',
    model: 'iveco',
    netPrice: 100,
    tax:23,
    calcPrice: function () {
        return this.netPrice*this.tax
    }
}

// //wywolanie metody z car z kontekstem truck -> this juz nie jest tym samym, this jest brane z truck
// console.log(car.calcPrice.call(truck)); // obiekt,par,par,par...
// console.log(car.calcPrice.apply(truck); // obiekt, [par,par,par]
// console.log(car.calcPrice.bind(truck); // nowe parametry sa bindowane na stale

var cart = {
    value: 100,
    paidDate: new Date(2017,11,20),
    items:['car','egg','owl','cat','dog','cow','ant'],
    adjustments:[
        {name: 'Koszt dostawy', value: 50},
        {name: 'Promocja mikolajkowa', value:-15}
    ]
    ,
    getpaidDate: function () {
        return this.paidDate.toDateString()
    },
    getPrice: function () {
        return this.value + (this.adjustments.reduce(function (result, item) { return result +=  item.value }, 0))
    },
    printItems: function () {
        //this.items.forEach(function(elem){console.log(elem,' ')})
        //console.log(this.items.join(', '))
        return this.items.reduce(function (result, item) { return result += ' '+item}, 0)
    }
}

var order = {
    value: 200,
    paidDate: new Date(2017,11,21),
    items:['car','egg','owl','cat'],
    adjustments:[],
}

//console.log(cart.getPrice.call(order));






//---------------------------------OBJECT CONSTRUCTOR----------------------------------------

//constructor function PASCAL CASE
function Tree (age, height, radius){
    this.age = age;
    this.height = height;
    this.radius = radius;
}

function Sosna (age, height, radius){
    this.age = age;
    this.height = height;
    this.radius = radius;
    this.getPrice = function () {
        return this.height*this.radius*100
    }
}

function Dab (age, height, radius, hardness){
    this.age = age;
    this.height = height;
    this.radius = radius;
    this.hardness = hardness;
    this.getPrice = function () {
        return this.height*this.radius*this.hardness
    }
}

var tree1 = new Tree(10,10,10);
var tree2 = new Tree(10,10,10);
var sosna1 = new Sosna(10,10,10);
var sosna2 = new Sosna(10,10,10);

// console.log(tree1 instanceof Tree);
// console.log(tree1 instanceof Sosna);
// console.log(tree1 instanceof Object);


//private propertis
function Tree (age, height, radius){
    var _radius = radius;
    var _height = height;
    calculateAge = function () {  //metoda prywatna
        _age = _radius /10;
    };
    this.getAge = function () {  //metoda publiczna
        calculateAge();
        return _age
    }
}



function Cart () {
    var _value = 100;
    var _paidDate = new Date(2017,11,20);
    var _items = ['car','egg','owl','cat','dog','cow','ant'];
    var _adjustments = [
        {name: 'Koszt dostawy', value: 50},
        {name: 'Promocja mikolajkowa', value:-15}
    ];
    this.getpaidDate = function () {
        return _paidDate.toDateString()
    }
    this.getPrice = function () {
        return _value + (_adjustments.reduce(function (result, item) { return result +=  item.value }, 0))
    }
    this.printItems = function () {
        //this.items.forEach(function(elem){console.log(elem,' ')})
        //console.log(this.items.join(', '))
        return _items.reduce(function (result, item) { return result += ' '+item}, 0)
    }
    this.setValue = function () {
        
    }
    this.setDate = function () {
        
    }
    this.setItem = function () {
        
    }
    this.setAdjustment = function () {
        
    }
}

var myCart = new Cart();

//------------------------- PROTOTYPE CONSTRUCTOR - DZIEDZICZENIE KLASS ---------------------------------



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

//-----------------------------


function Tree (a, b, c){
    this.age = a;
    this.height = b;
    this.radius = c;
}
Tree.prototype.grow = function () {
   this.height += 1;
   this.radius += 0.1;
}

function Sosna (age, height, radius){
    Tree.call(this, age, height, radius);
    this.value = 100;
}
Sosna.prototype = Object.create(Tree.prototype); //*
Sosna.prototype.constructor = Sosna;
Sosna.prototype.getPrice = function () {
    return this.height*this.radius*this.value
}


function Dab (age, height, radius, hardness){
    Tree.call(this, age, height, radius);
    this.hardness = hardness;
}
Dab.prototype = Object.create(Tree.prototype); //*
Dab.prototype.constructor = Dab;               //*
Dab.prototype.getPrice = function () {
    return this.height*this.radius*this.value*this.hardness
}
