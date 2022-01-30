const Engineer = require('../lib/Engineer.js');
const engineer = new Engineer ('Jill', '1400', 'jill@google.com', 'jill@github.com');


test('checks if office number is correct', () => {
    
    expect(engineer.getName()).toBe('Jill');
});

test('checks if office number is correct', () => {
    
    expect(engineer.getId()).toBe('1400')
});

test('checks if office number is correct', () => {
    
    expect(engineer.getEmail()).toBe('jill@google.com')
});

test('checks if office number is correct', () => {
    
    expect(engineer.getRole()).toBe('Engineer')
});

test('checks if office number is correct', () => {
    
    expect(engineer.getGithub()).toBe('jill@github.com')
});