var calcMaxToMin = require('./calc/calcMaxToMin.js');


module.exports = onlyMinTable;

var mainObj = {};

function onlyMinTable(data) {
  mainObj = data;
  // console.log('duration 1', calcDurationOne(data['6']));
  // console.log('duration 2', data['6'].duration);
  // console.log('maxWaitingTime', data['6'].maxWaitingTime);

  loop(data, function(item, key) {
    var test = [];
    calcDurationOne(data[key]).forEach(function(item, index) {
      if (data[key].maxWaitingTime[index] !== 10000) {
        var mytest = {};
        mytest.newMin = calcMaxToMin(item.duration, data[key].duration, data[key].maxWaitingTime[index]);
        mytest.key = item.key;
        mytest.newPrecessor = key;
        test.push(mytest);
      }
    });

    test.forEach(function(item) {
      mainObj[item.key].predecessor.push(parseInt(item.newPrecessor));
      mainObj[item.key].minWaitingTime.push(item.newMin);
    });
  });
  return mainObj;
}



function calcDurationOne(obj) {
  var arr = [];
  obj.predecessor.forEach(function(p) {
    var info = {
      key: p,
      duration: mainObj[p].duration
    };
    arr.push(info);
  });
  return arr;
}

function loop(obj, fn) {
  Object.keys(obj).forEach(function(key) {
    fn(obj[key], key);
  });
}
