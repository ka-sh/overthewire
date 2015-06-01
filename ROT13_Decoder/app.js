var _ = require('underscore');
//Gur cnffjbeq vf 5Gr8L4qetPEsPk8htqjhRK8XSP6x2RHh
execute();

function execute() {
  var input = getParameters();
  var alphaCode = generateAlphaCode();
  console.log(decode(input, generateAlphaCode()))
}



function generateAlphaCode() {
  return _.range('a'.charCodeAt(0), 'z'.charCodeAt(0) + 1);
}

function getParameters() {
  var str = '';
  for (var i = 2; i < process.argv.length; i++) {
    str += process.argv[i] + " ";
  }
  return str.trim();
}

function decode(input, alpha) {
  var decoded = '';
  for (var i = 0; i < input.length; i++) {
    if (input[i] != ' '&&isNaN(input[i])) {
      var decodedCh = '';
      var index = alpha.indexOf(input[i].toLowerCase()
        .charCodeAt());
      decodedCh = String.fromCharCode(alpha[rotate(index)]);
      // console.log(input[i]," ",String.fromCharCode(alpha[index])," ",index);
      if (input[i] == String.fromCharCode(alpha[index])) {
        decoded += decodedCh;
      } else {
        decoded += decodedCh.toUpperCase();
      }
    } else {
      decoded += input[i];
    }
  }
  return decoded;
}

function rotate(i) {
  console.log(i);
  var index = i- 13;
  if (index < 0) {
    return index +generateAlphaCode().length;
  } else {
    return index;
  }
}
