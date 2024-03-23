#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";
// step 1 
const answers : {
  numberOne: number
  numberTwo: number
  operator:string
} = await inquirer.prompt([
    {type: "number",
     name: "numberOne",
     message: chalk.blue("Enter your first number")
    },
    {
        type: "number",
        name: "numberTwo",
        message: chalk.redBright("Enter your second number")
    },
    {
        type: "list",
        name: "operator",
        message: chalk.bgGreenBright("Select an operator"),
        choices: ["+", "-", "*", "/"] 
    }
]);
// step 2
const {numberOne, numberTwo, operator} = answers;

let result 
 switch (operator) {
    case "+":
        result = numberOne + numberTwo;
        break;
    case "-":
        result = numberOne - numberTwo;
        break;
    case "*":
        result = numberOne * numberTwo;
        break;
    case "/":
        result = numberOne / numberTwo;
        break;
        default:
            console.log("Invalid operator");
}

// last step
console.log(chalk.yellow(`${chalk.red(numberOne)}  ${chalk.black(operator)} ${chalk.green(numberTwo)}  = ${result}`));