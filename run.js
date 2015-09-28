// var graph = require('./inputs/graphDemontage.json');
// var graph = require('./inputs/graph.json');
// var graph = require('./outputs/onlyMinDemontage.json');

var cpmGraph = require('./inputs/cpmGraphDemontage.json');

var output = require('./output.js');

var calcPuffer = require('./pufferCalc.js');

// var onlyMinTable = require('./onlyMinTable.js');

// var mpmTimeCalc = require('./mpmTimeCalc.js');

// var dieter = require('./dieter.js');
// var mpmTimeCalcJson = require('./outputs/mpmTimeCalcDemontage.json');

var gMinusFile = require('./outputs/gMinusDemontage.json');
var gPlusFile = require('./outputs/gPlusDemontage.json');

// var gMinus = require('./gMinus.js');
// var gPlus = require('./gPlus.js');



// CONFIG
// var onlyMin = 'outputs/onlyMinDemontage.json';
// var mpmTimeCalcPath = 'outputs/mpmTimeCalcDemontage.json';
// var dieterTable = 'outputs/dieterTableDemontage.json';

// var gMinusOut = 'outputs/gMinusDemontage.json';
// var gPlusOut = 'outputs/gPlusDemontage.json';

var pufferOut = 'outputs/pufferDemontage.json';

// output(onlyMin, JSON.stringify(onlyMinTable(graph)));
// output(mpmTimeCalcPath, JSON.stringify(mpmTimeCalc(graph)));
// output(dieterTable, JSON.stringify(dieter(graph, mpmTimeCalcJson)));

output(pufferOut, JSON.stringify(calcPuffer(gMinusFile, gPlusFile, cpmGraph)));

// output(gMinusOut, JSON.stringify(gMinus(cpmGraph)));
// output(gPlusOut, JSON.stringify(gPlus(cpmGraph)));
// gMinus(cpmGraph);
// gPlus(cpmGraph);


console.log('DONE');
