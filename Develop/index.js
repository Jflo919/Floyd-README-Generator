// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateReadMe = require('./utils/generateMarkdown.js');
// TODO: Create an array of questions for user input
const questionsUser = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is your name?'    
        },
        {
            type: 'input',
            name: 'github',
            message: 'Enter your GitHub Username'
        },
        {
            type: 'input',
            name: 'about',
            message: 'Tell us a little about yourself:'
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your Email address?'
        }
    ]);
};

const questionsProject = () => {
    console.log(`
        ===================
        Create a New README
        ===================
    `);
    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of your project for the README?'
        },
        {
            type: 'input',
            name: 'description',
            message: 'Enter the Description of your project for the README:'   
        },
        {
            type: 'input',
            name: 'installation',
            message: 'Enter the Installation Instructions for your project README:'
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Enter your Usage section for your project README:'
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
            message: 'Please select a license for your project/application:'
        }
    ])
}
questionsUser().then(answers => console.log(answers));
// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();

