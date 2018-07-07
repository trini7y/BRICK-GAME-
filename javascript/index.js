var canvas = document.querySelector('#screen');
var ctx = canvas.getContext("2d");

var width = canvas.width;
var height = canvas.height

// var x_Ball = 100;
// var y_Ball = 100;
// var dx_Ball = 1;
// var dy_Ball = 1;
// var radius = 10;

function controlPaddle(x, y, dx){
	this.xAxis = x;
	this.yAxis = y;
	this.dxAxis = dx;
	this.init = function(){
		window.addEventListener("keydown", update, false);
		render();
		// checkLocation();	
	}
	function update(key){
		if(key.keyCode == "37"){
				this.xAxis -= this.dxAxis;
				console.log(this.xAxis);
		}
		if (key.keyCode == "39"){
				this.xAxis += this.dxAxis;
				console.log(this.xAxis);
		}
		// checkLocation();
		render();

	}
  	function render(){
  		ctx.beginPath();
  		ctx.clearRect(0, 0, width, height);
		ctx.fillStyle = "rgb(0,0,0)";
		ctx.fillRect(this.xAxis, this.yAxis, 100, 20);
		ctx.closePath();
	}
	// function checkLocation(){
	//   	if(this.x < 0 || this.x > clearW - 106){
	//   		this.dx = 0;
	//   	}
	// }
	this.init()
	return
}


function controlBall(x_Ball, y_Ball, dx_Ball, dy_Ball, radius){
	this.x = x_Ball;
	this.y = y_Ball;
	this.dx = dx_Ball;
	this.dy = dy_Ball;
	this.radius = radius;

	this.moveBall = function(){
		ctx.beginPath();
		ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
		ctx.strokeStyle = "blue";
		ctx.fillStyle = "#000";
		ctx.stroke();
		ctx.fill();
		ctx.closePath();
	}
	 function animate(){
		requestAnimationFrame(animate);
		this.moveBall();
		if(this.x + this.radius < 0 || this.x - this.radius > width){
			this.dx =  -this.dx;
		}
		if(this.y + this.radius < 0 || this.y - this.radius > height){
			this.dy = -this.dy;
		}
		this.x += this.dx;
		this.y += this.dy;
	}
	animate();

	return
}
function clear(){
	ctx.clearRect(0, 0, width, height);
	controlBall(100, 100, 1, 1, 10);
	controlPaddle(480, 480, 6);
}
clear()