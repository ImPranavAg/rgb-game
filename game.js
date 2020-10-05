var numSquares = 6;
var colors = [];
var pickedColor;

var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");


init();


function init() {

    for(var i=0; i < modeButtons.length; i++) {
        modeButtons[i].addEventListener("click", function(){
    
            modeButtons[0].classList.remove("selected");
            modeButtons[1].classList.remove("selected");
            this.classList.add("selected");
    
            this.textContent === "Easy" ? numSquares = 3 : numSquares = 6;
            reset();
        });
    }

    for (var i=0; i < squares.length; i++) {
        // Set Initial Colors To Squares
        squares[i].style.backgroundColor = colors[i];
    
        //Set Click Listeners To Sqaures
        squares[i].addEventListener("click", function(){
    
            var clickedColor = this.style.backgroundColor;
    
            if (clickedColor === pickedColor) {
                messageDisplay.textContent = "Correct!";
                resetButton.textContent = "Play Again?"
                changeColors(clickedColor);
                h1.style.backgroundColor = clickedColor;
            } else {
                this.style.backgroundColor = "#232323";
                messageDisplay.textContent = "Try Again";
            }
        })
    }

    reset();
}



function reset() {
    colors = generateRandomColors(numSquares);
    // Pick New Ranom Color From Array
    pickedColor = pickColor();

    // Change Color Display
    colorDisplay.textContent = pickedColor;
    messageDisplay.textContent = "";
    resetButton.textContent = "New Game";

    // Change Colors Of Sqaure
    for (var i=0; i < squares.length; i++){
        if(colors[i]){
            squares[i].style.backgroundColor = colors[i];
            squares[i].style.display = "block";
        } else {
            squares[i].style.display = "none";
        }
    }

    h1.style.backgroundColor = 'steelblue';
}

resetButton.addEventListener("click", function() {
    reset();
});

colorDisplay.textContent = pickedColor;

function changeColors(color) {

    // Loop Through Every Square
    for (var i=0; i < squares.length; i++) {

        // Change Each Color To Match Correct Color
        squares[i].style.backgroundColor = color;
    }
     
}

function pickColor() {
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generateRandomColors(num) {
    // Make Array
    var arr = [];

    // Get 'num' Random Color & Push Into arr
    for (var i=0; i<num; i++) {
        arr.push(randomColor());
    }

    // Return That Array
    return arr;
}

function randomColor() {
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);

    return "rgb(" + r + ", " + g + ", " + b + ")";
}
