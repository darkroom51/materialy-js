/*
//Add class - PURE JS
var bodyEls = document.querySelector('body *');
for (var i=0; i < bodyEls.length; i++)
    bodyEls[i].className = 'red'
//Add class - jQuery
$('body *').addClass('green')
*/

/*
function hideContent(element,time){
    $(element).slideUp(time)
}
function showContent(element,time){
    $(element).slideDown(time)
}
function toggleContent(element,time) {
    $(element).slideToggle(time)
}

function divRed() {
    $('div.div1').toggleClass('div1-red').slideToggle();
}

function divToggle() {
    $('div.div1')
        .slideUp(1000)
        .delay(500)
        .slideDown(1000)
        //.toggleClass('div1-red')
}

*/

/*
$(document).ready(function() {
    console.log('1')
})

$(function(){
    console.log('2')
})

document.addEventListener('DOMContentLoaded', function (){
    console.log('3')
})

//---------
function start(funct) {
    document.addEventListener('DOMContentLoaded', funct)
}

start(function(){
    //kod
})

//---------
*/

function $appendP() {
    for (var i=1; i<16; i++)
        $('div.div1').append($('<p>'+i+'</p>'))
}

function $appendP2() {
    for (var i=15; i>0; i--)
        $('<p>'+i+'</p>').prependTo('div.div1')
}

function $addLink() {
    $('body').append($('<a>Link</a>'))
    $('a').attr('href','http://google.com')
}

function $addInnerText() {
    $('div.div1').text('ala ma kota')
}
function $addInnerHtml() {
    $('div.div1').html('<i>ala ma kota</i>')
}

function $addForm() {
    $('body').append($('<div id="divForm">'));
    $('div#divForm').text('Some Text')
    $('div#divForm').html('<input>')
    $('div#divForm').val('a@a.pl')
    $('div#divForm').attr('placeholder', 'your email')
}

/*
$('button').on('click', function(e){
    alert('klik')
    e.preventDefault()
}) */