//My Solution
var isSquare = function(n){
  if( n < 0){
    return false
  }
  return !(Math.sqrt(n)+ '').includes('.') && true
}

//Other Solutions

function isSquare(n) {
  return Math.sqrt(n) % 1 === 0;
}


function isSquare(n){
  return Number.isInteger(Math.sqrt(n));
}
