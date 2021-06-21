const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;
var hour = 0;

var bg = "sunrise1.png";


function preload() {
   
    getBackgroundImg()
}

function setup(){

    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

}

function draw(){
   
    if(backgroundImg)
    background(backgroundImg);

    // add condition to check if any background image is there to add
    Engine.update(engine);
   

    // write code to display time in correct format here

    fill("black");
    textSize(30);

   /* if(hour && hour>=12){
        text("Time : "+ hour%12 + " PM", 50,100);
       }else if(hour==0){
         text("Time : 12 AM",100,100);
       }else{
        text("Time : "+ hour%12 + " AM", 50,100);
       }

       text(hour, 50, 200);
       */

}

async function getBackgroundImg(){

    // write code to fetch time from API
  
        var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
        var responseJson = await response.json();
        console.log(responseJson.datetime);
        var datetime = responseJson.datetime;
       
    // write code slice the datetime
        hour = datetime.slice(11, 13);
        console.log(hour);

        // add conditions to change the background images from sunrise to sunset
        if(hour >= 04 && hour <= 06){
            
            backgroundImg = loadImage("sunrise1.png");
           
        }else if(hour>= 06 && hour<= 08){
            backgroundImg = loadImage("sunrise2.png");
        }else if(hour>= 08 && hour<= 10){
            backgroundImg = loadImage("sunrise2.png");
        }else if(hour>= 10 && hour<= 12){
            backgroundImg = loadImage("sunrise3.png");
        }else if(hour>= 12 && hour<= 14){
            backgroundImg = loadImage("sunrise4.png");

        }else if(hour>= 14 && hour<= 16){
            backgroundImg = loadImage("sunrise5.png");

        }else if(hour>= 16 && hour<= 18){
            backgroundImg = loadImage("sunrise6.png");
        }else if(hour>= 18 && hour<= 20){
            backgroundImg = loadImage("sunset7.png");
        }else if(hour>= 20 && hour<= 22){
            backgroundImg = loadImage("sunset8.png");

        }else if(hour>= 22 && hour == 0){
            backgroundImg = loadImage("sunset9.png");
        }else if(hour>= 0 && hour == 02){
            backgroundImg = loadImage("sunset10.png");
        }
        else{
            backgroundImg = loadImage("sunrise12.png");
            console.log("11");

        }
       //backgroundImg = loadImage(bg);
        console.log(bg);
}
