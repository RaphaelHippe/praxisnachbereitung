module.exports = mpmTimeCalc;

var mainObj = {};

var mpmTimeCalculation = {};

var q = [];

function init(graph) {
  mainObj = graph;
  Object.keys(graph).forEach(function(key, index) {
    if (index === 0) {
      mpmTimeCalculation[key] = {
        i: 'init',
        value: 0
      };
      q.push(key);
    } else {
      mpmTimeCalculation[key] = {
        i: 'init',
        value: -10000
      };
    }
  });

}


function mpmTimeCalc(graph) {
  init(graph);



  console.log(mpmTimeCalculation);
  console.log(q);
}



function magic(node) {

}
