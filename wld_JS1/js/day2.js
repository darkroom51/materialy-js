/*var a = '1';

if (a === 1) {
    console.log(1);

} else if (a === '1'){
    console.log(2);
} else if (a === 2) {
    console.log(a);
} else{
    console.log(0);
}*/

/*
var a ="1";
switch (a){
    case 1:
        console.log(1);
        break;
    case "1":
        console.log(2);
        break;
    case 2:
        console.log(a);
        break;
    default:
        console.log(0);
}*/

/*
var expresionToCheck = true;
var cresult = expresionToCheck ? 'this is t' : 'this is f';
console.log (cresult);
*/

/*
var a = 2;
a = a === 1 ? console.log(1) : a === '1' ? console.log(2) : a === 2 ? console.log(a) : console.log(0);

var a = 2;
console.log(
    a === 1 ?
        1:
        a === '1' ?
            2
            :
            a === 2 ?
                a
                :
                0
)

var a = 2;
console.log(a === 1 ? 1 : a === '1' ? 2 : a === 2 ? a : 0);
*/


/*var numbers = [1,2,3,4,5];
for (var i = 0; i <= 4; i++) {
    console.log(numbers[i]);
}

//wolniejsze rozwiazanie (ale to mit)
for (var i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}

//bardziej wydajne rozwiazanie
var length = numbers.length;
for (var i = 0; i < length; i++) {
    console.log(numbers[i]);
}*/

/*var randomNumbers = [];
var randomNumbers2 = [];
for (var i = 0; i<=9; i++) {
    randomNumbers[i] = Math.floor((Math.random() * 10) + 1);
    randomNumbers2[i] = Math.round((Math.random() * 10));
}
console.log(randomNumbers);
console.log(randomNumbers2);*/


