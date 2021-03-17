var fade;
var fadeAmount =0.01;

function preload(){
  img=loadImage('data/nn.jpg');}
function setup() {
  createCanvas (windowWidth, windowHeight);
  mic = new p5.AudioIn();
  mic.start();
  

}

function draw() {
  background(255,0,0);
   let srt ='Όταν φωνάζεις δυνατά ένα σύνθημα, κάτι καλό συμβαίνεΙ. Φώναξε.';
  text(srt, windowWidth/2,50,500,500);
  
 
 

  var vol = mic.getLevel();
  var col = map(vol, 0, 1, 0, 255);
  //fill(col);
  //ellipse(100, 100, 50, 50);
  image(img, windowWidth/2-250,100,500,500);
 tint (col);
}
