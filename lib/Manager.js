const Employee = require('../lib/Employee.js');

class Manager extends Employee {
  constructor(name, id, email, officeNo) {
    super();
    this.name = name;
    this.id = id;
    this.email = email;
    this.officeNo = officeNo;
    this.role = 'Manager';
  }}

  Manager.prototype.getOfficeNo = function() {
    return this.officeNo;
}

module.exports = Manager;