// task 1
function getAgeClassification(age) {
  if (isNaN(age) || age < 0) {
    console.log("Invalid age entered.");
  } else if (age <= 11) {
    console.log("You are a child.");
  } else if (age <= 17) {
    console.log("You are a teenager.");
  } else if (age <= 59) {
    console.log("You are an adult.");
  } else {
    console.log("You are a pensioner.");
  }
}
const ageRequest = parseInt(prompt("Enter your age:"));
getAgeClassification(ageRequest);

// task 2
function getSpecialChar(num) {
  const specialChars = [")", "!", "@", "#", "$", "%", "^", "&", "*", "("];
  
  if (num >= 0 && num <= 9) {
    return specialChars[num];
  } else {
    return "Invalid number entered.";
  }
}

const numRequest = parseInt(prompt("Enter a number from 0 to 9:"));

if (isNaN(numRequest) || numRequest < 0 || numRequest > 9) {
  alert("Invalid input. Please enter a number from 0 to 9.");
} else {
  console.log(`The special character for ${numRequest} is: ${getSpecialChar(numRequest)}`);
}

// task 3
// function binarySearch(num) {

// }