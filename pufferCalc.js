module.exports = pufferCalc;

var returnObj = {
  gp: {},
  fp: {},
  frp: {},
  up: {}
};


function pufferCalc(gMinus, gPlus, cpmGraph) {
  Object.keys(cpmGraph).forEach(function(key) {
    cpmGraph[key].successor.forEach(function(s, index) {
      // key = i and s = j
      // i -> j
      var newKey = key + '_' + s;
      // GP
      returnObj.gp[newKey] = gpFpFrp(gPlus[s].sz, gMinus[key].fz, cpmGraph[key].duration[index]);
      // FP
      returnObj.fp[newKey] = gpFpFrp(gMinus[s].fz, gMinus[key].fz, cpmGraph[key].duration[index]);
      // FRP
      returnObj.frp[newKey] = gpFpFrp(gPlus[s].sz, gPlus[key].sz, cpmGraph[key].duration[index]);
      // UP
      returnObj.up[newKey] = up(gMinus[s].fz, gPlus[key].sz, cpmGraph[key].duration[index]);
    });
  });
  console.log(returnObj);
  return returnObj;
}




function gpFpFrp(a, b, c) {
  return a - b - c;
}

function up(a, b, c) {
  // console.log(a, '-', b, '-', c);
  var d = a - b - c;
  if (d > 0) {
    return d;
  }
  return 0;
}
