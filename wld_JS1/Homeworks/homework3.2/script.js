function correctPolishLetters (string) {
    var arrString = string.split('');
        var resultString = arrString.reduce(function(reduced, element){
        switch (element) {
           case 'ą' : return reduced += 'a';
           case 'ć' : return reduced += 'c';
           case 'ę' : return reduced += 'e';
           case 'ł' : return reduced += 'l';
           case 'ń' : return reduced += 'n';
           case 'ó' : return reduced += 'o';
           case 'ś' : return reduced += 's';
           case 'ź' : return reduced += 'z';
           case 'ż' : return reduced += 'z';
            default : return reduced + element;
        }
    },'')
    return resultString
}




//-------------TEST-------------------

if(correctPolishLetters("Jędrzej Błądziński") === "Jedrzej Bladzinski") {console.log('OK')} else {console.log('FAIL')}
if(correctPolishLetters("Lech Wałęsa"),"Lech Walesa") {console.log('OK')} else {console.log('FAIL')}
if(correctPolishLetters("Maria Skłodowska-Curie"),"Maria Sklodowska-Curie") {console.log('OK')} else {console.log('FAIL')}