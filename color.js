
var numbSquares = 6;
var colors = generateRandomColors(numbSquares);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");


easyBtn.addEventListener("click", function(){
	hardBtn.classList.remove("selected");
	easyBtn.classList.add("selected");
	numbSquares = 3;
	colors = generateRandomColors(numbSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for(var i = 0; i < squares.length; i++){
		if(colors[i]){
			squares[i].style.background = colors[i];

		}else{
			squares[i].style.display = "none";
		}
	}

});

hardBtn.addEventListener("click", function(){
	hardBtn.classList.add("selected");
	easyBtn.classList.remove("selected");	
	numbSquares = 6;
	colors = generateRandomColors(numbSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for(var i = 0; i < squares.length; i++){
		
			squares[i].style.background = colors[i];
			squares[i].style.display = "block";
	}

});


resetButton.addEventListener("click", function(){
	//generate all new color
	colors = generateRandomColors(numbSquares);
	//pick a new random color frm array
	pickedColor = pickColor();
	//change colorDisplay to match picked Color
	colorDisplay.textContent = pickedColor;
	this.textContent = "New colors"

	messageDisplay.textContent = "";

	//change colors of squares
	for(var i = 0; i < squares.length; i++){
		squares[i].style.background = colors[i];
	
	}
	h1.style.background = "steelblue";

});

	colorDisplay.textContent = pickedColor;


for(var i = 0; i < squares.length; i++){
	//add inital  colors to squares
	squares[i].style.background  = colors[i];

	//add click listeners to squares
	squares[i].addEventListener("click", function(){

		//grab color of clicked square
	var clickedColor = this.style.background;

		//compare color to pickedColor
	if (clickedColor === pickedColor) {
		messageDisplay.textContent = "CORRECT";
		
		changeColors(clickedColor);
		h1.style.background = clickedColor;
		resetButton.textContent = "Play Again"


	}else{
		this.style.background = " #232323";
		messageDisplay.textContent = "TRY AGAIN"
	}
		});
	}

	function changeColors(color){
		//Loop through all squares
	for(var i = 0; i < squares.length; i++){
		//Change each color to match given color
		squares[i].style.background = color;
	}
}

	function pickColor() {
		var random = Math.floor(Math.random()  * colors.length)
		return colors[random];		
	}

	function generateRandomColors(num){
		//make an array
		var arr = []

		//repeat num times
		for(var i = 0; i < num; i++){
			//get rabdom color and push into arr
			arr.push(randomColor())
			
		}
		//return that array

		return arr;
	}

		function randomColor(){

			//pick a "red" from 0 - 255
		var r = 	Math.floor(Math.random() * 256)
			//pick a "green" from 0 - 255
		var g = 	Math.floor(Math.random() * 256)
			//pick a "blue" from 0 - 255
		var b = 	Math.floor(Math.random() * 256)

		return "rgb(" + r + ", " + g + ", " + b + ")";

		}
