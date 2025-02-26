#! /usr/bin/env node

import inquirer from "inquirer";

// 1) computer will generate a random number
// 2) user input for guessing number
// 3) compare user input with computer generated number and show result
let randomNumber = Math.floor(Math.random() * 10 + 1 );
let answers = await inquirer.prompt 
(
  [
    {
      name : "userGuessNumber",
      type : "number",
      message : "Please guess a number between 1 to 10: ",
    }
  ]
)
if (answers.userGuessNumber === randomNumber) {
  console.log("Congratulation! you guessed a right number.");
} else {
  console.log("You guessed wrong number");
}