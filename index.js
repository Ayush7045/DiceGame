

var playerOne=Math.floor(Math.random()*6)+1;
var playerTwo=Math.floor(Math.random()*6)+1;

var randomImageSrc1="images/dice"+playerOne+".png";
var randomImageSrc2="images/dice"+playerTwo+".png";

document.querySelector(".img1").setAttribute("src", randomImageSrc1);
document.querySelector(".img2").setAttribute("src", randomImageSrc2);

if(playerOne> playerTwo){
    document.querySelector("h1").textContent="Player 1 Wins!";
}
else if(playerTwo>playerOne)
{
    document.querySelector("h1").textContent="Player 2 Wins!";
}
else{
    document.querySelector("h1").textContent="Its a Tie!";
}

