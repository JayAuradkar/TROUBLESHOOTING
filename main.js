leftWristx = 0
leftWristy = 0
rightWristx = 0
rightWristy = 0
song=""
function setup(){
canvas = createCanvas(400, 500)
canvas.position(475, 125)
video = createCapture(0,0)
video.hide()
 posenet=ml5.poseNet(video,modelloaded)
 posenet.on("pose",gotposes)
}
function preload(){
song = loadSound("music.mp3")
}
function draw(){
image(video,0,0,700,700)
fill("red")
circle(leftWristx, leftWristy, 20);
fill("red")
circle(RightWristx, RighttWristy, 20);
}
function PLAY(){
    song.setVolume(1)
    song.rate(2)
    song.play()
}
function STOP(){
    song.stop()
}
function modelloaded(){
    console.log("modelloaded")

}
function gotposes(result){
console.log(result)
leftWristx = result[0].pose.leftWrist.x
leftWristy = result[0].pose.leftWrist.y
righttWristx = result[0].pose.rightWrist.x
rightWristy = result[0].pose.leftWrist.y
}