var p1 = Math.floor(Math.random()*6)+1;
var p2 = Math.floor(Math.random()*6)+1;

var dices = document.querySelectorAll("img");
var randomimage1 = "images/dice"+p1+".png";
var randomimage2 = "images/dice"+p2+".png";
dices[0].setAttribute("src",randomimage1);
dices[1].setAttribute("src",randomimage2);