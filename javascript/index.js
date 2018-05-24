var canvas = document.querySelector('#screen');
var ctx = canvas.getContext("2d");

canvas.width = 1000;
canvas.height = 500;
var x = 450;
var y = 480;
//The paddle
ctx.fillStyle = "rgb(0,0,0)";
ctx.fillRect(x, y, 100, 20);

window.addEventListener("keydown", moveLeft, false);
function moveLeft(key){
		if (key.keyCode == "37"){
			x += 1;
		}
}
function controlPaddle(minus_x, plus_x){
	this.minus_x = minus_x;
	this.plus_x = plus_x;

	this.moveLeft = function(){
		window.addEventListener("keydown", moveLeft, false);
		function moveLeft(key){
			if(key.keyCode == "37"){
				this.minus_x -= 1;
			}
		}
	}
}
var move = new controlPaddle(10, 10);

move.moveLeft();