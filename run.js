var graph = require('./inputs/graph.json');
var output = require('./output.js');
var toTable = require('./dataToTable.js');
var calcMaxToMin = require('./calc/calcMaxToMin.js');
var onlyMinTable = require('./onlyMinTable.js');
var mpmTimeCalc = require('./mpmTimeCalc.js');




var formatedData = toTable(graph);
var newData = onlyMinTable(graph);
// newData.forEach(function(item) {
//   delete item.maxWaitingTime;
// });

mpmTimeCalc(graph);

output('outputs/onlyMin.json', JSON.stringify(newData));

console.log('DONE');
