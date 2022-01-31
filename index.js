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
    this.storedMarkdown = '';
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
        console.log(this.storedUsers)})}
    
    else if (answers.role === 'Engineer'){

        var engineer = new Engineer(answers.name, answers.id, answers.email);

        return inquirer.prompt(engineerQuestions)
            .then ((answers) => {
            engineer.github = answers.github;
            this.acceptingInput = answers.continue;
            this.storedUsers.push(engineer)
        console.log(this.storedUsers)
        })
    }
    else if (answers.role === 'Intern') {

        var intern = new Intern(answers.name, answers.id, answers.email);

        return inquirer.prompt(internQuestions)
            .then ((answers) => {
            intern.school = answers.school;
            this.acceptingInput = answers.continue;
            this.storedUsers.push(intern)
        console.log(this.storedUsers)
        })

    }
    else {

        var employee = new Employee(answers.name, answers.id, answers.email);

        return inquirer.prompt(continueQuestion)
            .then ((answers) => {
            this.acceptingInput = answers.continue;
            this.storedUsers.push(employee)
        console.log(this.storedUsers)
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
    console.log(this);
    console.log(memberInput);}
    this.generateMarkdown();
}


Program.prototype.generateMarkdown = function() {
    for (let i = 0; i < this.storedUsers.length; i++) {
    this.storedMarkdown += "Name: " + this.storedUsers[i].name + ", "

        
      }
    return console.log(this.storedMarkdown)
}

new Program().inputLoop()


