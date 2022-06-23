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
    circle(75, 75, 40);
    circle(75, 400, 40);
    circle(550, 75, 40);
    circle(550, 400, 40);
    fill(0, 255, 0);
    rect(95, 60, 435, 30);
    rect(95, 385, 435, 30);
    rect(60, 95, 30, 285);
    rect(535, 95, 30, 285);
    

}

function take_snapshot() {
    save("Arya.png");
}