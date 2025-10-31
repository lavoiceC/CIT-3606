const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext('2d');
const carrotImage = new Image();
carrotImage.src = "image/carrot.png";
const bugsImage = new Image();
bugsImage.src = "image/bugsbunny.jpg";

let x = 0;
let y = 0;
let avoid_x = 0;
let avoid_y = 0 

function drawFunction() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    x = Math.random() * (canvas.width - 50);
    y = Math.random() * (canvas.height - 50);
    avoid_x = Math.random() * (canvas.width - 50);
    avoid_y = Math.random() * (canvas.height - 50);
    
    ctx.drawImage(carrotImage, x, y, 50, 50);
    ctx.drawImage(bugsImage, avoid_x, avoid_y, 50, 50);
}
setInterval(drawFunction, 1000);