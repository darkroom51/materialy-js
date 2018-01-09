function addRanomArray() {
    var numbers = [];

    for (var i = 0; i < 5; i++)
        numbers[i] = (Math.random() * 10)

    console.log(numbers)
    //console.log(Math.max(...numbers)) // ...array zwraca tablice podzielona na pojedyncze argumenty, ktore mzna przetworzyc
}

function datePlay() {
    // var date1 = new Date();
    //date1 = (2017,12,15,9,37,5);
    var date1 = new Date(2017, 12, 15, 9, 37, 5);
    var date2 = new Date(2016, 1, 5);

    console.log(date1)
    console.log(date2)
}

function stringPlay() {
    var fullName = 'Waldek Fryc';
    var tmpArray = fullName.split(' ');
    //var firstName = fullName.split(' ')[0];
    var firstName = tmpArray[0];
    var lastName = tmpArray[1];
    console.log(firstName)
    console.log(lastName)
}

function arrPlay() {
    var names = ['waldek', 'tomek', 'natalia', 'wojtek']
    var surnames = ['grey', 'blue', 'purple', 'green']
    var joined = surnames.concat(names);

    console.log(joined)

    var modifiedHeroes = joined.forEach(function (key) {
        return 'Hero - ' + key;
    })

    var modifiedHeroes = joined.map(function (key) {
        return 'Hero - ' + key;
    })

}

function arrPlay2() {
    var names = ['waldek', 'tomek', 'natalia', 'wojtek'];

    var arrLenghts = names.map(function (value) {
        return value.length
    })

    return arrLenghts;
}

function arrAddKowalski() {
    var names = ['arek', 'darek', 'czarek', 'mariusz', 'marek', 'aneta', 'stanislawa']
    var fullNames = names.map(function (value) {
        if (value[value.length - 1] === 'a')
            value + ' Kowalska'
        else
            value + ' Kowalski'
        return value
    })
    return fullNames
}

function findZeroFive() {
    var numbers = [Math.random(), Math.random(), Math.random(), Math.random(), Math.random(), Math.random()]
    console.log(numbers)
    var filteredNumbers = numbers.filter(function (value) {
        if (value < 0.5)
            return true
        else
            return false

    })
    return filteredNumbers
}

function addReducePow() {
    var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    console.log(numbers)
    var reducedNumbers = numbers.reduce(function (result, number, key) {
        return result += Math.pow(number, key + 1)

    }, 0)
    return reducedNumbers
}

function arrNameLessSix() {
    var names = ['arek kowalski', 'darek kowalski', 'czarek kowalski', 'mariusz kowalski', 'marek kowalski', 'aneta kowalska', 'stanislawa kowalska']
    var letterCounts = names.map(function (value) {
        if (value.length <= 5)
            return value.length

    }, 0)
    return letterCounts
}

/*var basketFitCode = {
    color: 'black'
    width: '500px'
    height: '500px'
    moveLeft: function () {}
    moveRigt: function () {}
    shake: function(){}
    changeColor: function(tColor) {this.color='tColor'}
}*/

var defaultCourse = {
    students: ['waldek', 'tomek', 'natalia', 'wojtek'],
    place: 'ISA',
    time: '5h',
    breaktime: '1h'
}

var js = {
    trainer: 'Mateusz Choma',
    place: 'ISA',
    time: '5'
}


function addTime(object) {
    object.time = '5h';
    object.breaktime = '1h';
}

function fillCourseMy(course) {

    for (var i = 0; i < defaultCourse.length; i++) {
        //if (!Object.hasOwnProperty(course)[i]){
        course = Object.entries(defaultCourse)[i]
        //}
    }
    return course
}

function fillCourse(course) {

    Object.entries(defaultCourse).forEach(function (data) {
        if (!course.hasOwnProperty(data[0]))
            course[data[0]] = data[1];
    })
}


function arrWagi() {
    var colors = ['grey', 'blue', 'purple', 'green']
    var wagi = 'abcdefghijklmnoprstuwxyz';
    var waga=0;
    var tmp=0;
    for (var i = 0; i < colors.length; i++) {
        var slicedColor = colors[i].slice('');
        for (var j = 0; j < slicedColor; j++) {
            tmp = waga;
            waga += wagi.indexOf(slicedColor[i])
        }
        if (waga > tmp)
            waga = tmp;
    }
    return waga
}