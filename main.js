status="";
function setup()
{
   canvas = createCanvas(350,300);
   canvas.center();
   video = createCapture(VIDEO);
   video.hide();
}
function draw()
{
   image(video,0,0,350,300);
}
function start()
{
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML ="Status : Detecting Objects";
}
function modelLoaded()
{
   console.log("Model Loaded!");
   status = true;
}