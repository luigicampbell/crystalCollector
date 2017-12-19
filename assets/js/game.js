
var target = function(){
  var a = Math.floor((Math.random() * 120) + 19);
  return a;
  console.log(a);
}

target();

$('#randomNumber').text(target());
console.log();
