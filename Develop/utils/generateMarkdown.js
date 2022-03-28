// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

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
