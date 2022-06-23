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
    image(video, 350, 250, 200, 200);
    fill(255, 0, 0);
    circle(75, 75, 100, 100, 30);
    circle(75, 400, 100, 100, 30);
    circle(550, 75, 100, 100, 30);
    circle(550, 400, 100, 100, 30);
    fill(0, 255, 0);
    rect(175, 250, 400, 30);

}

function take_snapshot() {
    save("Arya.png");
}