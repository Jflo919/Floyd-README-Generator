// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');

const generateReadMe = require('./utils/generateMarkdown.js');
console.log('generateReadMe', generateReadMe);
// TODO: Create an array of questions for user input
const questionsUser = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is your name?',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('You have to enter your name');
                    return false;
                }
            }    
        },
        {
            type: 'input',
            name: 'github',
            message: 'Enter your GitHub Username',
            validate: githubInput => {
                if (githubInput) {
                    return true;
                } else {
                    console.log('Please enter your Github Username!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'about',
            message: 'Tell us a little about yourself:'
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your Email address?',
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log('You have to enter an Email!');
                    return false;
                }
            }
        }
    ]);
};

const questionsProject = (projectData) => {
    console.log(`
        ===================
        Create a New README
        ===================
    `);
console.log(projectData);
    // If there is no data/readme array property, create one
    if (!projectData.projects) {
        projectData.projects = [];
    }
    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of your project for the README?',
            validate: titleInput => {
                if (titleInput) {
                    return true;
                } else {
                    console.log('Please enter a title for your README');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'description',
            message: 'Enter the Description of your project for the README:',
            validate: descriptionInput => {
                if (descriptionInput) {
                    return true;
                } else {
                    console.log('Please enter a desctiption for your project README!');
                    return false;
                }
            }   
        },
        {
            type: 'input',
            name: 'installation',
            message: 'Enter the Installation Instructions for your project README:'
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Enter your Usage section for your project README:',
            validate: usageInput => {
                if (usageInput) {
                    return true;
                } else {
                    console.log('Please enter Usage Instructions!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'contribution',
            message: 'Enter your Contributing guidelines section for your project README:'
        },
        {
            type: 'input',
            name: 'test',
            message: 'Enter your Test Instructions for your project README:'
        },
        {
            type: 'list',
            name: 'license',
            message: 'Please select a license for your project/application:',
            choices: ['Public Domain', 'BSD (Permissive)', 'LGPL', 'GPL (CopyLeft)', 'Proprietary', 'None selected'],
            validate: licenseList => {
                if (licenseList) {
                    return true;
                } else {
                    console.log('You need to choose at lease one option!');
                    return false;
                }
            }
        }
    ])
   /* .then(projectData => {
    projectData.projects.push(projectData);
    return projectData;    
   */ //})
};


// TODO: Create a function to write README file
 const writeFile = fileContent => {
    console.log('fileContent1', fileContent);
  return new Promise ((resolve, reject) => {
      console.log('fileContent2', fileContent);
      fs.writeFile('./dist/README.md', fileContent, err => {
          if(err) {
              reject(err);
              return;
          }
          resolve({
              ok:true,
              message: 'File created!'
          });
      });
  });
};

// TODO: Create a function to initialize app
// function init() {}

// Function call to initialize app
//init();
questionsUser()
    .then(questionsProject)
    .then(projectData => {
        console.log("projectData", projectData);
    const readMe = generateReadMe(projectData);
    console.log('Readme', readMe);
    return writeFile(readMe);
    })
    //.then(pageMD => {
      //  console.log("pageMD", pageMD);
    //return writeFile(pageMD);
    //})
    .catch(err => {
        console.log(err);
    });