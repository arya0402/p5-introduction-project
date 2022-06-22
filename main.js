function preload() {

}

function setup() {
    canvas = createCanvas(640, 480);
    canvas.position(110, 250);
    video = createCapture(VIDEO);
    video.hide();
}

function draw() {
    image(video, 0, 0, 640, 480);
   fill(255, 0, 0);
    circle(10, 10, 20, 20, 30);
}

function take_snapshot() {
    save("Arya.png");
}