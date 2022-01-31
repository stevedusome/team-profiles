const Employee = require('./lib/Employee.js');
const Manager = require('./lib/Manager.js');
const Engineer = require('./lib/Engineer.js');
const Intern = require('./lib/Intern.js');
const inquirer = require('inquirer');
const path = require('path');
const fs = require('fs');

const continueQuestion = [
    {type: 'list',
    name: 'continue',
    message: 'Would you like to add another team member?',
    choices: ['Yes','No']
     }
]

const managerQuestion = [
    {type: 'input',
    name: 'office',
    message: 'What is your Office Number?',
    validate: officeInput => {
        if (officeInput) {
            return true;
        }
        else {
            console.log("Please enter your office number");
            return false;
        }}
    },
]

const engineerQuestion = [
    {type: 'input',
    name: 'github',
    message: 'What is your Github Account?',
    validate: githubInput => {
        if (githubInput) {
            return true;
        }
        else {
            console.log("Please enter your github");
            return false;
        }}
    },
]

const internQuestion = [
    {type: 'input',
    name: 'school',
    message: 'What school do you attend?',
    validate: schoolInput => {
        if (schoolInput) {
            return true;
        }
        else {
            console.log("Please enter your school");
            return false;
        }}
    },
]

const questions = [
    {type: 'list',
    name: 'role',
    message: 'What is your job?',
    choices: ['Manager','Employee', 'Engineer', 'Intern']
     },
    {type: 'text',
    name: 'name',
    message: 'What is your name?',
    validate: nameInput => {
        if (nameInput) {
            return true;
        }
        else {
            console.log("Please enter your name");
            return false;
        }}
    },
  {
    type: 'input',
    name: 'id',
    message: 'What is your id?',
    validate: idInput => {
        if (idInput) {
            return true;
        }
        else {
            console.log("Please enter name of your project");
            return false;
        }}
  },
  {
    type: 'text',
    name: 'email',
    message: "What is your email?",
    validate: emailInput => {
        if (emailInput) {
            return true;
        }
        else {
            console.log("Please enter name of your project");
            return false;
        }}
  }    
]

const managerQuestions = [managerQuestion[0], continueQuestion[0]];
const internQuestions = [internQuestion[0], continueQuestion[0]];
const engineerQuestions = [engineerQuestion[0], continueQuestion[0]];

function Program () {
    this.desiredUsers = 0;
    this.storedUsers = [];
    this.acceptingInput = 'Yes';
    this.storedMarkdown = '<!DOCTYPE html>' +
    '<html lang="en">' +
    '<head>' +
        '<meta charset="UTF-8">' +
        '<meta http-equiv="X-UA-Compatible" content="IE=edge">'+
        '<meta name="viewport" content="width=device-width, initial-scale=1.0">' +
        '<title>Team Members</title>' +
        '<link rel="stylesheet" href="style.css">' +
    '</head>' +
    '<body>' +
    
        '<header>' +
            '<h1>Your Team</h1>' +
    
        '</header>';
}

Program.prototype.writeFile = function () {
    fs.appendFile('./dist/index.html', this.storedMarkdown, function(err)
    {
        if (err) throw err;
        return console.log('File created')
    })
}

Program.prototype.addMember = function() {
return inquirer
  .prompt(questions)
  .then((answers) => {

    if (answers.role === 'Manager'){

        var manager = new Manager(answers.name, answers.id, answers.email);

        return inquirer.prompt(managerQuestions)
            .then((answers) => {
            manager.officeNo = answers.office;
            this.acceptingInput = answers.continue;
            this.storedUsers.push(manager)
        })}
    
    else if (answers.role === 'Engineer'){

        var engineer = new Engineer(answers.name, answers.id, answers.email);

        return inquirer.prompt(engineerQuestions)
            .then ((answers) => {
            engineer.github = answers.github;
            this.acceptingInput = answers.continue;
            this.storedUsers.push(engineer)
        })
    }
    else if (answers.role === 'Intern') {

        var intern = new Intern(answers.name, answers.id, answers.email);

        return inquirer.prompt(internQuestions)
            .then ((answers) => {
            intern.school = answers.school;
            this.acceptingInput = answers.continue;
            this.storedUsers.push(intern)
        })

    }
    else {

        var employee = new Employee(answers.name, answers.id, answers.email);

        return inquirer.prompt(continueQuestion)
            .then ((answers) => {
            this.acceptingInput = answers.continue;
            this.storedUsers.push(employee)
        })

    }
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      console.log(error)
    }
  });};

Program.prototype.inputLoop = async function() {
    while (this.acceptingInput === 'Yes') {
    let memberInput = await this.addMember();
    console.log(memberInput);}
    this.generateMarkdown();
    this.writeFile();
}


Program.prototype.generateMarkdown = function() {
    for (let i = 0; i < this.storedUsers.length; i++) {
    this.storedMarkdown += "<div><h3> " + this.storedUsers[i].role + "</h3> " +
    "<p>Name:" + this.storedUsers[i].name + "</p> " +
    "<p>Id: " + this.storedUsers[i].id + "</p> " +
    "<p>Email: <a href='mailto:" + this.storedUsers[i].email + "'>" + this.storedUsers[i].email + "</a> </p> "

    if (this.storedUsers[i].role === 'Manager')
        { this.storedMarkdown += "<p>Office Number: " + this.storedUsers[i].officeNo + "</p> "

        }
    else if (this.storedUsers[i].role === 'Intern')
        { this.storedMarkdown += "<p>School: " + this.storedUsers[i].school + "</p> "

        }
    else if (this.storedUsers[i].role === 'Engineer')
        { this.storedMarkdown += "<p>github: <a href='https://github.com/" + this.storedUsers[i].github +  "'>" + 
        this.storedUsers[i].github + "</a> </p>"
        }

    this.storedMarkdown += "</div>" +
    "<footer>" +
    "<h2 class=>Powered by Teamwork </h2>" +
    "</footer>" +
    "</body>" +
    "</html>"
    
    ;        
    }
    return console.log("Please wait")
}

new Program().inputLoop()


