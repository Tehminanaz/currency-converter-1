import inquirer from "inquirer";
const currency = {
    USD: 1,
    EUR: 0.91,
    GBU: 0.76,
    INR: 74.57,
    PKR: 280
};
let user_answer = await inquirer.prompt([
    {
        name: "from",
        type: "list",
        message: "Enter from currency",
        choices: ["USD", "EUR", "GBU", "INR", "PKR"]
    },
    {
        name: "to",
        type: "list",
        message: "Enter from currency",
        choices: ["USD", "EUR", "GBU", "INR", "PKR"]
    },
    {
        name: "amount",
        type: "input",
        message: "Enter your ammount",
    }
]);
let fromAmount = currency[user_answer.from];
let toamount = currency[user_answer.to];
let amount = user_answer.amount;
let baseAmount = amount / fromAmount;
let convertedAmount = baseAmount * toamount;
console.log(convertedAmount);
