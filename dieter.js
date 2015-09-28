var mpmTimeCalcJson;
module.exports = dieter;



var mainObj = {};

var dieterTable = {};

var q = [];
var inQ = {};
var iter;

var saz;
var durationOne = 0;
var waitingTime = 0;

function dieter(graph, myMpmTimeCalcJson) {
  mpmTimeCalcJson = myMpmTimeCalcJson;
  init(graph);
  while (q.length) {
    magic();
  }
  Object.keys(graph).forEach(function(key, index) {
    dieterTable[key].saz = getLowestValue(dieterTable[key]);
  });
  // console.log(dieterTable);
  return dieterTable;
}

function init(graph) {
  mainObj = graph;
  // console.log(graph);
  Object.keys(graph).forEach(function(key, index) {
    if (graph[key].name === 'ENDE') {
      dieterTable[key] = {
        init: mpmTimeCalcJson[key].faz
      };
      q.push(key);
      inQ[key] = true;
    } else {
      dieterTable[key] = {
        init: 10000
      };
    }
  });

}


function getDuration(node) {
  return node.duration;
}

function magic() {
  var currentKey;
  console.log('Q', q);
  iter = q.shift();
  inQ[iter] = false;
  // console.log(inQ);
  saz = getLowestValue(dieterTable[iter]);
  mainObj[iter].predecessor.forEach(function(ps, index) {
    durationOne = getDuration(mainObj[ps]);
    var result = {};
    currentKey = ps;
    waitingTime = mainObj[iter].minWaitingTime[index];
    // console.log('------------------------');
    // console.log('mainObj[ps]', mainObj[ps]);
    // console.log('iter', iter, 'predecessor', ps, 'index', index);
    // console.log('saz', saz, 'waitingTime', waitingTime, 'durationOne', durationOne);
    result[ps] = saz - waitingTime - durationOne;
    if (checkIfQ(result, currentKey)) {
      q.push(currentKey);
      inQ[currentKey] = true;
    }
    var iterKey = iter;
    if (dieterTable[ps][iterKey]) {
      iterKey = iter + '_new';
      if (dieterTable[ps][iterKey]) {
        iterKey = iter + '_new_new';
      }
    }
    dieterTable[ps][iterKey] = result[ps];
  });
}


function checkIfQ(result, myCurrentKey) {
  var min = false;
  var theKey;
  Object.keys(result).forEach(function(key) {
    theKey = key;
  });
  // console.log('inQ', inQ[theKey], 'indexOf', q.indexOf(myCurrentKey));
  // console.log('vergleich', result[theKey], getLowestValue(dieterTable[theKey]));
  if (!inQ[theKey] && result[theKey] < getLowestValue(dieterTable[theKey])) {
    min = true;
  }
  // Object.keys(dieterTable[theKey]).forEach(function(otherKey) {
  // });
  return min;
}


function getLowestValue(node) {
  var min = 10000;
  Object.keys(node).forEach(function(key) {
    if (node[key] < min) {
      min = node[key];
    }
  });
  return min;
}
