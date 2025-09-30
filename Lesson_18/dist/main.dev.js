"use strict";

//1 task
function checkIdenticalDigits() {
  var numRequest = parseInt(prompt("Enter a three-digit number"));

  if (isNaN(numRequest) || numRequest < 100 || numRequest > 999) {
    alert("Please enter a valid three-digit number!");
    return;
  }

  var digit1 = Math.floor(numRequest / 100);
  var digit2 = Math.floor(numRequest % 100 / 10);
  var digit3 = numRequest % 10;

  if (digit1 === digit2 || digit1 === digit3 || digit2 === digit3) {
    console.log("Number ".concat(numRequest, " has identical digits"));
  } else {
    console.log("Number ".concat(numRequest, " does not have identical digits"));
  }
} //2 task
// not sure abt that


function currencyConverter() {
  var exchangeRates = {
    EUR: 0.85,
    SEK: 9.41,
    AUD: 1.51,
    GBP: 0.74,
    CAD: 1.39,
    JPY: 147.81
  };
  var usdRequest = parseFloat(prompt("Enter amount in USD:"));

  if (isNaN(usdRequest) || usdRequest <= 0) {
    alert("Invalid amount! Please enter a positive number.");
    return;
  }

  var currencyList = "\n  Available currencies:\n  1 - EUR | 2 - SEK | 3 - AUD\n  4 - GBP | 5 - CAD | 6 - JPY\n  \n  Enter the number of choice:";
  var choice = parseInt(prompt(currencyList));
  var currencies = ["EUR", "SEK", "AUD", "GBP", "CAD", "JPY"];
  var currencyIndex = choice - 1;

  if (currencyIndex > 0 && currencyIndex < currencies.length) {
    var selectedCurrency = currencies[currencyIndex];
    var rate = exchangeRates[selectedCurrency];
    var convertedAmount = (usdRequest * rate).toFixed(2);
    console.log("".concat(usdRequest, " USD = ").concat(convertedAmount, " ").concat(selectedCurrency, " (exchange rate = ").concat(rate, ")"));
  } else {
    alert("Invalid choice!");
  }
} //task 3


function nextDate() {}