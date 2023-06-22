song="";
leftwristx=0;
rightwristy=0;
leftwristy=0;
rightwristx=0;
leftwristscore=0;
rightWristscore=0;
function preload () {
song=loadSound("music.mp3");

}
function setup () {
canvas=createCanvas(600,500);
canvas.position(800,250);
video=createCapture(VIDEO);
video.hide();
posenet=ml5.poseNet(video,modelLoaded);
posenet.on('pose',gotPoses);


}
function gotPoses (results) {
    if(results.length>0){
console.log(results);
leftWristscore=results[0].pose.keypoints[9].score;
rightWristscore=results[0].pose.keypoints[10].score
leftwristx=results[0].pose.leftWrist.x;
leftwristy=results[0].pose.leftWrist.y;
rightwristy=results[0].pose.rightWrist.y;
rightwristx=results[0].pose.rightWrist.x;
    }
}










function modelLoaded () {
console.log('posenet');

}
function draw () {
    image(video,0,0,600,500);
    fill("#77ddc2");
    stroke ("#ca2cf9");
    
    if(rightWristscore>0.2){
        circle(rightwristx,rightwristy,20);
        if(rightwristy>0 && rightwristy<=100){
            document.getElementById("ytp").innerHTML="Speed=0.5x";
             song.rate(0.5);
      
            }
           else if(rightwristy>100 && rightwristy<=200){
                 document.getElementById("ytp").innerHTML="Speed=1x";
                song.rate(1);
            }
            else if(rightwristy>200 && rightwristy<=300){
                document.getElementById("ytp").innerHTML="Speed=1.5x";
                song.rate(1.5);
            }
            else if(rightwristy>300 && rightwristy<=400){
                document.getElementById("ytp").innerHTML="Speed=2x";
                song.rate(2);
            }
            else if(rightwristy>400 && rightwristy<=500){
                document.getElementById("ytp").innerHTML="Speed=2.5x";
                song.rate(2.5);
            }

    }
    if(leftwristscore>0.2){


    
    circle(leftwristx,leftwristy,20);
    namaste=Number(leftwristy);
    Kannada=floor(namaste);
    volume=Kannada/400;
    document.getElementById("gtg").innerHTML="Volume= "+volume;
    song.setVolume(volume);
}
}
function music () {
    song.play();
    song.setVolume(0.5);
    song.rate(1); 

}