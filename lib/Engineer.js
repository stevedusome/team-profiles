const Employee = require('../lib/Employee.js');

class Engineer extends Employee {
  constructor(name, id, email, github) {
    super();
    this.name = name;
    this.id = id;
    this.email = email;
    this.github = github;
    this.role = 'Engineer';
  }}

  Engineer.prototype.getGithub = function() {
    return this.github;
}

module.exports = Engineer;