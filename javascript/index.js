var canvas = document.querySelector('#screen');
var ctx = canvas.getContext("2d");

var width = canvas.width;
var height = canvas.height;

var keys = {};
var hue = 0;
var dx = 0;
var dTarget = 0;

document.onkeydown = ({ keyCode }) => {
	keys[keyCode] = 1;
};

document.onkeyup = ({ keyCode }) => {
	keys[keyCode] = 0;
};

function Paddle(x, y, dx){
	this.xAxis = x;
	this.yAxis = y;
	this.dxAxis = dx;

	this.update = function(key){
		if(keys["37"]){
				this.xAxis -= this.dxAxis;
				dTarget = -1;
		}
		if (keys["39"]){
				this.xAxis += this.dxAxis;
				dTarget = 1;
		}
	}

  	this.render = function(){
  		ctx.beginPath();
		ctx.fillStyle = "rgb(0,0,0)";
		ctx.fillRect(this.xAxis, this.yAxis, 100, 20);
		ctx.closePath();
	}				
}


function Ball(x_Ball, y_Ball, dx_Ball, dy_Ball, radius){
	this.x = x_Ball;
	this.y = y_Ball;
	this.dx = dx_Ball;
	this.dy = dy_Ball;
	this.radius = radius;

	this.render = function(){
		ctx.beginPath();
		ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
		ctx.strokeStyle = "blue";
		ctx.fillStyle = `hsla(${360 - hue}, 100%, 50%, 1)`;
		ctx.stroke();
		ctx.fill();
		ctx.closePath();
	};
	
	this.update = function(){
		if(this.x + this.radius < 0 || this.x - this.radius > width){
			this.dx =  -this.dx;
		}
		if(this.y + this.radius < 0 || this.y - this.radius > height){
			this.dy = -this.dy;
		}
		this.x += this.dx;
		this.y += this.dy;
	}
}

function render(){
	ctx.fillStyle = `hsla(${hue}, 100%, 100%, 0.4)`;
	ctx.fillRect(0,0, width, height);

	ctx.fillStyle = "rgba(50,50,50, 0.2)";
	ctx.beginPath();
	ctx.arc(width/2, height/2, 15, 0, 2 * Math.PI, false);
	ctx.fill();

	ctx.fillStyle = "rgba(255,255,255,0.2)";
	ctx.beginPath();
	ctx.arc(width/2, height/2, 8, 0, 2 * Math.PI, false);
	ctx.fill();

	paddle.render();
	ball.render();
}

function update(){
	ball.update();
	paddle.update();

	if (ball.y + ball.radius > paddle.yAxis) {
		if (ball.x + ball.radius > paddle.xAxis &&
			ball.x - ball.radius < paddle.xAxis + 100) {
			ball.dy *= -1;
			ball.y = paddle.yAxis - ball.radius;
		}
	}

}

function loop() {
	update();
	render();

	dx += (dTarget - dx) * 0.05;
	dTarget *= 0.05;

	canvas.style.transform = `rotateY(${dx * 30}deg) rotateX(${dx * 20}deg)`;

	requestAnimationFrame(loop);
}
let ball = new Ball(100, 100, 3, 3, 13);
let paddle = new Paddle(480, 480, 6);

requestAnimationFrame(loop);