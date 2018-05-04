// Variables
var total = 0;
var win = 0;
var lose = 0;

// Crystal Image src's
var crystalImages =[
  "assets/images/diamond.png",
  "assets/images/sapphire.png",
  "assets/images/ruby.gif",
  "assets/images/emerald.png"
];

// Sound Function for Crysta lButtons
function play(sound){
  var audio = document.getElementById("sfx");
  audio.setAttribute('src', sound);
  audio.play();
}
// Sound Toggle Function
function stopAudio(){
  var audio = document.getElementById("sfx");
  audio.stop();
}
// Crystal Object
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


// Make an empty array to store shuffled crystals
let shuffledCrystals = [];

// Shuffles Crystals
function shuffleCrystals (){

  for (var i=0; i<5; i++) {
      shuffledCrystals.push(crystalImages.splice(Math.random()*(crystalImages.length-1),1).pop());
  }


};

// Populates Dom with Crystals
function populateCrystals(){
  $("#crystal1img")
                  .attr('src',
                  shuffledCrystals[0] );
  $("#crystal2img")
                  .attr('src',
                  shuffledCrystals[1] );
  $("#crystal3img")
                  .attr('src',
                  shuffledCrystals[2] );
  $("#crystal4img")
                  .attr('src',
                  shuffledCrystals[3] );
}

// Shuffles Values for Crystals
function shuffle (){
  crystal.diamond.value = Math.floor(Math.random()*12)+2;
  crystal.sapphire.value = Math.floor(Math.random()*12)+2;
  crystal.ruby.value = Math.floor(Math.random()*12)+2;
  crystal.emerald.value = Math.floor(Math.random()*12)+2;
  console.log("TL: " + crystal.diamond.value);
  console.log("TR: " + crystal.sapphire.value);
  console.log("BL: " + crystal.ruby.value);
  console.log("BR: " + crystal.emerald.value);
  console.log("-------------");
  $("#userTotal").removeClass("pulse");
};
// Random Number for User to Match
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
// Checks if User Total Matches Random Number for Win/Lose Condition
function checkUserTotal(){
  if (total >= randomNumber - 5 ){
    $("#userTotal").addClass("pulse");
  }
  if (total > randomNumber) {
    lose ++;
    shuffle();
    total = 0;
    $("#losses").text(" losses: " + lose);
    $("#instructions")
                    .addClass("pulse")
                    .text("Nice Try!");
    generateRandomNumber();
    shuffleCrystals ();
    populateCrystals();
    $("#userTotal").text("");
  } else if (total ===  randomNumber) {
    win ++;
    shuffle();
    total = 0;
    $("#instructions")
    // Change this to a background animation
                    .addClass("pulse")
                    .text("Awesome Job!");
    $("#wins").text("wins: " + win);
    generateRandomNumber();
    shuffleCrystals ();
    populateCrystals();
    $("#userTotal").text("");
  }
};
// Functions
shuffleCrystals();
populateCrystals();
generateRandomNumber();
crystalButtons();
shuffle();
// red balloons
