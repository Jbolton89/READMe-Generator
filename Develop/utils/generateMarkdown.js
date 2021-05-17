// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) { }

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) { }

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) { }

// TODO: Create a function to generate markdown for README
function generateMarkdown(results) {
  return `
<h1 align="center">${results.title} 👋</h1>

## Description
${results.description}

## Contents 
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Repository Link](#repository)
- [GitHub Information](#github)

##Installation 

${results.installation}

## Usage 

${results.usage}

##License 

${results.licence}

## Test 

${results.test}

## GitHub 

![IMAGE](${githubInformation.image})
- ${githubInformation.name}
- [PROFILE](${githubInformation.profile})
- <${githubInformation.email}>

`;
}

module.exports = generateMarkdown;
