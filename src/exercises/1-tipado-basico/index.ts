export type User = unknown;

export const users: unknown[] = [
  {
    name: 'Alvaro Castillo',
    age: 25,
    occupation: 'Ingeniero de Software',
  },
  {
    name: 'Javier Castillo',
    age: 23,
    occupation: 'Estudiante',
  },
];

export function logPerson(user: unknown) {
  console.log(` - ${user.name}, ${user.age}`);
}

console.log('Users:');
users.forEach(logPerson);
