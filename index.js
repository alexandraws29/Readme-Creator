const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./Develop/utils/generateMarkdown');
const Choices = require('inquirer/lib/objects/choices');


// array of questions for user
function questions() {
    return inquirer.prompt(
[
    {
        type: 'input',
        name: 'title',
        message: 'What is the Title of your README?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please enter a description of your program.'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'How would one install your program?'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'How would you describe the usage of your program?'
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'How can one make contributions to your program?'
    },
    {
        type: 'input',
        name: 'tests',
        message: 'How does one test your program?'
    },
    {
        type: 'list',
        name: 'license',
        message: 'Please indicate the license you are using for your program.',
        choices: ['Public Domain', 'Permissive','LGPL', 'Copy Left', 'Proprietary']
    },
    {
        type: 'input',
        name: 'github',
        message: 'Please enter your GitHub username.'
    },
    {
        type: 'input',
        name: 'email',
        message: 'Please enter your email address.'
    },
])};


// function to write README file
function writeToFile(data) {
    return new Promise((resolve, reject) => {
        fs.writeFile('./README.md', generateMarkdown(data), err => {
            if (err) {
                reject(err);
                return;
            } else {
                
                resolve({
                    ok: true,
                    message: 'Your professional README has been created!'
                });
            }
                
        });
    })
}

// function to initialize program
const init = () => {
    questions()
    .then(function (data) {
        return writeToFile(data)
    })
};  

// function call to initialize program
init();
