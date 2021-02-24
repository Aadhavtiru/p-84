canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

car1_width = 120;
car1_height = 70;
car1_image = "car1.png";
car1_x = 10;
car1_y = 10;

car2_width = 120;
car2_height = 70;
car2_image = "car2.png";
car2_x = 10;
car2_y = 100;

background_image = "racing.jpg";

function add(){
    backgroud_ImgTag = new Image();
    backgroud_ImgTag.onload = uploadbackground;
    backgroud_ImgTag.src = background_image;

    car1_ImgTag = new Image();
    car1_ImgTag.onload = uploadcar1;
    car1_ImgTag.src = car1_image;

    car2_ImgTag = new Image();
    car2_ImgTag.onload = uploadcar2;
    car2_ImgTag.src = car2_image;
}
function uploadbackground(){
    ctx.drawImage(backgroud_ImgTag, 0, 0, canvas.width, canvas.height);
}
function uploadcar1(){
    ctx.drawImage(car1_ImgTag, car1_x, car1_y, car1_width, car1_height);
}
function uploadcar2(){
    ctx.drawImage(car2_ImgTag, car2_x, car2_y, car2_width, car2_height);
}
window.addEventListener("keydown", my_keydown);

function my_keydown(e){
    keyPressed = e.keyCode;
    console.log(keyPressed);
    if(keyPressed == "38")
    {
        console.log("up arrow key")
    }
    if(keyPressed == "40")
    {
        console.log("down arrow key")
    }
    if(keyPressed == "37")
    {
        console.log("left arrow key")
    }
    if(keyPressed == "39")
    {
        console.log("right arrow key")
    }
    if(keyPressed == "87")
    {
        console.log("w key")
    }
    if(keyPressed == "83")
    {
        console.log("s key")
    }
    if(keyPressed == "65")
    {
        console.log("a key")
    }
    if(keyPressed == "68")
    {
        console.log("d key")
    }
}
