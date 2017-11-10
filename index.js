// Code your solutions in this file

function printBadges(string) {
  const employees = ['Joe', 'Gabe', 'Lisa'];
  var elength = employees.length;
  for (i=0; i < elength; i++) {
    console.log('Welcome ' + employees[i] + '!' + ' You are employee #' + (i+1) + '.');
  }
  return string;
}

var x = 0;
function flip() {
  ++x;
  return Math.random() >= 0.5;
}

function tailsNeverFails() {
  while (flip() ) {
  }
  return console.log('You got ' + x + ' tails in a row!');
}
