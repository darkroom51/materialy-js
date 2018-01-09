//new keyword rewrited
function ourOunNew(constructorFunction){
    var newObj = {}
    constructorFunction.call(newObj)
    Object.setPrototypeOf(newObj, constructorFunction.prototype)
    return newObj
}

setInterval(function () {
    var s = ourOunNew(SnowFlake)
    s.init(Math.round(Math.random()*(window.innerWidth-100)), 0)
    s.fall()
}, 500)

//==================================================================================

var numbers = [1, 2, 3, 4, 5, 6, 7, 10]

var sum = numbers.reduce(function (reduced, element, index, array) {
    return reduced + element
}, 0)

var names = ['Ala', 'Ola', 'Ela', 'Kasia']

var oneBigName = names
    .reduce(function (reduced, el, i, arr) {
        return reduced + el + ' ' + el + ' '
    }, '')
    .slice(0, -1)


var orderBasket = [
    {name: 'Vege Ser', price: 1100},
    {name: 'Parówka sojowa', price: 200},
    {name: 'Falafel', price: 800}
]

var orderTotal = orderBasket
    .reduce(function (reduced, el, i, arr) {
        return reduced + el.price
    }, 0)

var orderBasketWithQuantity = [
    {name: 'Vege Ser', price: 1100, quantity: 2},
    {name: 'Parówka sojowa', price: 200, quantity: 20},
    {name: 'Falafel', price: 800, quantity: 10}
]

var calcOrderTotal = function (array) {
    return array.reduce(function (reduced, el, i, arr) {
        return reduced + el.price * el.quantity
    }, 0)
}

var orderTotalWithQuantity = calcOrderTotal(orderBasketWithQuantity)

// TEST

var orderBasketWithQuantityTEST = [
    {name: 'Vege Ser', price: 10, quantity: 10},
    {name: 'Parówka sojowa', price: 20, quantity: 2},
    {name: 'Falafel', price: 8, quantity: 1}
]

var orderBasketWithQuantityTESTWith0 = [
    {name: 'Vege Ser', price: 10, quantity: 10},
    {name: 'Parówka sojowa', price: 20, quantity: 2},
    {name: 'Falafel', price: 8, quantity: 1},
    {name: 'Seaitan', price: 1100, quantity: 0},
]

console.log(
    calcOrderTotal(orderBasketWithQuantityTEST) === 148,
    calcOrderTotal(orderBasketWithQuantityTESTWith0) === 148
)

//===============================================================

var people = [
    {name: "Mateusz", gender: "male", team: null},
    {name: "Waldek", gender: "male", team: 'FitCode'},
    {name: "Tomek", gender: "male", team: 'FitCode'},
    {name: "Natalia", gender: "female", team: 'FitCode'},
    {name: "Wojtek", gender: "male", team: 'FitCode'},
    {name: "Ola", gender: "female", team: 'WeBees'},
    {name: "Kasia", gender: "female", team: 'WeBees'},
    {name: "Paweł", gender: "male", team: 'WeBees'},
    {name: "Grzesiek", gender: "male", team: 'WeBees'}
]

var onlyFemales = people.filter(function (person) {
    return person.gender === 'female'
})

var onlyMales = people.filter(function (person) {
    return person.gender === 'male'
})


var onlyMaleWeBees = people.filter(function (person) {
    return person.gender === 'male' && person.team === 'WeBees'
})

var onlyMaleWeBees = people.filter(function (person) {
    return person.gender === 'male'
}).filter(function (person) {
    return person.team === 'WeBees'
})

//================================================================

var numbers = [4,62,23,14,15]

// filter makes NEW array
// that contains ONLY that elements
// for which function that we passed
// to filter returns true

// only even numbers
var evenNumbers = numbers.filter(function (el) {
    return el % 2 === 0
})

// only odd numbers
var oddNumbers = numbers.filter(function (el) {
    //return el % 2 === 1
    return el % 2 !== 0
})

// only that nums that can be divided by 3
var div3Numbers = numbers.filter(function (el) {
    return el % 3 === 0
})

// only that nums that can NOT be divided by 3
var notDiv3Numbers = numbers.filter(function (el) {
    return el % 3 !== 0
})

//===============================================================

var numbers = [4,62,23,14,15]

// map calls function that we passed in
// and place the returned value
// into NEW array on the same index
    [4,62,23,14,15].map(function(el, i, arr){
    return el*2
})

    [4,62,23,14,15].map(function(el, i, arr){
    return el*2
}).map(function(el, i, arr){
    return el/2
})
    .map(function(el, i, arr){
        return el*el
    })


//========================================================

var array = [4,62,23,14,15]

/// we want to logg out all numbers in array

// we can sue for

for(var i = 0; i < array.length; i++ )
    console.log(array[i])

// we can use forEach also
// forEach is higher order function
array.forEach(function (el, i , arr) {
    console.log(i) // it can be also console.log(arr[i])
})

var ourOwnForEach = function (array, fnForEveryElement) {
    for(var i = 0; i < array.length; i++) {
        fnForEveryElement(array[i], i, array)
    }
}

//=====================================================

var higherOrderFunction = function (otherFuntion) {

}

// higher order function
// is function that takes
// other function as an
// argument


var higherOrderFunction = function (otherFunction) {
    var sum = 1 + 3 + 4 // calculations
    otherFunction(sum)
}

var loggingFunction = function(message){
    console.log(message)
}

higherOrderFunction(loggingFunction) // that function logs 8
// higherOrderFunction is invoked
// loggingFunction is passed as argument
// inside higherOrderFunction:
// var otherFunction = loggingFunction
// make calculations var sum = 1 + 3 + 4 that equals 8
// higherOrderFunction invokes otherFunction
// and passing 8 as an argument
// to otherFunction loggingFunction is assigned
// so we can tell that loggingFunction(8)
// otherFunction === loggingFunction // true
// logging function make console log
// with argument that was passed into
// so 8 is logged

//====================================================================

var alwaysAddOne = function(x){
    return x + 1
}

var alwaysAddFour = function(x){
    return x + 4
}

var makeAlwaysAddFunction = function (numberThatWillBeAdded){
    var alwaysAddFunction = function (x) {
        return x + numberThatWillBeAdded
    }

    return alwaysAddFunction
}

// makeAlwaysAddFunction returns inner function that have 6 in CLOSURE!
var alwaysAddSix = makeAlwaysAddFunction(6)
alwaysAddSix(1) // 7
alwaysAddSix(10) // 16

var alwaysAddTen = makeAlwaysAddFunction(10)
alwaysAddTen(1) // 11
alwaysAddTen(10) // 20


// makeAlwaysAddFunction can be written simpler

var makeAlwaysAddFunction = function (numberThatWillBeAdded){
    return function (x) {
        return x + numberThatWillBeAdded
    }
}

// makeAlwaysAddFunction is called
// with 5 and returns function
// that is immediately called 5
// returns 5 + 5
makeAlwaysAddFunction(5)(5) // 10

// makeAlwaysAddFunction is called
// with 5 and returns function
// that is immediately called 6
// returns 5 + 6
makeAlwaysAddFunction(5)(6) // 11

// same as obove but in () for better clarity
(makeAlwaysAddFunction(5))(5) // 10
(makeAlwaysAddFunction(5))(6) // 11

//=====================================================

var snow = function () { // outer function
    var snowFlake = function () { // inner function
        console.log('Its snowing now!')
    }
}

snow() // returns undefined, and nothing happens

var addSquares = function (x, y) {
    var square = function (z) { // it can be x because it is new function parameter
        return z * z
    }

    return square(x) + square(y)
}

// when invoked this function
// gets 2 arguments (eg 2 and 3)
// var x = 2
// var y = 3
// var square and here new function is created and assign to x
// it calculates square(x) so it passes x (== 2) to square function
// square function invokes
// var z = 2 because 2 was passed as argument
// returns z * z ( === 4 )
// square(x) is calculated and === 4
// it calculates square(y) so it passes y (== 3) to square function
// square function invokes
// var z = 3 because 3 was passed as argument
// returns z * z ( === 9 )
// square(y) is calculated and === 9
// finally function returns 4 + 9 === 13

//=====================================================================

var countDown = function recurrentFunction (x) {
    console.log(x)
    if(x > 0)
        recurrentFunction(x - 1) // it can be --x
}

// function gets x
// logs x
// and if x > 0
// go to step 1 (recur) with x = x -1

var countDownTo = function recurrentFunction (from, to) {
    if(from < to) throw Error('From must be greater than to!')
    console.log(from)
    if(from > to)
        recurrentFunction(from - 1, to)
}

//===================================================================

// function declaration
// not returning value
function addTwoNumbers(x, y){
    return x + y
}

// everything in () JS treats as expression
// so this returns function
(function addTwoNumbers(x, y){
    return x + y
})

// JS automatically adds
// semicolons ; at thr end of line
// so this evals to
// return;
// x + y;
// return ends the function and returns undefined
function addTwoNumbers(x, y){
    return
    x + y
}

// JS automatically adds
// semicolons ; at thr end of line
// but everything in () is an expression
// JS wont add ; inside the expression
// so it works normally
function addTwoNumbers(x, y){
    return (
        x + y
    )
}

// anonymous function expression
// return function and
// we can assign it to variable
var addTwoNumbers = function (x, y){
    return x + y
}

// named function expression
// return function and
// we can assign it to variable
// functionName IS NOT in global scope
// functionName can be accesible only
// in functionName function body
var addTwoNumbers = function functionName (x, y){
    return x + y
}

//===========================================================

// function declaration
// not returning value
function addTwoNumbers(x, y){
    return x + y
}

// everything in () JS treats as expression
// so this returns function
(function addTwoNumbers(x, y){
    return x + y
})

// JS automatically adds
// semicolons ; at thr end of line
// so this evals to
// return;
// x + y;
// return ends the function and returns undefined
function addTwoNumbers(x, y){
    return
    x + y
}

// JS automatically adds
// semicolons ; at thr end of line
// but everything in () is an expression
// JS wont add ; inside the expression
// so it works normally
function addTwoNumbers(x, y){
    return (
        x + y
    )
}

//=============================================================

function addTwoNumbers(x, y){
    return x + y
}

// addTwoNumbers(1,12)
// inside the function
// var x = 1
// var y = 12
// return 1 + 12 // 13

// addTwoNumbers(1,12,12,12,1)
// inside the function
// var x = 1
// var y = 12
// return 1 + 12 // 13

// addTwoNumbers(1)
// inside the function
// var x = 1
// var y = undefined
// return 1 + undefined // NaN

//======================================================

// simple function
function snow(){

}

// simple function returns a
function snow(a){
    return a
}

// snow(1)
// inside function
// var a = 1
// return a

// snow()
// inside function
// var a = undefined
// return a

// simple function returns b
function snow(a){
    return b
}
// snow()
// inside function
// var a = undefined
// return b // b is undefined

// simple function returns b
var b = 'śniezynka'
function snow(a){
    return b
}
// snow(4)
// inside function
// var a = 4
// return b // b is equal to 'śniezynka'

//===================================================================