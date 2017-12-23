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

crystal.diamond.value = Math.floor(Math.random()*12)+1;
crystal.sapphire.value = Math.floor(Math.random()*12)+1;
crystal.ruby.value = Math.floor(Math.random()*12)+1;
crystal.emerald.value = Math.floor(Math.random()*12)+1;


console.log(crystal.diamond.value);
console.log(crystal.sapphire.value);
console.log(crystal.ruby.value);
console.log(crystal.emerald.value);
// var shuffleValues = {
//   a:
//   b:
//   c:
//   d:
//   }
// };
