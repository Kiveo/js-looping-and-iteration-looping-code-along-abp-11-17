// Code your solutions in this file

function printBadges(string) {
  const employees = ['Joe', 'Gabe', 'Lisa'];
  var elength = employees.length;
  for (i=0; i < elength; i++) {
    console.log('Welcome ' + employees[i] + '!' + ' You are employee #' + (i+1) + '.');
  }
  return string;
}
