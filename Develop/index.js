// TODO: Include packages needed for this application
const fs = require("fs"); 
const inquirer = require('inquirer');
// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "title",
        message: "What is the title of your project?"
    },
    {
        type:"input",
        name: "description",
        message: "What would you like as a description?"
    },
    {
        type:"input",
        name: "installation",
        message: "What are your installation instructions"
    },
    {
        type:"input",
        name: "usage",
        message: "what is the project usage"
    },
    {
        type:"input",
        name: "license",
        message: "Please provide a license and/or badge link"
    },
    {
        type:"input",
        name: "contributing",
        message: "Please type the contributing parties"
    },
    {
        type:"input",
        name:"test",
        message:"What are your project tests?"
    },
    {
        type:"input", 
        name:"username",
        message:"Please enter your Github username"
    },
    {
        type:"input",
        name:"email",
        message:"Please enter your email address"
    }
];

inquirer
    .prompt(questions)
    .then(function(data){ 
        const url = `https://api.github.com/users/${data.username}`;
        fetch(url).then()

    }

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

fs.writeFile("READMe.MD", )

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
