var graph = require('./inputs/graph.json');
var output = require('./output.js');
var toTable = require('./dataToTable.js');
var calcMaxToMin = require('./calc/calcMaxToMin.js');

// var formatedData = toTable(JSON.stringify(graph));
var formatedData = toTable(graph);

output('outputs/onlyMin.json', formatedData);

console.log('DONE');
