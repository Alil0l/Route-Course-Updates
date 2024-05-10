///////////////// Prob 1

// var userInput = Number(window.prompt("Enter a number"));
// Check if number or not. wont do it for others.
// if (isNaN(userInput)) console.log("Please enter a valid number");
// else console.log(userInput);

///////////////// Prob 2

// var userInput = Number(window.prompt("Enter a number"));
// if (userInput % 3 == 0 && userInput % 4 == 0) {
//     console.log("Yes");
// } else {
//     console.log("NO");
// }

///////////////// Prob 3

// var userInput1 = window.prompt("Enter the first number");
// var userInput2 = window.prompt("Enter the second number");

// if (userInput1 > userInput2) {
//   console.log(userInput1);
// } else if (userInput1 < userInput2) {
//   console.log(userInput2);
// }

///////////////// Prob 4

// var userInput = window.prompt("Enter a number");
// if (userInput > 0) {
//   console.log("Postivie");
// } else if (userInput < 0) {
//   console.log("Negative");
// }

///////////////// Prob 5

// var userInput1 = window.prompt("Enter the first number");
// var userInput2 = window.prompt("Enter the second number");
// var userInput3 = window.prompt("Enter the third number");
// var max = userInput1;
// var min = userInput1;
// if (userInput1 > userInput2 && userInput1 > userInput3) max = userInput1;
// else if (userInput2 > userInput1 && userInput2 > userInput1) max = userInput2;
// else if (userInput3 > userInput1 && userInput3 > userInput1) max = userInput3;

// if (userInput1 < userInput2 && userInput1 < userInput3) min = userInput1;
// else if (userInput2 < userInput1 && userInput2 < userInput1) min = userInput2;
// else if (userInput3 < userInput1 && userInput3 < userInput1) min = userInput3;

// console.log(`Max Element = ${max}.0\nMin Element = ${min}.0`);

///////////////// Prob 6

// var userInput = window.prompt("Enter a number");
// if (userInput % 2 == 0) console.log("Even");
// else console.log("Odd");

///////////////// Prob 7
// NO PROBLEM WITH THIS NUMBER
///////////////// Prob 8

// var userInput = window.prompt("Enter a char").toLowerCase();

// if (
//   userInput == "a" ||
//   userInput == "o" ||
//   userInput == "e" ||
//   userInput == "i" ||
//   userInput == "u"
// )
//   console.log("Vowel");
// else console.log("Constant");

///////////////// Prob 9

// var userInput = window.prompt("Enter a number");
// Print each number in a new line
// for (let i = 1; i <= Number(userInput); i++) {
//   console.log(i);
// }

///////////////// Prob 10

// var userInput = Number(window.prompt("Enter a number"));
// // print all numbers in one line
// let numbers = "";
// for (let i = 2; i <= 12; i++) {
//   numbers += i * userInput;
//   numbers += " ";
// }
// console.log(userInput + "   " + numbers);

///////////////// Prob 11

// var userInput = Number(window.prompt("Enter a number"));

// for (let i = 1; i <= userInput; i++) {
//   if (i % 2 == 0) {
//     console.log(i);
//   }
// }

///////////////// Prob 12

// var userInput1 = Number(window.prompt("Enter a number"));
// var userInput2 = Number(window.prompt("Enter it's power"));
// easyway
// console.log(userInput1 ** userInput2);
// or
// let placeholder = userInput1;
// for (let i = 1; i < userInput2; i++) {
//   placeholder *= userInput1;
// }
// console.log(placeholder);

///////////////// Prob 12
// Number 12 again

// var deg1 = Number(window.prompt("Enter subject 1 degree"));
// var deg2 = Number(window.prompt("Enter subject 2 degree"));
// var deg3 = Number(window.prompt("Enter subject 3 degree"));
// var deg4 = Number(window.prompt("Enter subject 4 degree"));
// var deg5 = Number(window.prompt("Enter subject 5 degree"));
// var total = deg1 + deg2 + deg3 + deg4 + deg5;
// console.log(`Total Marks = ${total}`);
// console.log(`Average Marks = ${total / 5}`);
// console.log(`Percentage = ${total / 5} %`);

///////////////// Prob 13

// var userInput = Number(window.prompt("Enter a month number from 1 to 12"));
// if (isNaN(userInput)) console.log("Please enter a valid number");
// else if (
//   userInput == 1 ||
//   userInput == 3 ||
//   userInput == 5 ||
//   userInput == 7 ||
//   userInput == 8 ||
//   userInput == 10 ||
//   userInput == 12
// )
//   console.log("31  days in this Month");
// else if (userInput == 4 || userInput == 6 || userInput == 9 || userInput == 11)
//   console.log("30  days in this Month");
// else if (userInput == 2)
//   console.log("February has 28 days in a common year and 29 in leap years");
// else console.log("Invalid input, please try again!");

///////////////// Prob 14

// var deg1 = Number(window.prompt("Enter Physics degree"));
// if (deg1 >= 90) console.log("Physics: " + deg1 + " %" + " Grade A");
// else if (deg1 >= 80 && deg1 < 90)
//   console.log("Physics: " + deg1 + " %" + " Grade B");
// else if (deg1 >= 70 && deg1 < 80)
//   console.log("Physics: " + deg1 + " %" + " Grade C");
// else if (deg1 >= 60 && deg1 < 70)
//   console.log("Physics: " + deg1 + " %" + " Grade D");
// else if (deg1 >= 40 && deg1 < 60)
//   console.log("Physics: " + deg1 + " %" + " Grade E");
// else if (deg1 < 40) console.log("Physics: " + deg1 + " %" + " Grade F");

// var deg2 = Number(window.prompt("Enter Chemistry degree"));
// if (deg2 >= 90) console.log("Chemistry: " + deg2 + " %" + " Grade A");
// else if (deg2 >= 80 && deg2 < 90)
//   console.log("Chemistry :" + deg2 + " %" + " Grade B");
// else if (deg2 >= 70 && deg2 < 80)
//   console.log("Chemistry :" + deg2 + " %" + " Grade C");
// else if (deg2 >= 60 && deg2 < 70)
//   console.log("Chemistry :" + deg2 + " %" + " Grade D");
// else if (deg2 >= 40 && deg2 < 60)
//   console.log("Chemistry :" + deg2 + " %" + " Grade E");
// else if (deg2 < 40) console.log("Chemistry :" + deg2 + " %" + " Grade F");

// var deg3 = Number(window.prompt("Enter Biology degree"));
// if (deg3 >= 90) console.log("Biology:" + deg3 + " %" + " Grade A");
// else if (deg3 >= 80 && deg3 < 90)
//   console.log("Biology:" + deg3 + " %" + " Grade B");
// else if (deg3 >= 70 && deg3 < 80)
//   console.log("Biology:" + deg3 + " %" + " Grade C");
// else if (deg3 >= 60 && deg3 < 70)
//   console.log("Biology:" + deg3 + " %" + " Grade D");
// else if (deg3 >= 40 && deg3 < 60)
//   console.log("Biology:" + deg3 + " %" + " Grade E");
// else if (deg3 < 40) console.log("Biology:" + deg3 + " %" + " Grade F");

// var deg4 = Number(window.prompt("Enter Mathematics degree"));
// if (deg4 >= 90) console.log("Chemistry: " + deg4 + " %" + " Grade A");
// else if (deg4 >= 80 && deg4 < 90)
//   console.log("Chemistry: " + deg4 + " %" + " Grade B");
// else if (deg4 >= 70 && deg4 < 80)
//   console.log("Chemistry: " + deg4 + " %" + " Grade C");
// else if (deg4 >= 60 && deg4 < 70)
//   console.log("Chemistry: " + deg4 + " %" + " Grade D");
// else if (deg4 >= 40 && deg4 < 60)
//   console.log("Chemistry: " + deg4 + " %" + " Grade E");
// else if (deg4 < 40) console.log("Chemistry: " + deg4 + " %" + " Grade F");

// var deg5 = Number(window.prompt("Enter Computer degree"));
// if (deg5 >= 90) console.log("Computer :" + deg5 + " %" + " Grade A");
// else if (deg5 >= 80 && deg5 < 90)
//   console.log("Computer :" + deg5 + " %" + " Grade B");
// else if (deg5 >= 70 && deg5 < 80)
//   console.log("Computer :" + deg5 + " %" + " Grade C");
// else if (deg5 >= 60 && deg5 < 70)
//   console.log("Computer :" + deg5 + " %" + " Grade D");
// else if (deg5 >= 40 && deg5 < 60)
//   console.log("Computer :" + deg5 + " %" + " Grade E");
// else if (deg5 < 40) console.log("Computer :" + deg5 + " %" + " Grade F");

// Switch Problems
///////////////// Prob 15
// var userInput = Number(window.prompt("Enter a number"));

// switch (userInput) {
//   case 1:
//     console.log("31 Days in this Month");
//     break;
//   case 3:
//     console.log("31 Days in this Month");
//     break;
//   case 5:
//     console.log("31 Days in this Month");
//     break;
//   case 7:
//     console.log("31 Days in this Month");
//     break;
//   case 8:
//     console.log("31 Days in this Month");
//     break;
//   case 10:
//     console.log("31 Days in this Month");
//     break;
//   case 12:
//     console.log("31 Days in this Month");
//     break;
//   case 4:
//     console.log("30 Days in this Month");
//     break;
//   case 6:
//     console.log("30 Days in this Month");
//     break;
//   case 9:
//     console.log("30 Days in this Month");
//     break;
//   case 11:
//     console.log("30 Days in this Month");
//     break;
//   case 2:
//     console.log("February has 28 days in a common year and 29 in leap years");
//     break;
//   default:
//     console.log("Enter a valid Number between  1 to 12 for the month.");
//     break;
// }

///////////////// Prob 16
// var userInput = window.prompt("Enter a char").toLowerCase();

// switch (userInput) {
//   case "a":
//     console.log("Vowel");
//     break;
//   case "e":
//     console.log("Vowel");
//     break;
//   case "i":
//     console.log("Vowel");
//     break;
//   case "o":
//     console.log("Vowel");
//     break;
//   case "u":
//     console.log("Vowel");
//     break;
//   default:
//     console.log("Constant");
//     break;
// }

///////////////// Prob 17
// var userInput1 = window.prompt("Enter the first number");
// var userInput2 = window.prompt("Enter the second number");

// switch (true) {
//   case userInput1 > userInput2:
//     console.log(`The ${userInput1} is greater.`);
//     break;
//   case userInput1 < userInput2:
//     console.log(`The ${userInput2} is greater.`);
//     break;
//   case userInput1 == userInput2:
//     console.log("Both numbers are equal.");
//     break;
// }

// switch (compare) {
//   case "1":
//     console.log(`The ${userInput1} is greater.`);
//     break;
//   case "2":
//     console.log(`The ${userInput2} is greater.`);
//     break;
//   case "3":
//     console.log("Both numbers are equal.");
//     break;
// }

///////////////// Prob 18
// var userInput = window.prompt("Enter a number");
// switch (userInput % 2) {
//   case 0:
//     console.log("Even Number");
//     break;
//   case 1:
//     console.log("Odd Number");
//     break;
// }

///////////////// Prob 19
// var userInput = window.prompt("Enter a number");

// switch (true) {
//   case userInput > 0:
//     console.log("Postive");
//     break;
//   case userInput < 0:
//     console.log("Negative");
//     break;
//   case userInput == 0:
//     console.log("Zero");
//     break;
// }

///////////////// Prob 19
// Calc. takes two numbers:
// var userInput1 = Number(window.prompt("Enter the first number"));
// var userInput2 = window.prompt("Enter the operation (+ , - , * , / , %)");
// var userInput3 = Number(window.prompt("Enter the second number"));
// let result;
// if (isNaN(userInput1) || isNaN(userInput3))
//   console.log("Please enter valid numbers");
// else {
//   switch (userInput2) {
//     case "+":
//       result = userInput1 + userInput3;
//       break;
//     case "-":
//       result = userInput1 - userInput3;
//       break;
//     case "*":
//       result = userInput1 * userInput3;
//       break;
//     case "/":
//       result = userInput1 / userInput3;
//       break;
//     case "%":
//       result = userInput1 % userInput3;
//       break;
//   }
//   console.log(result);
// }
