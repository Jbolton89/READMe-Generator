// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) { 
  if (license === "MIT") { 
    return `![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)`;
  } else if (license === "GNU GPL") {
    return `![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)`;
  } else if (license === "Apache") {
    return `![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)`;
  } else if (license === "Eclipse") {
    return `[![License](https://img.shields.io/badge/License-EPL%201.0-red.svg)]`;
  } else if (license === "Boost") {
    return `![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)`;
  } else if (license === "Mozilla") {
    return `![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)`;
  } else if (license === " IBM") { 
    return `[![License: IPL 1.0](https://img.shields.io/badge/License-IPL%201.0-blue.svg)]`;
  } else if (license === "The Unlicense") {
    return `![License: MPL 2.0](https://img.shields.io/badge/license-Unlicense-blue.svg)`;
  } else if (license === "None") {
    license = "";
    return license;
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) { 
  if (license === "MIT") {
    return `https://opensource.org/licenses/MIT`;
  } else if (license === "GNU GPL") {
    return `https://www.gnu.org/licenses/gpl-3.0`;
  } else if (license === "Apache") {
    return `https://opensource.org/licenses/Apache-2.0`;
  } else if (license === "Eclipse") { 
    return `https://opensource.org/licenses/EPL-1.0`
  } else if (licence === "IBM") { 
    return `https://opensource.org/licenses/IPL-1.0`;
  } else if (license === "Boost") {
    return `https://www.boost.org/LICENSE_1_0.txt`;
  } else if (license === "Mozilla") {
    return `!https://opensource.org/licenses/MPL-2.0`;
  } else if (license === "The Unlicense") {
    return `http://unlicense.org/`;
  } else {
    license = "";
    return license;
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) { 
  if (!license) { 
    license = "";
    return license;
  } else { 
    return `# License
    This is ${license}.
    This can be found at the link below
    ${renderLicenseLink(license)} 
    
    `;
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(results, githubInformation) {
  return `
<h1 align="center">${results.title} 👋</h1>

${renderLicenseBadge(results.badge)} 

## Contents 
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Repository Link](#repository)
- [GitHub Information](#github)

## Description 

${results.description}
 
## Installation 

${results.installation}

## Usage 

${results.usage}

## Contributing

${results.contributing}

## License 

${results.licence}

## Test 

${results.test}

## GitHub 

![IMAGE](${results.image})
${results.name}
[PROFILE](${githubInformation.user})
<${githubInformation.email}></$>


`;

}



module.exports = generateMarkdown;
