noseX = 0;
noseY = 0;

function preload(){  
    mustache = loadImage("https://i.postimg.cc/3x3QzSGq/m.png");
} 

function setup() {
    canvas = createCanvas(300,300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();
    poseNet = ml5.poseNet(video, modelLoded);
    poseNet.on('pose', samar);
 }
 
 function samar(results) {
     if(results.length > 0){
         console.log(results);
         noseX = results[0].pose.nose.x - 30;
         noseY = results[0].pose.nose.y - -20;
         console.log("nose y = " + noseY);
         console.log("nose x = " + noseX);
     }
 }
 
 function modelLoded() {
     console.log(modelLoded);
 }
 
 function draw(){
    image(video, 0, 0, 300, 300);
    image(mustache, noseX, noseY, 60, 40);
 }
 
 function take_snapshot(){
     save("picture.jpg");
 }
 