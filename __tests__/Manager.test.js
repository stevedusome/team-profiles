const getOfficeNumber = require('../lib/Manager.js');

test('checks if office number is correct', () => {
  expect(getOfficeNumber()).toBe("18005555555");
});