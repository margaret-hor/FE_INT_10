//1 task
function checkIdenticalDigits() {
  const numRequest = parseInt(prompt("Enter a three-digit number"));
  if (isNaN(numRequest) || numRequest < 100 || numRequest > 999) {
    alert("Please enter a valid three-digit number!");
    return;
  }
  const digit1 = Math.floor(numRequest / 100);
  const digit2 = Math.floor((numRequest % 100) / 10);
  const digit3 = numRequest % 10;

  if (digit1 === digit2 || digit1 === digit3 || digit2 === digit3) {
    console.log(`Number ${numRequest} has identical digits`);
  } else {
    console.log(`Number ${numRequest} does not have identical digits`);
  }
}

//2 task
// not sure abt that
function currencyConverter() {
  const exchangeRates = { EUR: 0.85, SEK: 9.41, AUD: 1.51, GBP: 0.74, CAD: 1.39, JPY: 147.81 };
  const usdRequest = parseFloat(prompt("Enter amount in USD:"));
  if (isNaN(usdRequest) || usdRequest <= 0) {
    alert("Invalid amount! Please enter a positive number.");
    return;
  }
  const currencyList = `
  Available currencies:
  1 - EUR | 2 - SEK | 3 - AUD
  4 - GBP | 5 - CAD | 6 - JPY
  
  Enter the number of choice:`;
  const choice = parseInt(prompt(currencyList));
  const currencies = ["EUR", "SEK", "AUD", "GBP", "CAD", "JPY"];
  const currencyIndex = choice - 1;

  if (currencyIndex > 0 && currencyIndex < currencies.length) {
    const selectedCurrency = currencies[currencyIndex];
    const rate = exchangeRates[selectedCurrency];
    const convertedAmount = (usdRequest * rate).toFixed(2);

    console.log(`${usdRequest} USD = ${convertedAmount} ${selectedCurrency} (exchange rate = ${rate})`);
  } else {
    alert("Invalid choice!");
  }
}

//task 3
function nextDate() {
  let dayRequest = parseInt(prompt("Enter day"));
  let monthRequest = parseInt(prompt("Enter month"));
  let yearRequest = parseInt(prompt("Enter year"));

  if((isNaN(dayRequest) || isNaN(monthRequest) || isNaN(yearRequest)) || (dayRequest > 31 || dayRequest <= 0) || (monthRequest > 12 || monthRequest <= 0) || (yearRequest <= 0)) {
    alert("Invalid choice for day, month, or year!");
    return;
  }

  const leapYear = (yearRequest % 4 === 0 && yearRequest % 100 !== 0) || yearRequest % 400 === 0;
  const daysInMonth = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  if (leapYear) daysInMonth[2] = 29;

  if (dayRequest > daysInMonth[monthRequest]) {
    alert("Invalid day for the selected month/year!");
    return; 
  }

  dayRequest++;
  
  if (dayRequest > daysInMonth[monthRequest]) {
    dayRequest = 1;
    monthRequest++;
  }
  
  if (monthRequest > 12) {
    monthRequest = 1;
    yearRequest++;
  }

  console.log(`The next date is: ${dayRequest}:${monthRequest}:${yearRequest}`);
} 