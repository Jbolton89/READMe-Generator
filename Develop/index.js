
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
        type: "rawlist",
        name: "badge",
        message: "Please select your license from the following list -",
        choices: [
            "MIT",
            "Apache",
            "Boost",
            "GNU GPL",
            "Eclipse",
            "IBM",
            "Mozilla",
            "The Unlicense",
            "None",

        ],
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
            console.log("Results are ", results);
            const url = `https://api.github.com/user/${results.username}`;
            fetch(url).then(function (res) {
                res.json().then(function(res1) {
                console.log ("res is ", res1)
                const githubInformation = {
                    email: fetch.Response.res1.email,
                    image: fetch.Response.res1.avatar_url,
                    name: fetch.Response.res1.name,
                    profile: fetch.Response.res1.html_url,
                }
                });
                fs.writeFile("READMe.MD", genMarkdown(results), function (err) {
                    err ? console.error : console.log("READMe has been successfully created")
                        .catch((err) => console.log(err));
                })
            });

        })
}

init();
