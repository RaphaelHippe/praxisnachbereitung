// var graph = require('./inputs/graphKitchen.json');
// var graph = require('./inputs/graph.json');
var graph = require('./outputs/onlyMin.json');
var output = require('./output.js');
// var onlyMinTable = require('./onlyMinTable.js');
// var mpmTimeCalc = require('./mpmTimeCalc.js');
var dieter = require('./dieter.js');

// CONFIG
var onlyMin = 'outputs/onlyMin.json';
var mpmTimeCalcPath = 'outputs/mpmTimeCalc.json';
var dieterTable = 'outputs/dieterTable.json';




// output(onlyMin, JSON.stringify(onlyMinTable(graph)));
// output(mpmTimeCalcPath, JSON.stringify(mpmTimeCalc(graph)));
output(dieterTable, JSON.stringify(dieter(graph)));



console.log('DONE');
