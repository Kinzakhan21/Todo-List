#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";

let todolist  = [];
let coditions = true;
// print welcome message
console.log(chalk.green.bold("*******************************************"))
console.log(chalk.magenta.bold("\n \t Welcome to kinza -Todo-List Application \n"));
console.log(chalk.green.bold("*******************************************"))

while(coditions){
    let addTask = await inquirer.prompt([
        {
            name : "task",
           type: "input",
           message :chalk.green ( "Enter your new Task :")
        }
    ]);
    todolist.push(addTask.task);
    console.log(`${ addTask.task} Task added in Todo-List Sucessfully!`);

    let addMoreTask = await inquirer.prompt([
        {
            name: "addmore",
            type : "confirm",
            message : "Do you want to add More Task ?",
            default : "false"
        }
    ]);

     coditions = addMoreTask.addmore
}              
console.log("Your Updated Todo-list:" , todolist );