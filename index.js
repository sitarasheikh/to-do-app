#! /usr/bin/env node
import inquirer from "inquirer";
let todos = [];
let condition = true;
while (condition) {
    let addTask = await inquirer.prompt([
        {
            name: "q1",
            type: "input",
            message: "What do you want to add in your todos?"
        },
        {
            name: "q2",
            type: "confirm",
            message: "do you want to add more?",
            default: "true"
        }
    ]);
    todos.push(addTask.q1);
    condition = addTask.q2;
    console.log(todos);
}
