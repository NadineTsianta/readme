const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");


const readme = (response) => `# ${response.title}

## Description

${response.description}

## Table of Contents

- ${[response.installation](#response.installation)}
- ${[response.usage](#response.usage)}
- ${[response.contribution](#response.contribution)}
- ${[response.license](#response.license)}
- ${[response.badge](#response.badge)}
- ${[response.tests](#response.tests)}
- Questions



## Installation

 ${[response.installation]}

## Usage
 ${[response.usage]}

## Contribution Guidelines

 ${[response.contribution]}

## License
 ${[response.license]}


## Badge

 ![Badge](https://img.shields.io/badge/&{badge}-blue)

Badges aren't necessary, per se, but they demonstrate street cred. Badges let other developers know that you know what you're doing. Check out the badges hosted by [shields.io](https://shields.io/). You may not understand what they all represent now, but you will in time.


## Tests
 ${[response.tests]}
 
 ## Questions
   ${[Github Username](#response.username)}
   ${[Contact me](#response.email)}
 `

// array of questions for user
const questions = [{
    type: 'input',
    message: 'What is the title of your README?',
    name: 'title'
},
{
    type:'input',
    message: 'Provide description of your project',
    name: 'description'

},
{
    type: 'input', 
    message: 'Provide information on installation',
    name: 'installation'
},
{
    type: 'input',
    message: 'Provide information about Usage',
    name: 'usage'

}, 
{
    type: 'input',
    message: 'Contribution Guidelines',
    name: 'contribution'
}, 
{
    type: 'input',
    message: 'Provide information about tests',
    name: 'tests'

}, 
{
    type: 'list',
    message: 'Select your license',
    name: 'license',
    choice: ['Apache License v2.0','GNU General Public License v3.0', 'MIT License']

}, 
{
    type: 'input',
    message: 'Enter your email',
    name: 'email'
}, 
{
    type: 'input',
    message: 'What is your Github username',
    name: 'username'
}, 
{
    type: 'input',
    message: 'Insert information for the badge',
    name: 'badge'
}

];

inquirer
.promt(questions)
.then((response)=> {
    console.log(response);

    fs.writeFile('README.md', readme(response), err =>{
        if (err) {
            console.log(err);
        }
    })
})

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {

}

// function call to initialize program
init();
