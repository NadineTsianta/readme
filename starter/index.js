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

})


// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile('README.md', generateMarkdown(response), err =>{
        if (err) {
            console.log(err);
        }
    })
}

// function to initialize program
function init() {

}

// function call to initialize program
init();
