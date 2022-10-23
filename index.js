const fs = require('fs');
const inquirer = require('inquirer');


// need to use inquirer.prompt([{},{},{}]) with all the required options for the program.

// format:
//  {
    // What the user can do
    // type: 'input',
    // the variable name for use in th ${} later
    // name: 'name',
    // What the user sees in the terminal.
    // message: 'What is your name?',
//   },