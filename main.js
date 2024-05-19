#! usr/bin/env node
import inquirer from "inquirer";
let myBalance = 10000; // Dollar
let myPin = 2222;
let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        message: "enter your pin",
        type: "number",
    }
]);
//  console.log(pinAnswer.q1);
if (pinAnswer.pin === myPin) {
    console.log("Correct pin code!!!");
    let operationAns = await inquirer.prompt([
        {
            name: "operation",
            message: "please select option",
            type: "list",
            choices: ["Withdraw", "Check balance", "Fast cash "]
        }
    ]);
    // console.log(operationAns);
    if (operationAns.operation === "Withdraw") {
        let amountAns = await inquirer.prompt([
            {
                name: "amount",
                message: "Enter your amount",
                type: "number"
            }
        ]);
        myBalance -= amountAns.amount;
        console.log("your current balance is: " + myBalance);
    }
    else if (operationAns.operation === "Check balance") {
        console.log("Your balance is: " + myBalance);
    }
    else {
        let amountAns = await inquirer.prompt([
            {
                name: "amount",
                message: "Select the amount you want to withdrawl",
                type: "list",
                choices: ["4000", "6000", "5000", "1000"],
            }
        ]);
        if (myBalance >= amountAns.amount) {
            myBalance -= amountAns.amount;
            console.log("Your total balance is: " + myBalance);
        }
        else {
            console.log("You have Insufficient balance");
        }
    }
}
else {
    console.log("Incorrect pin");
}
