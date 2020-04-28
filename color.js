var numSquares = 6
var color = generateRandomColors(numSquares);
var squares = document.querySelectorAll(".square");
var pickedcolor = pickColor();
var colorDisplay = document.getElementById("colordisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");


easyBtn.addEventListener("click", function () {
  easyBtn.classList.add("selected");
  hardBtn.classList.remove("selected");
  numSquares = 3
  color = generateRandomColors(numSquares);
  pickedcolor = pickColor();
  colorDisplay.textContent = pickedcolor;

  for (var i = 0; i < squares.length; i++) {
    if (color[i]) {
      squares[i].style.backgroundColor = color[i];
    } else {
      squares[i].style.display = "none";
    }
  }
});

hardBtn.addEventListener("click", function () {
  hardBtn.classList.add("selected");
  easyBtn.classList.remove("selected");
  numSquares = 6
  color = generateRandomColors(numSquares);
  pickedcolor = pickColor();
  colorDisplay.textContent = pickedcolor;

  for (var i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = color[i];

    squares[i].style.display = "block";
  }
});

resetButton.addEventListener("click", function () {
  //generate all new colors
  color = generateRandomColors(numSquares);
  //pcik a new random color from array
  pickedcolor = pickColor();
  //chanfe color display to match picked color
  colorDisplay.textContent = pickedcolor;
this.textContent = 
  messageDisplay.textContent = "New Colors"
  //change colors of squares
  for (var i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = color[i];
  }
  h1.style.backgroundColor = "steelblue";
});

colorDisplay.textContent = pickedcolor;

for (var i = 0; i < squares.length; i++) {
  //add initial collor to the squares
  squares[i].style.backgroundColor = color[i];

  //addd click listeners to squares
  squares[i].addEventListener("click", function () {
    //grab color of clicked square
    var clickedColor = this.style.backgroundColor;
    //compare color to pickedColor
    if (clickedColor === pickedcolor) {
      messageDisplay.textContent = "Correct!";
      resetButton.textContent = "play again?";
      changeColors(clickedColor);
      h1.style.backgroundColor = clickedColor;
    } else {
      this.style.backgroundColor = "#232323";
      messageDisplay.textContent = "try again";
    }
  });
}

function changeColors(colors) {
  for (var i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = colors;
  }
}

function pickColor() {
  var random = Math.floor(Math.random() * color.length);
  return color[random];
}

function generateRandomColors(num) {
  //make an array
  var arr = [];
  //repete num times
  for (var i = 0; i < num; i++) {
    //get random color and push into arr
    arr.push(randomColor());
  }
  // return that array
  return arr;
}

function randomColor() {
  //pick red 0 to 255
  var r = Math.floor(Math.random() * 256);
  //pick green 0 to 255
  var g = Math.floor(Math.random() * 256);
  //pick blue 0 to 255
  var b = Math.floor(Math.random() * 256);
  return "rgb(" + r + ", " + g + ", " + b + ")";
}
