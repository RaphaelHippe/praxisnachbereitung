module.exports = format;

function format(data) {
  var myData = JSON.stringify(data);
  var arr = myData.split(',');
  arr.forEach(function (item) {
    item += '\n';
  });
  return arr.join();
}
