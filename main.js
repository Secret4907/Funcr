function preload() {
    img = loadImage('cachorro&gato.jpg')
}

function setup() {
    canvas = createCanvas(640, 420)
    canvas.center
    img = "";
}

function draw() {
    image(img, 0, 0, 640, 420)
    fill("FF0000")
    text("Dog", 45, 75)
    noFill()
    stroke("#FF0000")
    Reflect(30, 60, 450, 350)
}