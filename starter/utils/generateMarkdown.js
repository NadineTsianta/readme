// function to generate markdown for README
function generateMarkdown(response) {
  return `# ${response.title}

  ## Description
  
  ${response.description}
  
  ## Table of Contents
  
  - ${[installation]}(#installation)
  - ${[usage]}(#usage)
  - ${[contribution]}(#contribution)
  - ${[license]}(#license)
  - ${[badge]}(#badge)
  - ${[tests]}(#tests)
  - Questions
  
  
  
  ## Installation
  
   ${[response.installation]}
  
  ## Usage
   ${[response.usage]}
  
  ## Contribution Guidelines
  
   ${[response.contribution]}
  
  ## License
   ${[response.license]}
  
  

  
  
  
  
  ## Tests
   ${[response.tests]}
   
  ## Questions
     Github_Username: https://github.com/${response.username}
     Contact_me: ${response.email}
   `;
}

module.exports = generateMarkdown;
