canvas = document.getElementById('myCanvas')
ctx = cavas.getContext("2d");

img_width = 300;
img_height = 100;

var img_image;

function add() {
	img_imgTag = new Image();
	img_imgTag.onload = uploadimg;
	img_imgTag.src = img_image;
}

function uploadimg() {
	ctx.drawImage(img_imgTag, img_x, img_y, img_width, img_height);
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keypressed);

	if((keyPressed >=97 && keyPressed<=122)|| (keyPressed >=65 && keyPressed<=90))
	{
		alphabetkey();
		document.getElementById("d1").innerHTML="você pressionou uma tecla do alfabeto";
		console.log("alphabetkey");
	}
	else if(keyPressed >=48 && keyPressed<=57)
	{
		numberkey();
		document.getElementById("d1").innerHTML="você pressionou uma tecla numerica";
		console.log("number key");
	}
	else if(keyPressed >=37 && keyPressed<=40)
	{
		arrowkey();
		document.getElementById("d1").innerHTML="você pressionou uma tecla direcional";
		console.log("number key");
	}
	else if((keyPressed ==17) || (keyPressed ==18 || keyPressed ==27))
	{
		specialkey();
		document.getElementById("d1").innerHTML="você pressionou uma tecla especial";
		console.log("special key");
	}
	else
	{
		otherkey();
		document.getElementById("d1").innerHTML="você pressionou uma tecla especial";
	}
}	

function alphabetkey()
{
	img_image="alfabeto.png";
	add();
}
function numberkey()
{
	img_image="número.png";
	add();
}
function arrowkey()
{
	img_image="direcional.png";
	add();
}
function specialkey()
{
	img_image="special.png";
	add();
}
function otherkey()
{
	img_image="outras.png";
	add();
}