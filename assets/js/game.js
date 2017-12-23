// //Variables
// var total = 0;
// var win = 0;
// var lose = 0;
// var addedCrystalvalue = 0;
// var crystalArr =[];
//
// //Shuffles the Array after Win/Lose
//
// function shuffle() {
//   //Stores Random Number to Match
//   randomNumber = Math.floor(Math.random()*101+19);
//   $("#matchMe").text(" "+ randomNumber);
// 
//   while(crystalArr.length < 4){
//     var randomCrystalValue = Math.floor(Math.random()*12) + 1;
//     if (crystalArr.indexOf(randomCrystalValue) > -1) continue;
//
//     //Randomizes Value of Crystal
//     crystalArr[crystalArr.length] = randomCrystalValue;
//   }
//   console.log(crystalArr);
// }
// //array is empty here
// console.log(crystalArr);
// //Function For Buttons
// //Adds Crystals to User Total
// function crystalButtons(){
//   $("#crystal1img").hover(function clickCrystal(){
//     addedCrystalvalue = crystalArr[0];
//     total = total + addedCrystalvalue;
//     $("#userTotal").text(total);
//   });
//
//   $("#crystal2img").hover(function clickCrystal(){
//     addedCrystalvalue = crystalArr[1];
//     total = total + addedCrystalvalue;
//     $("#userTotal").text(total);
//   });
//
//   $("#crystal3img").hover(function clickCrystal(){
//     addedCrystalvalue = crystalArr[2];
//     total = total + addedCrystalvalue;
//     $("#userTotal").text(total);
//   });
//
//   $("#crystal4img").hover(function clickCrystal(){
//     addedCrystalvalue = crystalArr[3];
//     total = total + addedCrystalvalue;
//     $("#userTotal").text(total);
//   });
// }
// //My array is empty here
// console.log(crystalArr);
//
// //Calling My Functions
// shuffle();
// crystalButtons();
// //write some animations for instructions
// function checkUserTotal(){
//   if (total > randomNumber) {
//     lose ++;
//     shuffle();
//     total = 0;
//     $("#losses").text("losses: " + lose);
//   } else if (total =  randomNumber) {
//     win ++;
//     shuffle();
//     total = 0;
//     $("#wins").text("wins: " + win);
//   }
// }
// checkUserTotal();
// console.log("wins: " + win);
//
// console.log("losses: " + lose);
