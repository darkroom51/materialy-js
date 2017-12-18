/* var fullName = '';
fetch('https://randomuser.me/api')
.then(function(response){
    return response.json()
})
.then(function(data){
     name = data.results[0].name.first +' '+ data.results[0].name.last;
})
.catch(function(){

})
console.log(name); */


//jQuery
/*fetch('https://randomuser.me/api')
    .then(function(response){
        return response.json()
    })
    .then(function(data){
        console.log(data.results[0]) //---------------------CL_wld
        $('body').append('<h1>' + data.results[0].name.first + ' ' + data.results[0].name.last + '</h1>')
        $('body').append('<div> <img src="' + data.results[0].picture.large + '"></div>')
        $('body').append('<div>' + data.results[0].email + '</div>')
    })
    .catch(function(){

    })
*/

//JS
/*then(function(response){
        return response.json()
    })
    .then(function(data){
        //console.log(data.results[0]) //---------------------CL_wld
        document.body.innerHTML = '<h1>' + data.results[0].name.first + ' ' + data.results[0].name.last + '</h1>'
        + '<div> <img src="' + data.results[0].picture.large + '"></div>'
        + '<div>' + data.results[0].email + '</div>'
    })
    .catch(function(){

    })*/


/*
var promise = new Promise(function (resolve, reject){
    fetch('https://randomuser.me/api')
        .then (function(response){
            return response.json()
        })
        .then (function(data){
            resolve(data)
        })
        .catch (function (error){
            reject (error)
        })
})

promise
    .then (function(data){
    console.log(data)
}) */


//funkcja zwarajaca promise, z zaczekaniem na dane z oryginalnego fetch
function makeFetch(url){
    var promise = new Promise(function (resolve, reject){
        fetch(url)
            .then (function(response){
                return response.json()
            })
            .then (function(data){
                resolve(data)
            })
            .catch (function (error){
                reject (error)
            })
    })
    return promise
}
var myPromise = makeFetch('https://randomuser.me/api')
myPromise
    .then (function (data){
        console.log(data)
    })


//to samo co wyzej, ale bardziej z zycia basic fetch use
function makeFetch2(url) {
    return fetch(url)
        .then (function (response) {
            return response.json()
        })
}



// =================== Promise.all - promise zawierajacy wiele promisow i czekajacy az kazdy sie zresolvuje

//zwracamy cale promisy
Promise.all(
    [
        fetch('https://randomuser.me/apii'),
        fetch('https://randomuser.me/api')
    ]
)
    .then (function (dataOfTwoUsers) {
        console.log(dataOfTwoUsers)
    })
    .catch (function (){
        console.log('nie wiem')
    })


//zwracamy dane z promisow w postci response json'ow
Promise.all(
    [
        fetch('https://randomuser.me/apii')
            .then(function(response){return response.json()}),
        fetch('https://randomuser.me/api')
            .then(function(response){return response.json()})
    ]
)
    .then (function (dataOfTwoUsers) {
        console.log(dataOfTwoUsers)
    })
    .catch (function (){
        console.log('nie wiem')
    })

//zwracamy dane z promisow w postci juz samych objektow z danymi
Promise.all(
    [
        fetch('https://randomuser.me/apii')
            .then(function(response){return response.json()})
            .then(function(data){return data.results[0].name.first}),
        fetch('https://randomuser.me/api')
            .then(function(response){return response.json()})
            .then(function(data){return data.results[0].name.first})
    ]
)
    .then (function (dataOfTwoUsers) {
        console.log(dataOfTwoUsers)
    })
    .catch (function (){
        console.log('nie wiem')
    })