const Manager = require('../lib/Manager.js');
const manager = new Manager ('Susan', '2000', 'susan@google.com', '400');


test('checks if office number is correct', () => {
    
    expect(manager.getName()).toBe('Susan');
});

test('checks if office number is correct', () => {
    
    expect(manager.getId()).toBe('2000')
});

test('checks if office number is correct', () => {
    
    expect(manager.getEmail()).toBe('susan@google.com')
});

test('checks if office number is correct', () => {
    
    expect(manager.getRole()).toBe('Manager')
});

test('checks if office number is correct', () => {
    
    expect(manager.getOfficeNo()).toBe('400')
});