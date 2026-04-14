const rowCount = 21;
const colCount = 19;
const tileSize = 32;
const boardWidth = colCount * tileSize;
const boardHeight = rowCount * tileSize;

let canvas;
let ctx;
let player;
let obstacles = [];
let collectibles = [];
let score = 0;

const keys = {};

window.addEventListener("keydown", e => keys[e.key] = true);
window.addEventListener("keyup", e => keys[e.key] = false);

const tileMap = [
  "XXXXXXXXXXXXXXXXXXX",
  "X     X       X   X",
  "X XXXXX  X XX X   X",
  "X X      X X  X XXX",
  "X X   X  X XXXX X X",
  "X XXX X  X      X X",
  "X   X X  XXXX XXX X",
  "X     X     X X   X",
  "XXX XXXXXXXXX X   X",
  "O X X      x    X O",
  "X XXX XXXX X   XXXX",
  "X     X  X X X    X",
  "X XXX XX X X XXX  X",
  "X X X  X X   XX   X",
  "XXX X XX XXX X  X X",
  "X   X      X X XX X",
  "X  XX  XXX X X X  X",
  "X  X     X X X X  X",
  "X  XXXXXXX X XXX  X",
  "X          X X    X",
  "XXXXXXXXXXXXXXXXXXX"
];

class Obstacle {
    constructor(x, y, size, color = "blue") {
        this.x = x;
        this.y = y;
        this.size = size;
        this.color = color;
    }

    draw(ctx) {
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, this.size, this.size);
    }
}

function loadMap() {
    obstacles = [];

    for (let r = 0; r < rowCount; r++) {
        for (let c = 0; c < colCount; c++) {
            if (tileMap[r]?.[c] === "X") {
            obstacles.push(
                new Obstacle(
                c * tileSize,
                r * tileSize,
                tileSize
            )
        );
      }
    }
  }
}

class Player {
    constructor(x, y, size) {
        this.x = x;
        this.y = y;
        this.size = size;
        this.speed = 3;
        this.emoji = "🐁";
    }

draw(ctx) {
        ctx.font = this.size + "px Arial";
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillText(
            this.emoji,
            this.x + this.size / 2,
            this.y + this.size / 2
        );
  }

move(dx, dy) {
    let newX = this.x + dx;
    let newY = this.y + dy;

    if (newX < 0 || newX + this.size > canvas.width) return;
    if (newY < 0 || newY + this.size > canvas.height) return;

    for (let obs of obstacles) {
      if (this.collides(newX, newY, obs)) return;
    }

    this.x = newX;
    this.y = newY;
    }

collides(x, y, obj) {
    return (
        x < obj.x + obj.size &&
        x + this.size > obj.x &&
        y < obj.y + obj.size &&
        y + this.size > obj.y
    );
  }
}

class Collectible {
    constructor(x, y, size) {
        this.x = x;
        this.y = y;
        this.size = size;
        this.emoji = "🧀";
  }

draw(ctx) {
    ctx.font = this.size + "px Arial";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText(
        this.emoji,
        this.x + this.size / 2,
        this.y + this.size / 2
        );
  }
}

async function loadCollectibles() {
    const res = await fetch("collectibles.json");
    const data = await res.json();

    collectibles = data.map(c =>
        new Collectible(c.x, c.y, c.size)
  );
}

function checkCollectibles() {
    collectibles = collectibles.filter(c => {
        const hit =
            player.x < c.x + c.size &&
            player.x + player.size > c.x &&
            player.y < c.y + c.size &&
            player.y + player.size > c.y;

        if (hit) {
            score++;
            return false;
        }

    return true;
    });
}

function drawScore() {
    document.getElementById("scoreBoard").textContent =
        "Score: " + score;
}

function update() {
    if (keys["ArrowUp"]) player.move(0, -player.speed);
    if (keys["ArrowDown"]) player.move(0, player.speed);
    if (keys["ArrowLeft"]) player.move(-player.speed, 0);
    if (keys["ArrowRight"]) player.move(player.speed, 0);
        checkCollectibles();
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    obstacles.forEach(o => o.draw(ctx));
    collectibles.forEach(c => c.draw(ctx));
    player.draw(ctx);
        drawScore();
}

function gameLoop() {
    update();
    draw();
    requestAnimationFrame(gameLoop);
}

function spawnCollectible() {
    for (let i = 0; i < 50; i++) {
        let c = Math.floor(Math.random() * colCount);
        let r = Math.floor(Math.random() * rowCount);

    if (tileMap[r]?.[c] !== " ") continue;

        let x = c * tileSize;
        let y = r * tileSize;

        const exists = collectibles.some(col => col.x === x && col.y === y);
    if (exists) continue;
        const item = new Collectible(x, y, 20);
    collectibles.push(item);

    setTimeout(() => {
        collectibles = collectibles.filter(i => i !== item);
    }, 4000);
    break;
  }
}
setInterval(spawnCollectible, 2000);

async function init() {
    canvas = document.getElementById("board");
    canvas.width = boardWidth;
    canvas.height = boardHeight;
    ctx = canvas.getContext("2d");

loadMap();
    await loadCollectibles();
    player = new Player(40, 40, 16);
    gameLoop();
}
window.onload = init;