
const fs = require("fs");
const inquirer = require('inquirer');
const fetch = require('node-fetch');
const util = require('util');
// const writeFileAsync = util.promisify(fs.writeFile);
const genMarkdown = require('./utils/generateMarkdown');
// TODO: Create an array of questions for user input
const queries = [
    {
        type: "input",
        name: "title",
        message: "What is the title of your project?"
    },
    {
        type: "input",
        name: "description",
        message: "What would you like as a description?"
    },
    {
        type: "input",
        name: "installation",
        message: "What are your installation instructions"
    },
    {
        type: "input",
        name: "usage",
        message: "what is the project usage"
    },
    {
        type: "input",
        name: "license",
        message: "Please provide a license and/or badge link"
    },
    {
        type: "input",
        name: "contributing",
        message: "Please type the contributing parties"
    },
    {
        type: "input",
        name: "test",
        message: "What are your project tests?"
    },
    {
        type: "input",
        name: "username",
        message: "Please enter your Github username"
    },
    {
        type: "input",
        name: "email",
        message: "Please enter your email address"
    }
];



function init() {
    inquirer.prompt(queries)
        .then(function (results) {
            const url = `https://api.github.com/users/${results.username}`;
            fetch(url).then(function (results) {
                const githubInformation = {
                    email: fetch.Response.results.email,
                    image: fetch.Response.results.avatar_url,
                    name: fetch.Response.results.name,
                    profile: fetch.Response.results.html_url,

                };
                fs.writeFile("READMe.MD", genMarkdown(results, githubInformation), function (err) {
                    err ? console.error : console.log("READMe has been successfully created")
                        .catch((err) => console.log(err));
                })
            });

        })
}

init();
