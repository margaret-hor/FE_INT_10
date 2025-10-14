const num1 = parseFloat(prompt("Enter the first number:"));
const num2 = parseFloat(prompt("Enter the second number:"));

if (isNaN(num1) || isNaN(num2)) {
  alert("Invalid input. Please enter numbers only.");
} else {
  let isValidOperation = false;
  let result;

  while (!isValidOperation) {
    const operation = prompt("Choose an operation (+, -, *, /):");

    switch (operation) {
      case '+':
        result = num1 + num2;
        isValidOperation = true;
        break;
      case '-':
        result = num1 - num2;
        isValidOperation = true;
        break;
      case '*':
        result = num1 * num2;
        isValidOperation = true;
        break;
      case '/':
        if (num2 === 0) {
          alert("Division by zero is not allowed!")
        } else {
          result = num1 / num2;
          isValidOperation = true;
        }
        break;
      default:
        alert("Invalid operation. Please choose +, -, * or /");
    }
  }

  console.log(`The result is: ${result}`);
}