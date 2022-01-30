const getSchool = require('../lib/Intern.js');

test('checks if office number is correct', () => {
  expect(getSchool()).toBe("School");
});