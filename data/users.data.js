let users = [
  {
    id: 1,
    nombre: "Iván",
    email: "ivan@mail.com",
    password: "123456",
    createdAt: new Date().toISOString(),
  },
  {
    id: 2,
    nombre: "Ana",
    email: "ana@mail.com",
    password: "qwerty",
    createdAt: new Date().toISOString(),
  },
];

export function addUser(user) {
  users.push(user);
  return user;
}

addUser({
  id: 3,
  nombre: "Pedro",
  email: "email@gmail.com",
  password: "password123",
  createdAt: new Date().toISOString(),
});

console.log(users);

export function getAllUsers() {
  return users;
}

export function findUserById(id) {
  return users.find((u) => u.id === id);
}

export function emailExists(email, excludeId = null) {
  return users.some((u) => u.email === email && u.id !== excludeId);
}

export function updateUserById(id, userData) {
  const index = users.findIndex((u) => u.id === id);
  if (index === -1) return null;
  users[index] = { ...users[index], ...userData };
  return users[index];
}

export function deleteUserById(id) {
  const index = users.findIndex((u) => u.id === id);
  if (index === -1) return undefined;

  const deleted = users.splice(index, 1);
  return deleted[0];
}
