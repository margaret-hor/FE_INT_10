// task 1
function numSum() {
  const scaledSum = (0.1 * 10) + (0.2 * 10);
  const result = scaledSum / 10;
  console.log(`The result is: ${result}`);
}

// task 2
function stringSum() {
  const string1 = "1";
  const digit2 = 2;
  const result = +string1 + digit2;
  console.log(`The result is: ${result}`);
}

// task 3
function digitsBackwards() {
  const request = prompt("Enter a three-digit number");

  if(isNaN(request) || !request || request.length !== 3) {
    alert("Invalid input! Please run the function again and enter a valid three-digit number.");
    return;
  } 
  const number = +request;

  digit1 = Math.floor(request / 100);
  digit2 = Math.floor((request % 100) / 10);
  digit3 = request % 10;

  const numberBackwards = `${digit3}${digit2}${digit1}`;
  console.log(`${number} backwards is ${numberBackwards}`);
}