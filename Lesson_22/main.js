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
  console.log("Invalid input entered.");
} else {
  console.log(`The special character for ${numRequest} is: ${getSpecialChar(numRequest)}`);
}

// task 3
const searchNum = confirm(`Think of a number between 0 and 100, and I will guess it. 
After each guess, respond with '>', '<' or '==' in the prompt.`);

let min = 0;
let max = 100;
let isGuessed = false;
let guessCount = 0;

while (!isGuessed) {
  guessCount++;

  let mid = Math.floor((min + max) / 2);

  if (min > max) {
    console.log("There seems to be a misunderstanding. Let's try again.");
    break;
  }

  const userResponse = prompt(`Is your number ${mid}? Respond with '>', '<' or '=='.`);

  if (userResponse === null) {
    console.log("Game cancelled.");
    break;
  }

  switch (userResponse) {
    case '>':
      min = mid + 1;
      break;
    case '<':
      max = mid - 1;
      break;
    case '==':
      isGuessed = true;
      console.log(`Your number is ${mid}. I found it in ${guessCount} guesses!`);
      break;
    default:
      guessCount--;
      alert(`Invalid input: ${userResponse}. Please only use '>', '<' or '=='`);
  }
}