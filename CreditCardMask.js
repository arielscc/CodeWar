// return masked string

//My Solution
function maskify(cc) {
  return cc.replace(/.(?!.{0,3}$)/g,'#')
}

//Other solution
function maskify(cc) {
  return cc.slice(0, -4).replace(/./g, '#') + cc.slice(-4);
}

//Other solution
// return masked string
function maskify(cc) {
  return cc.replace(/.(?=....)/g, '#');
}

console.log(maskify('123192318230'));
