module.exports = gMinus;

var gMinusObj = {};
var m = [];

function init(graph) {
  Object.keys(graph).forEach(function(key) {
    gMinusObj[key] = {
      init: {
        gMinus: graph[key].predecessor.length,
        fz: 0
      }
    };
  });
  m.push(0);
}


function gMinus(graph) {
  init(graph);
  while (m.length) {
    magic(graph);
  }

  Object.keys(gMinusObj).forEach(function(key) {
    gMinusObj[key].fz = getHighestFZ(gMinusObj[key]);
  });
  console.log(gMinusObj);
  return gMinusObj;
}

var afzk, dki;

function magic(graph) {
  console.log('M', m);
  var iter = m.sort(function(a, b) {
    return a - b;
  }).shift();
  // console.log('ITER', iter);
  graph[iter.toString()].successor.forEach(function(i, index) {
    afzk = getHighestFZ(gMinusObj[iter]);
    dki = graph[iter.toString()].duration[index];
    // console.log('AFZK', afzk, 'DKI', dki);
    gMinusObj[i][iter] = {};
    gMinusObj[i][iter].fzk = afzk + dki;
    gMinusObj[i][iter].gMinus = getLowestGMinus(gMinusObj[i]) - 1;
    if (gMinusObj[i][iter].gMinus === 0) {
      m.push(i);
    }

  });
}


function getLowestGMinus(node) {
  var min = 10000;
  Object.keys(node).forEach(function(key) {
    if (node[key].gMinus < min) {
      min = node[key].gMinus;
    }
  });
  return min;
}

function getHighestFZ(node) {
  // console.log('node', node);
  var max = 0;
  Object.keys(node).forEach(function(key) {
    if (node[key].fzk > max) {
      max = node[key].fzk;
    }
  });
  return max;
}
