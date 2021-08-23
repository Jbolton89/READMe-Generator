const fs = require("fs");
const inquirer = require('inquirer');
const fetch = require('node-fetch');
const util = require('util');
// const writeFileAsync = util.promisify(fs.writeFile);
const genMarkdown = require('./utils/generateMarkdown');
var githubInformation;
const queries = [{
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
            const url = `https://api.github.com/users/${results.username}`;
            fetch(url).then(function (res) {
                res.json().then(function (res1) {
                    console.log("res is ", res1)
                    return githubInformation = {
                        email: res1.email,
                        image: res1.avatar_url,
                        name: res1.name,
                        profile: res1.html_url,
                    }
                }).then(info => {
                    console.log("Here is the new info", info)



                    fs.writeFile("DemoREADME.md", genMarkdown(results, info), function (err) {
                        err ? console.error : console.log("READMe has been successfully created")
                           
                    })
                    
                })
            });

        })
}

init();