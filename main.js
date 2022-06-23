function preload() {

}

function setup() {
    canvas = createCanvas(640, 480);
    canvas.position(110, 250);
    video = createCapture(VIDEO);
    video.center();
    video.hide();
}

function draw() {
    image(video, 400, 300, 200, 200);
   fill(255, 0, 0);
    circle(100, 100, 100, 100, 30);
    circle(100, 600, 100, 100, 30);
    circle(600, 100, 100, 100, 30);
    circle(600, 600, 100, 100, 30);

}

function take_snapshot() {
    save("Arya.png");
}