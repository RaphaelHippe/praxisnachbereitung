// var graph = require('./inputs/graphKitchen.json');
// var graph = require('./inputs/graph.json');
var graph = require('./outputs/onlyMin.json');

var cpmGraph = require('./inputs/cpmGraph.json');

var output = require('./output.js');

var calcPuffer = require('./pufferCalc.js');

// var onlyMinTable = require('./onlyMinTable.js');

// var mpmTimeCalc = require('./mpmTimeCalc.js');

// var dieter = require('./dieter.js');
// var mpmTimeCalcJson = require('./outputs/mpmTimeCalc.json');

var gMinusFile = require('./outputs/gMinus.json');
var gPlusFile = require('./outputs/gPlus.json');

var gMinus = require('./gMinus.js');
var gPlus = require('./gPlus.js');



// CONFIG
var onlyMin = 'outputs/onlyMin.json';
var mpmTimeCalcPath = 'outputs/mpmTimeCalc.json';
var dieterTable = 'outputs/dieterTable.json';

var gMinusOut = 'outputs/gMinus.json';
var gPlusOut = 'outputs/gPlus.json';

var pufferOut = 'outputs/puffer.json';

// output(onlyMin, JSON.stringify(onlyMinTable(graph)));
// output(mpmTimeCalcPath, JSON.stringify(mpmTimeCalc(graph)));
// output(dieterTable, JSON.stringify(dieter(graph, mpmTimeCalcJson)));

output(pufferOut, JSON.stringify(calcPuffer(gMinusFile, gPlusFile, cpmGraph)));

// output(gMinusOut, JSON.stringify(gMinus(cpmGraph)));
// output(gPlusOut, JSON.stringify(gPlus(cpmGraph)));
// gMinus(cpmGraph);
// gPlus(cpmGraph);


console.log('DONE');
