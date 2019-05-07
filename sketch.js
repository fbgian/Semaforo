let color = 'red';
let color2 = 'green';
//let stopX = 50;

function setup() {
  createCanvas(800, 600);
  x = 0;
  y=0;
  xCar = 0;
  x2Car = width/2-10;
  y1 = height/2;
  x1 = width/2;
  xspeed = 3;
}

function draw() {
  background(0);
  stopX = x1-50;
  stopY = y1-30;
  //linee orizzontali 1
  line(x, y1-30, x1-30, this.y1-30);
  stroke(220);
  line(width, y1-30, x1+30, this.y1-30);
  stroke(220);
  
  //linee orizzontali 2
  line(x, y1+30, x1-30, y1+30);
  line(x1+30, y1+30, width, y1+30);
  stroke(220);
  //linee di stop
  line(x1-50, y1-30, x1-50, y1+30);
  line(x1-30,y1-50,x1+30, y1-50);
  
  //linee verticali 1
  line(x1-30, 0, x1-30, y1-30);
  line(x1+30, 0, x1+30, y1-30);
  
  //linee verticali 2
  line(x1-30, y1+30, x1-30, height);
  line(x1+30, y1+30, x1+30, height);
  
  //semafori
  fill(color);
  circle(30, y1-60, 15);
  fill(color2);
  circle(x1+60, y1-70, 15);

  //macchina
  fill('orange');
  rect(xCar, y1-10, 30, 20);
  fill('blue');
  rect(x2Car, y, 20, 30);
  
  move();
  
}

function move() {
  if (color == 'green') {
    this.xCar += this.xspeed;
    if (xCar > width) {
    xCar = 0;
    }
    
  }
  else if (color == 'red') {
    if (xCar < stopX-40 || xCar > stopX) this.xCar += this.xspeed;
    
    if (xCar > width) {
    xCar = 0;
    }
   // if (xCar == stopX-10) this.xCar = xCar;
  }
  if (color2 == 'green') {
    this.y += this.xspeed;
    if(y > height) {
    y = 0;
    }
  } else if (color2 == 'red') {
      if (y<stopY-60 || y>stopY) this.y += this.xspeed;
      
      if (y>=height) {
        y=0;
      }
  }
}
  

function mouseClicked() {
  if (color == 'red') {
    color = 'green';
  }
  
  else if (color == 'green') {
    color = 'red';
  }
  if(color2 == 'green') {
     color2 = 'red';
  }
  else if (color2 == 'red') {
    color2 = 'green';
  }
}