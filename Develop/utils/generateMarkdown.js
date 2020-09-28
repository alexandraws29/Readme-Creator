// function to generate markdown for README
function generateMarkdown(data) {
    
    return `
    # ${data.title}
    ## Table of Contents
    - [Description](##Description)
    - [Installation](##How-to-install)
    - [Usage](##Usage-information)
    - [Contributing](##how-to-contribute)
    - [Tests](##How-to-test-the-application)
    - [Licence](##Licencing-information)
    ## Description
    > ${data.description}
    ## How To Install The Application
    > ${data.installation}
    ## Usage Information
    > ${data.usage}
    ## How To Contribute
    > ${data.contributing}
    ## How To Test The Application
    > ${data.tests}
    ## Licencing Information
    > ${data.license}
    ## GitHub Profile
    > github.com/${data.github} 
    ## Contact Me Via Email
    > <${data.email}>
      `;
  }
  
  
  module.exports = generateMarkdown;
  
  