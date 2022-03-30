// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let licensed = data.license;
  if (!licensed) {
    return '';
  }
  if (license.choices = "Public Domain") {
    return `
    [![License: CC BY-NC-ND 4.0](https://licensebuttons.net/l/by-nc-nd/4.0/80x15.png)]
    `;
  }
  if (license.choices = "BSD (Permissive)") {
    return `
    [![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)
    `;
  }
  if (license.choices = "LGPL") {
    return `
    [![License: LGPL v3](https://img.shields.io/badge/License-LGPL_v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)
    `;
  }
  if (license.choices = "GPL (CopyLeft)") {
    return `
    [![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)
    `;
  }
  if (license.choices = "Proprietary") {
    return `
    [![Generic badge](https://img.shields.io/badge/<license>-<proprietary>-<COLOR>.svg)](https://shields.io/)
    `;
  }
  if (license.choices = "None selected") {
    return "";
  }
}
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
// Need to refactor this code, so when parts of below (license section and links etc.) are put above with conditionals (if (!data.license) { return....)
function generateMarkdown(data) {
  return `# ${data.title}
          ## Description:
        ${data.description}
        ### Table of Contents
      1. [Description](#description)
      2. [Installation](#installation)
      3. [Usage Instructions](#usage-instructions)
      4. [License](#license)
      5. [Contribution Guidelines](#contribution-guidelines)
      6. [Test Instructions](#test-instructions)
      7. [Questions/About](#questions)
        ### Installation:
        ${data.installation}
        ### Usage Instructions:
        ${data.usage}
        ### License:
        ${data.license}
        ${renderLicenseBadge(licensed)}
        ### Contribution Guidelines:
        ${data.contribution}
        ### Test Instructions:
        ${data.test}
        ### Questions 
        ${data.name}
        Github:
        [${data.github}](https://github.com/${data.github})  
        * If you need to reach me for additional questions, please contact me by email:
        ${data.email}

`;
}

module.exports = generateMarkdown;
