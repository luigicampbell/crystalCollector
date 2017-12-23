//Variables
var total = 0;
var win = 0;
var lose = 0;
//Crystal Object
var crystal = {
  diamond:
  {
    name: "Diamond",
    value: 0
  },
  sapphire:
  {
    name: "Sapphire",
    value: 0
  },
  ruby:
  {
    name: "Ruby",
    value: 0
  },
  emerald:
  {
    name: "Emerald",
    value: 0
  }
};
//Shuffles Values for Crystals
function shuffle (){
crystal.diamond.value = Math.floor(Math.random()*12)+1;
crystal.sapphire.value = Math.floor(Math.random()*12)+1;
crystal.ruby.value = Math.floor(Math.random()*12)+1;
crystal.emerald.value = Math.floor(Math.random()*12)+1;
console.log(crystal.diamond.value);
console.log(crystal.sapphire.value);
console.log(crystal.ruby.value);
console.log(crystal.emerald.value);
$("#userTotal").removeClass("pulse");
};
//Random Number for User to Match
function generateRandomNumber() {
randomNumber = Math.floor(Math.random()*101+19);
$("#matchMe").text(" "+ randomNumber);
};

//Crystal Buttons attaching Value to Crystal Click
function crystalButtons(){
  $("#crystal1img").click(function clickCrystal(){
    addedCrystalvalue = crystal.diamond.value;
    total = total + addedCrystalvalue;
    $("#userTotal").text(total);
    checkUserTotal();
  })

  $("#crystal2img").click(function clickCrystal(){
    addedCrystalvalue = crystal.sapphire.value;
    total = total + addedCrystalvalue;
    $("#userTotal").text(total);
    checkUserTotal();

  })

  $("#crystal3img").click(function clickCrystal(){
    addedCrystalvalue = crystal.ruby.value;
    total = total + addedCrystalvalue;
    $("#userTotal").text(total);
    checkUserTotal();

  })

  $("#crystal4img").click(function clickCrystal(){
    addedCrystalvalue = crystal.emerald.value;
    total = total + addedCrystalvalue;
    $("#userTotal").text(total);
    checkUserTotal();

  })

};
//Checks if User Total Matches Random Number for Win/Lose Condition
function checkUserTotal(){
  if (total >= randomNumber - 5 ){
    $("#userTotal").addClass("pulse");
  }
  if (total > randomNumber) {
    lose ++;
    shuffle();
    total = 0;
    $("#losses").text(" losses: " + lose);
    generateRandomNumber();
    $("#userTotal").text("");
  } else if (total ===  randomNumber) {
    win ++;
    shuffle();
    total = 0;
    $("#wins").text("wins: " + win);
    generateRandomNumber();
    $("#userTotal").text("");
  }
};
//Functions
generateRandomNumber();
crystalButtons();
shuffle();
//red balloons
