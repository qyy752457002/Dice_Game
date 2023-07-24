// Returns a random integer from 1 to 6;
var randomNumber1 = Math.floor(Math.random() * 6) + 1; 

// dice1.png - dice6.png;
var randomDiceImage = "dice" + randomNumber1 + ".png";

// images/dice1.png - images/dice6.png
var randomImageSource = "images/" + randomDiceImage; 

// select the first image
var image1 = document.querySelectorAll("img")[0]; 

image1.setAttribute("src", randomImageSource); 

// Returns a random integer from 1 to 6;
var randomNumber2 = Math.floor(Math.random() * 6) + 1; 

// dice1.png - dice6.png;
var randomDiceImage2 = "dice" + randomNumber2 + ".png";

// dice1.png - dice6.png;
var randomImageSource2 = "images/" + randomDiceImage2;

// select the second image
var image2 = document.querySelectorAll("img")[1];

image2.setAttribute("src", randomImageSource2); 

// If player 1 wins
if (randomNumber1 > randomNumber2) {
    // select h1 tag
    document.querySelector("h1").innerHTML = "🚩 Play 1 Wins!";
}

// If player 2 wins
else if (randomNumber1 < randomNumber2) {
    // select h1 tag
    document.querySelector("h1").innerHTML = "Play 2 Wins! 🚩";
}

// draw
else {
    // select h1 tag
    document.querySelector("h1").innerHTML = "Draw!";
}