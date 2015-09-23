var graph = require('./inputs/graph.json');
var output = require('./output.js');
var calcMaxToMin = require('./calc/calcMaxToMin.js');
var onlyMinTable = require('./onlyMinTable.js');
var mpmTimeCalc = require('./mpmTimeCalc.js');


mpmTimeCalc(graph);


var newData = onlyMinTable(graph);
// newData.forEach(function(item) {
//   delete item.maxWaitingTime;
// });

output('outputs/onlyMin.json', JSON.stringify(newData));

console.log('DONE');
