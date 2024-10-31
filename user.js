// user.js
const users = [];

function addUser(user) {
  users.push(user);
}

function getUser(id) {
  return users.find(user => user.id === id);
}

module.exports = { addUser, getUser, users };
