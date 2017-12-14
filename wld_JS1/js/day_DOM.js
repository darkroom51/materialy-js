function helloDOM() {
    if (window.confirm("Do you want to play?")) {
        var yourAnswer = window.prompt('Give me your funny text', '');
        window.alert(yourAnswer);
    }
    else{
        window.open('http://infoshareacademy.pl');
    }

}

function helloDOMwhile() {
    if (window.confirm("Do you want to play?")) {
        var yourAnswer = window.prompt('Give me your funny text', '');
        while (!yourAnswer) {
            yourAnswer = window.prompt('Give me your funny text', '');
            if (yourAnswer === null){yourAnswer = 'Canceled'; break;}
        }
        window.alert(yourAnswer)

    }
}

function getUserURL() {
    var userURL = window.prompt('Give me your URL', 'http://');
    window.open(userURL);
}

function getP(){
    var elementsArr = document.getElementsByClassName('p');
    console.log((elementsArr[0]));
    console.log((elementsArr[elementsArr.length-1]));

}

function getDiv(){
    var firstDiv = document.getElementById('first');
    var firstDivsDivChildren = firstDiv.getElementsByTagName('div');
    var seconDiv = firstDivsDivChildren[0];
    console.log(seconDiv);
}

function getSomething1() {
    var el1 = document.getElementById('first');
    var el2 = document.getElementsByClassName('my')[0];
    var el3 = document.getElementsByClassName('element')[0];
    var el4 = document.getElementsByTagName('div')[0];
    var el5 = document.querySelector('div#first.my.element');
    var el6 = document.querySelectorAll('div#first.my.element')[0];
    console.log(el1, el2, el3, el4, el5, el6);
}

// DOM DAY 2

function getSome21(){
    var eTempParent = document.getElementsByClassName('main');
    var eFirstChild = eTempParent[0].firstElementChild;
    console.log(eFirstChild);
}

function addElement22(){
    var newDiv = document.createElement('div');
    var newContent = document.createTextNode('hello text node');
    newDiv.appendChild(newContent);

    var currentDiv = document.querySelector('.main');
    document.body.insertBefore(newDiv, currentDiv);
}

function addElement23(tag, text, target){
    var newEl = document.createElement(tag);
    var newContent = document.createTextNode(text);
    newEl.appendChild(newContent);

    target.appendChild(newEl);
}

function addElement24(){
    //document.body.innerHTML = '<div><div>Hello</div></div>';

    var div1 = document.createElement('div');
    var div2 = document.createElement('div');
    var text = document.createTextNode('Hello');
    div2.appendChild(text);
    div1.appendChild(div2);
    document.body.appendChild(div1);
}

function createHtmlElemetsFromText25(htmlText){
    if (typeof htmlText !== 'string') throw Error ('Only strings WLD!');
    var tmpDiv = document.createElement('div');
    tmpDiv.innerHTML = htmlText;
    return tmpDiv.children.length !== 1 ?
        tmpDiv
        :
        tmpDiv.firstChild
}

function tmpCos() {
    var div = documet.querySelector('div');
    div.className.split(' '); // stary zapis!!! zamieni stringa ze spacjami na tablice
    div.classList.remove('') // nowy zapis.
}

function addAttribute27(a,b) {
    var tmp = document.querySelector('input');
    tmp.setAttribute(a,b)
}
function removeAttribute27(a) {
    var tmp = document.querySelector('input');
    tmp.removeAttribute(a)
}

function addStyle28() {
    document.body.style.backgroundColor = 'red';
    var tmp = document.querySelector('input');
    tmp.style.position = 'fixed';
    tmp.style.top = '500px';
}

function formSubmit() {
    var tmp = document.querySelector('.formm form input');
    var tmp2 = document.querySelector('form');
    tmp2.submit();
}

/*var btn = document.querySelector('button#gogo');
btn.addEventListener(
    'click',
    function (event) {
       window.alert('hello');
    }
);*/

//higher order functions !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
/*function makeFunctionThatAddsNumbers(number) {
    return function (a){
        return number+a
    }
}

function owoc(firstArgument){
    return firstArgument('ananas')
}

owoc(
    function(x){
        alert('cokolwiek'+x)
    }
);*/

var btn = document.querySelector('button');
console.log(btn);

btn.addEventListener(
    'click',
    function (event) {
        console.log('click');
    }
)

btn.addEventListener(
    'dblclick',
    function (event) {
        console.log('double click',event);
    }
)

