
// function correctPolishLetters (string) { 
//     var letters = {'ą':'a','ć':'c','ę':'e','ł':'l','ń':'n','ó':'o','ś':'s','ź':'z','ż':'z'}
//     return string.replace(/[ąćęłńóśźż]/g, function(key){
//       return letters[key];
//     });
//   }

// function correctPolishLetters (string) {
//     var resultString = string.replace(/ą/g, 'a').replace(/ę/g, 'e').replace(/ć/g, 'c').replace(/ł/g, 'l').replace(/ń/g, 'n').replace(/ó/g, 'o').replace(/ś/g, 's').replace(/ź|ż/g, 'z');
//     return resultString;
// }

// function correctPolishLetters (string) {
//     var arr = string.split('');
//     for (var i = 0; i < arr.length; i++) {
//       switch(arr[i]) {
//           case 'ą': arr[i] = 'a'; break;
//           case 'ć': arr[i] = 'c'; break;
//           case 'ę': arr[i] = 'e'; break;
//           case 'ł': arr[i] = 'l'; break;
//           case 'ń': arr[i] = 'n'; break;
//           case 'ó': arr[i] = 'o'; break;
//           case 'ś': arr[i] = 's'; break;
//           case 'ź': arr[i] = 'z'; break;
//           case 'ż': arr[i] = 'z'; break;
//           default: arr[i] = arr[i];
//         }
//     }
//     return arr.join('');
//   }

function correctPolishLetters (string) {
    var arrString = string.split('');
        var resultString = arrString.reduce(function(reduced, element){
        switch (element) {
           case 'ą' : return  reduced + 'a';
           case 'ć' : return  reduced + 'c';
           case 'ę' : return  reduced + 'e';
           case 'ł' : return  reduced + 'l';
           case 'ń' : return  reduced + 'n';
           case 'ó' : return  reduced + 'o';
           case 'ś' : return  reduced + 's';
           case 'ź' : return  reduced + 'z';
           case 'ż' : return  reduced + 'z';
            default : return reduced + element;
        }
    },'')
    return resultString
}




//-------------TEST-------------------

if(correctPolishLetters("Jędrzej Błądziński") === "Jedrzej Bladzinski") {console.log('OK')} else {console.log('FAIL')}
if(correctPolishLetters("Lech Wałęsa"),"Lech Walesa") {console.log('OK')} else {console.log('FAIL')}
if(correctPolishLetters("Maria Skłodowska-Curie"),"Maria Sklodowska-Curie") {console.log('OK')} else {console.log('FAIL')}