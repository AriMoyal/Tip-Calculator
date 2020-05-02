document.getElementById('container').onchange = function () {
  var bill = Number(document.getElementById('billTotal').value);
  var tipPercent = document.getElementById('tipInput').value;
  var split = document.getElementById('splitInput').value;
  var tipValue = bill * (tipPercent / 100);
  var newBilleach = (bill + tipValue) / split;
  var tipEach = tipValue / split;

  document.getElementById('tipOutput').innerHTML = tipPercent + "%";
  document.getElementById('splitOutput').innerHTML = split;
  document.getElementById('newBill').innerHTML = "R" + newBilleach.toFixed(2);
  document.getElementById('tipEach').innerHTML = "R" + tipEach.toFixed(2);


}



