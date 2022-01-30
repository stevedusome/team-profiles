const Intern = require('../lib/Intern.js');
const intern = new Intern ('Sasha', '0001', 'sasha@google.com', 'Fanshawe College');


test('checks if office number is correct', () => {
    
    expect(intern.getName()).toBe('Sasha');
});

test('checks if office number is correct', () => {
    
    expect(intern.getId()).toBe('0001')
});

test('checks if office number is correct', () => {
    
    expect(intern.getEmail()).toBe('sasha@google.com')
});

test('checks if office number is correct', () => {
    
    expect(intern.getRole()).toBe('Intern')
});

test('checks if office number is correct', () => {
    
    expect(intern.getSchool()).toBe('Fanshawe College')
});