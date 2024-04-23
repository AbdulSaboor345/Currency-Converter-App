#! /usr/bin/env node
// Importing inquirer & chalk
import inquirer from "inquirer";
import chalk from "chalk";
// Printing a welcome msg
let line = chalk.gray('='.repeat(58));
console.log(`\n\t${line}\n${chalk.bold.blue("\tWelcome to \`Abdul Saboor\` - Currency Converter Application\n")}\t${line}\n`);
// Making an object for the list of currencies and their exchange rates
let exchangeRate = {
    "USD": 1, // Base Currency (United States Dollar)
    "EUR": 0.9, // European Currency (Euro)
    "JYP": 155, // Japanese Currency (Yen)
    "CAD": 1.4, // Canadian Currency (Canadian Dollar)
    "AUD": 1.6, // Australian Currency (Australian Dollar)
    "PKR": 278, // Pakistani Currency (Pakistani Rupees)
};
// Process of prompting the user to select currencies & amount to convert
let input = await inquirer.prompt([
    {
        name: "fromCurrency",
        type: "list",
        message: (chalk.yellow("Select the Currency to convert from: ")),
        choices: ["USD", "EUR", "JYP", "CAD", "AUD", "PKR"],
    },
    {
        name: "toCurrency",
        type: "list",
        message: chalk.yellow("Select the currency to convert to:  "),
        choices: ["USD", "EUR", "JYP", "CAD", "AUD", "PKR"]
    },
    {
        name: "amount",
        type: "input",
        message: chalk.cyan("Enter the amount of the currency you want to convert:"),
    }
]);
// Making multiple variables for each input
let fromAmount = exchangeRate[input.fromCurrency];
let toAmount = exchangeRate[input.toCurrency];
let amount = input.amount;
// Formula of conversion
let baseAmount = amount / fromAmount;
let convertedAmount = baseAmount * toAmount;
let caMath = Math.round(convertedAmount * 100) / 100;
// Printing the converted amount
console.log(chalk.green(`\nHere is your converted amount: ${caMath}`));
// Printing a Note
console.log(chalk.red("\n These exchanged rates are based as of 22 april, 2024 after some time if the rates are different feel free to change them! -Abdul Saboor\n"));
