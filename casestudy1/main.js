//nhập ảnh
var canvas = document.getElementById('game');


var context = canvas.getContext('2d');
var scoreshow = document.getElementById('score');

var birdimg = new Image();
var hinhnenchinh = new Image();
var ongtren = new Image();
var ongduoi = new Image();
birdimg.src = "anh/bird.png";
hinhnenchinh.src = "anh/nenchinh.png";
ongtren.src = "anh/ongtren.png";
ongduoi.src = "anh/ongduoi.png";
//tạo các biến
var score = 0;
var khoangcachhaiong = 140;
var khoangcachdenongduoi;
var bird = {
    x: hinhnenchinh.width / 5,
    y: hinhnenchinh.height / 2
}
var ong = [];
ong[0] = {
    x: canvas.width,
    y: 0
}


function run() {
    // load hình ảnh vào
    context.drawImage(hinhnenchinh, 0, 0);
    context.drawImage(birdimg, bird.x, bird.y);

    for (var i = 0; i < ong.length; i++) {
        khoangcachdenongduoi = ongtren.height + khoangcachhaiong;
        context.drawImage(ongtren, ong[i].x, ong[i].y);

        context.drawImage(ongduoi, ong[i].x, ong[i].y + khoangcachdenongduoi);

        ong[i].x -= 5;


        if (ong[i].x == canvas.width / 2) {
            ong.push({
                x: canvas.width,
                y: Math.floor(Math.random() * ongtren.height) - ongtren.height

            })
        }
        if (ong[i].x == 0) ong.splice(0, 1);

        if (ong[i].x == bird.x) score++;

        if (bird.y + birdimg.height == canvas.height ||
            bird.x + birdimg.width >= ong[i].x && bird.x <= ong[i].x + ongtren.width
            && (bird.y <= ong[i].y + ongtren.height ||
                bird.y + birdimg.height >= ong[i].y + khoangcachdenongduoi)
        ) {
            return alert('GAME OVER!!! YOUR SCORE IS ' + score)
        }
    }


    scoreshow.innerHTML = "score: " + score;

    bird.y += 3;
    requestAnimationFrame(run);
}

document.addEventListener("keydown", function () {
    bird.y -= 50;
})
run();