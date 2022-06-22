function preload() {

}

function setup() {
    canvas = createCanvas(640, 480);
    canvas.position(110, 250);
    video = createCapture(VIDEO);
    video.hide();
}

function draw() {
    image(video, 0, 0, 200, 200);
   fill(255, 0, 0);
    circle(100, 100, 100, 100, 30);
    circle(100, 300, 100, 100, 30);
    circle(300, 100, 100, 100, 30);

}

function take_snapshot() {
    save("Arya.png");
}