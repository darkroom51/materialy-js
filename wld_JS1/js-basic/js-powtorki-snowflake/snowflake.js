// snow flake object literal

var snowFlake = {
    img: 'https://clipartion.com/wp-content/uploads/2015/11/ms-gilberts-crew-january-2.png',
    element: null,
    init: function () {
        var div = document.createElement('div')
        div.style.backgroundImage = 'url(' + this.img + ')'
        div.style.backgroundSize = 'cover'
        div.style.width = '100px'
        div.style.height = '100px'
        document.body.appendChild(div)
        this.element = div
    }
}

// function that produces objects

function makeSnowFlake() {
    return {
        img: 'https://clipartion.com/wp-content/uploads/2015/11/ms-gilberts-crew-january-2.png',
        element: null,
        fallInterval: null,
        init: function (x, y) {
            var div = document.createElement('div')
            div.style.backgroundImage = 'url(' + this.img + ')'
            div.style.backgroundSize = 'cover'
            div.style.width = '100px'
            div.style.height = '100px'
            div.style.position = 'fixed'
            div.style.top = (y || 0) + 'px'
            div.style.left =  (x || 0) + 'px'
            document.body.appendChild(div)
            this.element = div
        },
        fall: function(){
            if(!this.element) throw Error('call init first!')
            var self = this
            this.fallInterval = setInterval(function () {
                var currentElPos = +self.element.style.top.slice(0, -2)
                if(currentElPos > window.innerHeight){
                    self.destroy()
                }else {
                    self.element.style.top = currentElPos + 5 + 'px'
                }
            }, 50)
        },
        destroy: function () {
            if(this.fallInterval)
                clearInterval(this.fallInterval)
            this.element.remove()
            this.element = null
            this.fallInterval = null
        }
    }
}


// constructor function

function SnowFlake(){
    this.img = 'https://clipartion.com/wp-content/uploads/2015/11/ms-gilberts-crew-january-2.png'
    this.element = null
    this.fallInterval = null
}

SnowFlake.prototype.init = function (x, y) {
    var div = document.createElement('div')
    div.style.backgroundImage = 'url(' + this.img + ')'
    div.style.backgroundSize = 'cover'
    div.style.width = '100px'
    div.style.height = '100px'
    div.style.position = 'fixed'
    div.style.top = (y || 0) + 'px'
    div.style.left =  (x || 0) + 'px'
    document.body.appendChild(div)
    this.element = div
}

SnowFlake.prototype.fall = function(){
    if(!this.element) throw Error('call init first!')
    var self = this
    this.fallInterval = setInterval(function () {
        var currentElPos = +self.element.style.top.slice(0, -2)
        if(currentElPos > window.innerHeight){
            self.destroy()
        }else {
            self.element.style.top = currentElPos + 5 + 'px'
        }
    }, 50)
}

SnowFlake.prototype.destroy = function () {
    if(this.fallInterval)
        clearInterval(this.fallInterval)
    this.element.remove()
    this.element = null
    this.fallInterval = null
}

setInterval(function () {
    var s = new SnowFlake()
    s.init(Math.round(Math.random()*(window.innerWidth-100)), 0)
    s.fall()
}, 500)

// function ourOunNew(constructorFunction){
//     var newObj = {}
//     constructorFunction.call(newObj)
//     Object.setPrototypeOf(newObj, constructorFunction.prototype)
//     return newObj
// }
//
// setInterval(function () {
//     var s = ourOunNew(SnowFlake)
//     s.init(Math.round(Math.random()*(window.innerWidth-100)), 0)
//     s.fall()
// }, 500)