function createPoint(id) {
    var point = {
        x: Math.round(Math.random()*100),
        y: 10,
        color: 'green',
        id: id,
        speed: 5,
        init: function () {
            var bullet = $('<div id="' + id + '" class="bullet" style="top: ' + this.y + '%;left: ' + this.x + '%; background-color: ' + this.color + '">'+id+'</div>');
            $('.content').append(bullet);
        },
        moveRight: function () {
            this.x = this.x + 1;
            $('#' + id).css('left', (this.x) + '%');
        },
        moveDown: function () {

                this.y = this.y + this.speed;
                $('#' + id).css('top', (this.y) + '%');
                return this.y

        }
    };

    return point;
}

points = [];
var point = createPoint(1);
point.init();
points.push(point);

setInterval(function () {
    point.moveDown();
}, 100);





//------------------------------------

var point2 = createPoint(2);
point2.color = 'red';
point2.speed = 10;
point2.init();
points.push(point2);
setInterval(function () {
    point2.moveDown();
}, 100);

var point3 = createPoint(3);
point3.color = 'green';
point3.speed = 30;
point3.init();
points.push(point3);
setInterval(function () {
    point3.moveDown();
}, 100);

var point4 = createPoint(4);
point4.color = 'red';
point4.speed = 30;
point4.init();
points.push(point4);
setInterval(function () {
    point4.moveDown();
}, 100);

var point5 = createPoint(5);
point5.color = 'green';
point5.speed = 10;
point5.init();
points.push(point5);
setInterval(function () {
    point5.moveDown();
}, 100);