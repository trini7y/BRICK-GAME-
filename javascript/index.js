var canvas = document.querySelector('#screen');
var ctx = canvas.getContext("2d");

canvas.width = 1000;
canvas.height = 500;

var clearW= 1000;
var clearH=500;


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
		ctx.clearRect(0, 0, clearW , clearH);
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
}

// move_paddle.init();


function controBall(x_, y_, dx_, dy, radius){
	this.x = x_;
	this.y = y_;
	this.dx = dx_;
	this.dy = dy;
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
		ctx.clearRect(0, 0, 1000, 500);
		this.moveBall();
		if(this.x + this.radius < 0 || this.x - this.radius > clearW){
			this.dx =  -this.dx;
		}
		if(this.y + this.radius < 0 || this.y - this.radius > clearH){
			this.dy = -this.dy;
		}
		this.x += this.dx;
		this.y += this.dy;
	}
	animate();

}
controBall(100, 100, 1, 1, 10);
controlPaddle(480, 480, 6);