//Variables
var total = 0;
var win = 0;
var lose = 0;


// Logic for Crystals use array to store crystals
//for loop that iterates through each index of the crystal array
//
//access each index [i], then perform Math.random function for each crystal
//
var crystalArr =[];
while(crystalArr.length < 4){
  var randomCrystalValue = Math.floor(Math.random()*12) + 1;
  if (crystalArr.indexOf(randomCrystalValue) > -1) continue;

  //randomizes value of crystal
  crystalArr[crystalArr.length] = randomCrystalValue;
}

console.log(crystalArr);

var randomNumber = Math.floor(Math.random()*101+19);

//printing them in the div
$("#randomNumber").text(randomNumber);
$("#crystal1img").click(function clickCrystal(){
  total = total + 1;
  $("#userTotal").text(total);

});console.log(total);
$("#crystal2img").click(function clickCrystal(){
  alert(crystalArr[1]);
});
$("#crystal3img").click(function clickCrystal(){
  alert(crystalArr[2]);
});
$("#crystal4img").click(function clickCrystal(){
  alert(crystalArr[3]);
});
