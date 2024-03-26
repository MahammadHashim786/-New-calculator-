#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
const answer = await inquirer.prompt([
    {
        type: "number",
        name: "numberOne",
        message: "Enter your First Number",
    }, {
        type: "number",
        name: "numberTwo",
        message: "Enter your second Number",
    },
    {
        type: "list",
        name: "operator",
        message: "Enter your operator",
        choices: ["+", "-", "*", "/"]
    }
]);
const { numberOne, numberTwo, operator } = answer;
let result;
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
        console.log("invalid operator");
}
console.log(chalk.yellow(`${numberOne} ${numberTwo} ${operator} = ${result}`));
