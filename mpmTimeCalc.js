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
  // console.log(graph);
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
  return mpmTimeCalculation;
}

function getWaitingTime(node, index) {
  return node.minWaitingTime[index];
}

function magic() {
  var currentKey;
  console.log('Q', q);
  iter = q.shift();
  inQ[iter] = false;
  faz = getHighestValue(mpmTimeCalculation[iter]);
  durationOne = mainObj[iter].duration;
  mainObj[iter].successor.forEach(function(s, index) {
    var result = {};
    currentKey = s;
    waitingTime = getWaitingTime(mainObj[s.toString()], mainObj[s.toString()].predecessor.indexOf(parseInt(iter)));
    // console.log('iter', iter, 'successor', s);
    // console.log('faz', faz, 'durationOne', durationOne, 'waitingTime', waitingTime);
    result[s] = faz + durationOne + waitingTime;
    if (checkIfQ(result, currentKey)) {
      q.push(currentKey);
      inQ[currentKey] = true;
    }
    var iterKey = iter;
    if (mpmTimeCalculation[s][iterKey]) {
      iterKey = iter + '_new';
      if (mpmTimeCalculation[s][iterKey]) {
        iterKey = iter + '_new_new';
      }
      if (mpmTimeCalculation[s][iterKey]) {
        iterKey = iter + '_new_new_new';
      }
    }
    mpmTimeCalculation[s][iterKey] = result[s];
  });
}


function checkIfQ(result, myCurrentKey) {
  var max = false;
  var theKey;
  Object.keys(result).forEach(function(key) {
    theKey = key;
  });
  if (!inQ[theKey] && result[theKey] > getHighestValue(mpmTimeCalculation[theKey])) {
    max = true;
  }
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
