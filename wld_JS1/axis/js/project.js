var env = {
    'minPosX': 0,
    'maxPosX': 100,
    'minPosY': 0,
    'maxPosY': 95,
    'viewPortHpx': $('.game-board').height(),
    'viewPortWpx': $('.game-board').width()
}

function calcProc(x) {
    return Math.floor(x * 100 / env.viewPortWpx)
}

function createPad() {
    var pad = {
        x: 40,
        y: 90,
        width: 20,
        init: function () {
            var padd = $('<div class="pad" style="top: ' + this.y + '%;left: ' + this.x + '%;"></div>');
            $('.game-board').append(padd);
        },
        movePad: function (z) {
            this.x = z;
            $('.pad').css('left', (this.x) + '%');
            $('.pad').html('this.x: ' + this.x); //----test
            //console.log(this.x); //--------------------wld_CL
        },
    }
    return pad
}

var basket = createPad();
basket.init();

$('.game-board').mousemove(function (e) {
    //console.log('page: ', e.pageX); //--------------------wld_CL
    var newX = Math.floor(calcProc(e.pageX) - basket.width / 2 - calcProc($('.game-board').offset().left));
    //console.log(newX); //--------------------wld_CL
    if ((newX + basket.width < env.maxPosX) && (newX > env.minPosX)) {
        basket.x = newX;
    } else if (newX + basket.width >= env.maxPosX) {
        basket.x = env.maxPosX - basket.width;
    } else {
        basket.x = env.minPosX;
    }
    //basket.x = newX;
    basket.movePad(basket.x);
});


function createPoint(id) {
    var point = {
        id: id,
        x: Math.round(Math.random() * 100),
        y: 0,
        type: 0,
        speed: 1,
        init: function () {
            var bullet = $('<div id="' + id + '" class="bullet" style="top: ' + this.y + '%; left: ' + this.x + '%; background-color: ' + (this.type == 0 ? 'green' : 'red') + '"></div>');
            $('.game-board').append(bullet);
        },
        moveDown: function () {
            this.y = this.y + this.speed;
            $('#' + id).css('top', (this.y) + '%');
            $('#' + id).html('#' + this.id + '<br>y: ' + this.y); //-------wld_test
            //console.log('point: ' ,this.y); //--------------------wld_CL
        },
        removePoint: function () {
            $('#' + id).remove();
        }
    };
    return point;
}

var points = [];

var point = createPoint(1);
point.type = (Math.round(Math.random() * 10)) < 5 ? 1 : 0;
point.init();
points.push(point);

setInterval(function () {
    if (point.y < env.maxPosY) {
        point.moveDown();
    } else {
        point.removePoint();
    }
}, 100);


var point2 = createPoint(2);
point2.type = (Math.round(Math.random() * 10)) < 5 ? 1 : 0;
point2.speed = 2;
point2.init();
points.push(point2);

setInterval(function () {
    if (point2.y < env.maxPosY) {
        point2.moveDown();
    } else {
        point2.removePoint();
    }
}, 100);


/*
for (var i=0; i<4; i++){
    var point = createPoint(i);
    point.type = (Math.round(Math.random()*10))<5 ? 1 : 0;
    point.init();
    points.push(point);
}

var fLiveOfPoints = function (arr) {

    for (var n=0; n<arr.lenght; n++) {
        if (arr[i].y < env.maxPosY) {
            arr[i].moveDown();
        } else {
            arr[i].removePoint();
            arr.pop();
        }
    } // end of for
}


setInterval(fLiveOfPoints(points), 100);
*/


//------------------------------------