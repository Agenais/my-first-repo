///alert('Hello World!'); //makes a popup
//console.log('Secret message'); //writes to the console
//document.write('Writing on the page.'); /*writes to the html page*/

/*var myVariable = 6;
console.log(myVariable);*/

/*var numberOfApples = 6;
var numberOfOranges = 7;
var numberOfFruits = numberOfApples + numberOfOranges;
console.log(numberOfFruits);



var billAmount = 57.83;
var tipPercentage = .15;
var tipAmount = billAmount*tipPercentage;
var totalBill = billAmount + tipAmount;
document.write('Your total bill, with tip, is $' + totalBill.toFixed(2) + '.');

function sentence() {
    document.write("Hello this is my sentence.");
}
sentence();


var firstName = 'Michelle';
var lastName = ' Barnes';
var wholeName = fullName(firstName, lastName);
var firstName2 = 'Steve';
var lastName2 = ' Rogers';
var wholeName2 = fullName(firstName2, lastName2);
function fullName(a, b) {
  return a + b;
}

document.write(wholeName);
document.write('<br>' + wholeName2);*/

var temperature;
function doINeedACoat(num) {
  if (num < 50) {
    document.write('Put on a coat');
  }
}
doINeedACoat(49);
doINeedACoat(60);
doINeedACoat(30);
