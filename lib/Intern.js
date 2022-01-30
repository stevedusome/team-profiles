const Employee = require('../lib/Employee.js');

class Intern extends Employee {
  constructor(name, id, email, school) {
    super();
    this.name = name;
    this.id = id;
    this.email = email;
    this.school = school;
    this.role = 'Intern';
  }}

  Intern.prototype.getSchool = function() {
    return this.school;
}

module.exports = Intern;