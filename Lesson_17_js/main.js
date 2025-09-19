/* The solutions do not take into account many factors such as 
a blank answer or incorrect answer format. 
Why? cause I'm lazy */

//task 1
const userName = prompt("What is your name?");
console.log(`Hello, ${userName}`)

//task 2
const currentYear = 2025;
const birthYear = prompt("What year were you born?");
const age = currentYear - birthYear;
console.log(`You are ${age} years old`);

//task 3
const squareSide = prompt("Enter the length of square's side:");
const squarePerimeter = squareSide * 4;
console.log(`Square's perimeter is: ${squarePerimeter}`);

//task 4
const distance = prompt("Distance between cities (km):");
const time = prompt("Time available (hours):");
const speed = distance / time;
console.log(`Required speed: ${speed} km/h`);

//task 5
const memoryGB = prompt("Flash drive memory in GB:");
const memoryMB = memoryGB * 1024;
const files = Math.floor(memoryMB / 820);
console.log(`You can store ${files} files of 820MB`);

//task 6
const money = prompt("Money in wallet:");
const pricePerBar = prompt("Price of one chocolate bar:");
const bars = Math.floor(money / pricePerBar);
const change = money - (bars * pricePerBar);
console.log(`You can buy ${bars} bars and have ${change} change`);

//task 7
const deposit = prompt("Bank deposit amount:");
const monthlyInterest = (deposit * 0.05) / 12;
const totalInterest = monthlyInterest * 2;
console.log(`Interest for 2 month: ${totalInterest}`);