module.exports = mpmTimeCalc;

var mainObj = {};

var mpmTimeCalculation = {};

var q = [];
var inQ = {};
var iter;

var faz = 0;
var durationOne = 0;
var waitingTime = 0;



function init(graph) {
  mainObj = graph;
  console.log(graph);
  Object.keys(graph).forEach(function(key, index) {
    if (index === 0) {
      mpmTimeCalculation[key] = {
        init: 0
      };
      q.push(key);
      inQ[key] = true;
    } else {
      mpmTimeCalculation[key] = {
        init: -10000
      };
    }
  });

}


function mpmTimeCalc(graph) {
  init(graph);
  while (q.length) {
    magic();
  }
  Object.keys(graph).forEach(function(key, index) {
    mpmTimeCalculation[key].faz = getHighestValue(mpmTimeCalculation[key]);
  });
  console.log(mpmTimeCalculation);
}

function getWaitingTime(node, index) {
  // console.log('NODE', node);
  return node.minWaitingTime[index];
}

function magic() {
  var currentKey;
  console.log('Q', q);
  iter = q.shift();
  faz = getHighestValue(mpmTimeCalculation[iter]);
  durationOne = mainObj[iter].duration;
  mainObj[iter].successor.forEach(function(s, index) {
    var result = {};
    currentKey = s;
    waitingTime = getWaitingTime(mainObj[s], index);
    console.log('iter', iter, 'successor', s);
    console.log('faz', faz, 'durationOne', durationOne, 'waitingTime', waitingTime);
    result[s] = faz + durationOne + waitingTime;
    mpmTimeCalculation[s][iter] = result[s];
    if (checkIfQ(result)) {
      q.push(currentKey);
      inQ[currentKey] = true;
    }
  });
}


function checkIfQ(result) {
  var max = false;
  Object.keys(result).forEach(function(key) {
    if (!inQ[key]) {
      Object.keys(mpmTimeCalculation[key]).forEach(function(otherKey) {
        if (result[key] > mpmTimeCalculation[key][otherKey]) {
          max = true;
        }
      });
    }
  });
  return max;
}


function getHighestValue(node) {
  var max = -10000;
  Object.keys(node).forEach(function(key) {
    if (node[key] > max) {
      max = node[key];
    }
  });
  return max;
}
