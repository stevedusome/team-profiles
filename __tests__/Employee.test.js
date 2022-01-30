const Employee = require('../lib/Employee.js');

test('checks if role is Employee', () => {
    const employee = new Employee ('Bill', '2442', 'bill@google.com');
    expect(employee.getName()).toBe('Bill');
    expect(employee.getId()).toBe('2442')
    expect(employee.getEmail()).toBe('bill@google.com')
    expect(employee.getRole()).toBe('Employee')
});
