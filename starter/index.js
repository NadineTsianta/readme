const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

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
    message: 'Include table of contents',
    name: 'contents'
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
