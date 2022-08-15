const ftoc = function(farenheight) {
  
  var celcius;

  let x = farenheight - 32;
  const y = 5/9;

  celcius = x * y;

  let rounded = Math.round(celcius*10) / 10;

  return rounded;

};

const ctof = function(celcius) {

  var faren;

  let x = celcius * (9/5);

  faren = x + 32;

  let rounded = Math.round(faren * 10) / 10;

  return rounded;

};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
