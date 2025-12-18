let r = 150;
let angle = 0;
let balls = [];
let num = 10;
let balls2 = [];
let balls3 = [];
let balls4 = [];
function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES);

  for (let i = 0; i < num; i++) {
    let shiftingAngle = (180 / num) * i;
    balls[i] = new Ball(0, shiftingAngle);
  }

  for (let i = 0; i < num; i++) {
    let shiftingAngle = (180 / num) * i;
    balls2[i] = new Ball(90, shiftingAngle);
  }

  for (let i = 0; i < num; i++) {
    let shiftingAngle = (180 / num) * i;
    balls3[i] = new Ball(180, shiftingAngle);
  }

  for (let i = 0; i < num; i++) {
    let shiftingAngle = (180 / num) * i;
    balls4[i] = new Ball(270, shiftingAngle);
  }
}

function draw() {
  background("black");
  translate(width / 2, height / 2);
  noFill();
  ellipse(0, 0, r * 2, r * 2);

  for (let i = 0; i < num; i++) {
    balls[i].update();
    balls[i].display();
    balls2[i].update();
    balls2[i].display();
    balls3[i].update();
    balls3[i].display();
    balls4[i].update();
    balls4[i].display();
  }
}
