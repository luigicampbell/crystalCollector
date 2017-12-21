//Variables
var total = 0;
var win = 0;
var lose = 0;
var addedCrystalvalue = 0;
var crystalArr =[];
var randomNumber;

//Shuffles the Array after Win/Lose
function shuffle() {

  while(crystalArr.length < 4){
    var randomCrystalValue = Math.floor(Math.random()*12) + 1;
    if (crystalArr.indexOf(randomCrystalValue) > -1) continue;

    //randomizes value of crystal
    crystalArr[crystalArr.length] = randomCrystalValue;
  }
console.log(crystalArr);

  //Score to Match
  randomNumber = Math.floor(Math.random()*101+19);
}

//Calling My Functions
shuffle();
// $("#wins").text("wins: " + win);
// $("#losses").text(" losses: " + lose);


//write some animations for instructions

//Printing Score to Match
$("#randomNumber").text(randomNumber);

$("#crystal1img").click(function clickCrystal(){
  addedCrystalvalue = crystalArr[0];
  total = total + addedCrystalvalue;
  $("#userTotal").text(total);
});

//Testing Output for Score Matcher
console.log(total);

$("#crystal2img").click(function clickCrystal(){
  addedCrystalvalue = crystalArr[1];
  total = total + addedCrystalvalue;
  $("#userTotal").text(total);
});

$("#crystal3img").click(function clickCrystal(){
  addedCrystalvalue = crystalArr[2];
  total = total + addedCrystalvalue;
  $("#userTotal").text(total);
});

$("#crystal4img").click(function clickCrystal(){
  addedCrystalvalue = crystalArr[3];
  total = total + addedCrystalvalue;
  $("#userTotal").text(total);
});

//Win and Lose Conditions
if (total > randomNumber) {
  lose ++;
  shuffle();
  total = 0;
  $("#losses").text("losses: " + lose);
}
console.log("losses: " + lose);

if (total =  randomNumber) {
  win ++;
  shuffle();
  total = 0;
  $("#wins").text("wins: " + win);
}
console.log("wins: " + win);
