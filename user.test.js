// user.test.js
const { addUser, getUser, users } = require('../user');
const sum = require('./math');

beforeEach(() => {
  users.length = 0; // Limpa o array de usuários antes de cada teste
});

test('adicionar e recuperar um usuário', () => {
  const user = { id: 1, name: 'Alice', active: true };
  addUser(user);
  expect(getUser(1)).toEqual(user);
});

test('contar total de usuários ativos', () => {
  addUser({ id: 1, name: 'Alice', active: true });
  addUser({ id: 2, name: 'Bob', active: false });
  addUser({ id: 3, name: 'Charlie', active: true });

  const activeUsers = users.filter(user => user.active).length;
  expect(sum(activeUsers, 0)).toBe(2);
});
