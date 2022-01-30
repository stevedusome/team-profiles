const getGithub = require('../lib/Engineer.js');

test('checks if office number is correct', () => {
  expect(getGithub()).toBe("github");
});