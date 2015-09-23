module.exports = calcMaxToMin;


function calcMaxToMin(durationOne, durationTwo, max) {
  if (max === 10000) {
    return 10000;
  }
  return 0 - durationOne - durationTwo - max;
}
