var canvas = document.querySelector('#screen');
var ctx = canvas.getContext("2d");

canvas.width = 1000;
canvas.height = 500;

x = 480;
y = 450;
dx = 6;
function controlPaddle(x, y, dx){
	this.x = x;
	this.y = y;
	this.dx = dx;

	this.init = function(){
		clearW= 1000;
		clearH=500;
		window.addEventListener("keydown", update, false);
		render();
		
	}
	// this.init();
	function update(key){
			if(key.keyCode == "37"){
				this.x -= this.dx;
				console.log(this.x);
		}
			if (key.keyCode == "39"){
				this.x += this.dx;
				// this.render();
				console.log(this.x);
		}
		render();
	}
  	 function render(){
		ctx.clearRect(0, 0, clearW , clearH);
		ctx.fillStyle = "rgb(0,0,0)";
		ctx.fillRect(this.x, this.y, 100, 20);
	}
}

var move_paddle = new controlPaddle(x, y, dx);
move_paddle.init();