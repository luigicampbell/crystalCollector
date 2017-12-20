// Logic for Crystals
var crystal1 = function(){
  var a = Math.floor((Math.random() * 120) + 19);
  return a;
  console.log(a);
}

var crystal2 = function(){
  var a = Math.floor((Math.random() * 120) + 19);
  return a;
  console.log(a);
}

var crystal3 = function(){
  var a = Math.floor((Math.random() * 120) + 19);
  return a;
  console.log(a);
}

var crystal4 = function(){
  var a = Math.floor((Math.random() * 120) + 19);
  return a;
  console.log(a);
}

//Calling the functions for the crystals
crystal1();
crystal2();
crystal3();
crystal4();

//printing them in the div
$('#crystal1').text(crystal1());
$('#crystal2').text(crystal2());
$('#crystal3').text(crystal3());
$('#crystal4').text(crystal4());
console.log(crystal1());
console.log(crystal2());
console.log(crystal3());
console.log(crystal4());
