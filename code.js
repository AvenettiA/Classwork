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

//checkCreds funtion for strings.html
function checkCreds(){
    console.log("checkCreds() started...");
    document.getElementById("loginStatus").innerHTML = "Status of login";
var firstName;
var lastName;
var zipCode;
var fullName;
var fullNameLength;

//this will place the characters under the fName id in the firstname var. 
firstName = document.getElementById("fName").value;
console.log("The first name is inputed as " + firstName);

lastName = document.getElementById("lName").value;
console.log("The last name is inputed as " + lastName);

zipCode = document.getElementById("zipCode").value;
console.log("The zip code is inputed as " + zipCode);

fullName = firstName + " " + lastName;
console.log("The full name is inputed as " + fullName);

fullNameLength = fullName.length;
console.log("The full name has " + fullNameLength + " characters");

zipCodeNumb = parseInt(zipCode);
console.log("The zip code number is " + zipCodeNumb);

if(fullNameLength > 20){
    document.getElementById("loginStatus").innerHTML = "Invalid name, please try again";
} else if (zipCode.length != 5){
    document.getElementById("loginStatus").innerHTML = "Invalid zip code, please try again";
} else{
    alert("User credientals passed, welcome to the site, " + fullName);
}


}