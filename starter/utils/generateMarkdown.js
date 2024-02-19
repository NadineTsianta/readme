// function to generate markdown for README
function generateMarkdown(response) {
  return `# ${response.title}

  ## Description
  
  ${response.description}
  
  ## Table of Contents
  
  - ${[response.installation]}(#installation)
  - ${[response.usage]}(#usage)
  - ${[response.contribution]}(#contribution)
  - ${[response.license]}(#license)
  - ${[response.badge]}(#badge)
  - ${[response.tests]}(#tests)
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
  
   ![Badge](https://img.shields.io/badge/${badge}-blue)
  
  Badges aren't necessary, per se, but they demonstrate street cred. Badges let other developers know that you know what you're doing. Check out the badges hosted by [shields.io](https://shields.io/). You may not understand what they all represent now, but you will in time.
  
  
  ## Tests
   ${[response.tests]}
   
   ## Questions
     Github_Username: ${response.username}
     Contact_me: ${response.email}
   `;
}

module.exports = generateMarkdown;
