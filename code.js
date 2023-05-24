//write a function to play craps on my index page
function playcraps(){
    console.log("playcraps() started");
    //step one: roll 2 6 sided dice
    var die1;
    var die2;
    die1 = Math.ceil(6 * Math.random());
    die2 = Math.ceil(6 * Math.random());
    console.log("die1 is:" + die1);
    console.log("die2 is:" + die2);
    //step 1b print results on screen
document.getElementById("die1Res").innerHTML = die1;
document.getElementById("die2Res").innerHTML = die2;
    //step two: calculate the sum of die 1 and die 2.
var diceSum = die1 + die2;
console.log("The sume of the dice is:" + diceSum);
document.getElementById("diceSum").innerHTML = diceSum;

    //step three: does the sum equal 7 or 11, meaning are you a loser
if(diceSum==7||diceSum==11){
    document.getElementById("gameRes").innerHTML = "Ha ha! You lose, loser";
}else if(die1 == die2 && die1%2 == 0){
    //step four: did the dice come up doubles> are they evens? if so you win.
    document.getElementById("gameRes").innerHTML = "You win! That was easy!";
}else{
    //step five: otherwise push again.
    document.getElementById("gameresult").innerHTML = 
    "You did not lose, You did win, be cool and please play again!.";
}
}