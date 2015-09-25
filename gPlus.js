module.exports = gPlus;

var gPlusObj = {};
var m = [];

function init(graph) {
  Object.keys(graph).forEach(function(key, index) {
    gPlusObj[key] = {
      init: {
        gPlus: graph[key].successor.length,
        sz: 15
      }
    };
    if (index === Object.keys(graph).length - 1) {
      m.push(key);
    }
  });
}


function gPlus(graph) {
  init(graph);
  while (m.length) {
    magic(graph);
  }

  Object.keys(gPlusObj).forEach(function(key) {
    gPlusObj[key].sz = getLowestSZ(gPlusObj[key]);
  });
  console.log(gPlusObj);
  return gPlusObj;
}

var aszk, dik;

function magic(graph) {
  console.log('M', m);
  // var n = m.sort();
  // console.log('n', n);
  var iter = m.sort(function(a, b) {
    return a - b;
  }).shift();
  console.log('ITER', iter);
  graph[iter].predecessor.forEach(function(i, index) {
    aszk = getLowestSZ(gPlusObj[iter]);
    dik = graph[i].duration[graph[i].successor.indexOf(parseInt(iter))];
    console.log('ASZK', aszk, 'DIK', dik);
    gPlusObj[i][iter] = {};
    gPlusObj[i][iter].szk = aszk - dik;
    gPlusObj[i][iter].gPlus = getLowestgPlus(gPlusObj[i]) - 1;
    if (gPlusObj[i][iter].gPlus === 0) {
      m.push(i);
    }

  });
}


function getLowestgPlus(node) {
  var min = 10000;
  Object.keys(node).forEach(function(key) {
    if (node[key].gPlus < min) {
      min = node[key].gPlus;
    }
  });
  return min;
}

function getLowestSZ(node) {
  // console.log('node', node);
  var min = 15;
  Object.keys(node).forEach(function(key) {
    if (node[key].szk < min) {
      min = node[key].szk;
    }
  });
  return min;
}
