var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

class Square {
    constructor(x, y, size, color) {
        this.x = x;
        this.y = y;
        this.size = size;
        this.color = color;
    }

moveLeft() {
    this.x -= 10;
    if (this.x < 0) {
        this.x = 0;
    }
}
moveRight() {
    this.x += 10;
    if (this.x + this.size > canvas.width) {
        this.x = canvas.width - this.size;
    }
}
}

var square = new Square(100, 400, 50, "blue");

var flakes = [];
for (var i = 0; i < 10; i++) {
    flakes.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: 10,
        speed: 1 + Math.random() * 2
    });
}

document.addEventListener("keydown", function (e) {
    if (e.key === "a") square.moveLeft();
    if (e.key === "d") square.moveRight();
});

function isColliding(square, flake) {
    return !(
        square.y > flake.y + flake.size ||
        square.y + square.size < flake.y ||
        square.x > flake.x + flake.size ||
        square.x + square.size < flake.x
    );
}

function update() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = square.color;
    ctx.fillRect(square.x, square.y, square.size, square.size);

    ctx.fillStyle = "black";

    for (var f of flakes) {
        f.y += f.speed;

        if (f.y > canvas.height) {
            f.y = 0;
            f.x = Math.random() * canvas.width;
        }

        ctx.fillText("❅", f.x, f.y);

        if (isColliding(square, f)) {
            canvas.style.backgroundColor =
                `rgb(${Math.random()*255},${Math.random()*255},${Math.random()*255})`;

            f.y = 0;
            f.x = Math.random() * canvas.width;
        }
    }
}

setInterval(update, 16);