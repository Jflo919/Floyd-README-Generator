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
function generateMarkdown(data) {
  return `# ${data.title}
          ## Description:
        ${data.description}
        ### Table of Contents

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
        ### Questions/About 
        ${data.name}
        ${data.github}  Put md link outside of data.github, so users' can click on link to github profile
        * If you need to reach me for additional questions, please contact me by email:
        ${data.email}

`;
}

module.exports = generateMarkdown;
