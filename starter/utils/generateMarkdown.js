// function to generate markdown for README
function generateMarkdown(response) {
  return `# ${response.title}

  ## Description
  
  ${response.description}
  
  ## Table of Contents
  
  - [installation](#installation)
  - [usage](#usage)
  - [contribution](#contribution)
  - [license](#license)
  - [badge](#badge)
  - [tests](#tests)
  - [Questions](#questions)
  
  
  
  ## Installation
  
   ${response.installation}
   ![Application Screenshot](${response.image})
   [Video](${response.video})
  
  ## Usage
   ${[response.usage]}
  
  ## Contribution Guidelines
  
   ${response.contribution}
  
  ## License
   ${response.license}
  
   
  
  ## Tests
   ${[response.tests]}
   
  ## Questions
   [Github_Profile](https://github.com/${response.username})
   [Contact_me](${response.email})
   `;
}

module.exports = generateMarkdown;
