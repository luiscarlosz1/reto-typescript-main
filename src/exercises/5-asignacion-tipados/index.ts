export interface User {
  type: 'user';
  name: string;
  age: number;
  occupation: string;
}

export interface Admin {
  type: 'admin';
  name: string;
  age: number;
  role: string;
}

export type Person = User | Admin;

export const persons: Person[] = [
  {
    type: 'user',
    name: 'Alvaro Castillo',
    age: 25,
    occupation: 'Ingeniero de Software',
  },
  {
    type: 'admin',
    name: 'Javier Castillo',
    age: 32,
    role: 'Estudiante',
  },
  {
    type: 'user',
    name: 'Maria Isabel Hernandez',
    age: 23,
    occupation: 'Abogada',
  },
  {
    type: 'admin',
    name: 'Jorge Perez',
    age: 64,
    role: 'Contador',
  },
  {
    type: 'user',
    name: 'Carla Perez',
    age: 23,
    occupation: 'Contadora',
  },
  {
    type: 'admin',
    name: 'Andres Perez',
    age: 23,
    role: 'Administrator',
  },
];

export const isAdmin = (person: Person): person is Admin =>
  person.type === 'admin';
export const isUser = (person: Person): person is User =>
  person.type === 'user';

export function logPerson(person: Person) {
  let additionalInformation = '';
  if (isAdmin(person)) {
    additionalInformation = person.role;
  }
  if (isUser(person)) {
    additionalInformation = person.occupation;
  }
  console.log(` - ${person.name}, ${person.age}, ${additionalInformation}`);
}

export function filterUsers(
  persons: Person[],
  criteria: Partial<Omit<User, 'type'>>
): User[] {
  return persons.filter(isUser).filter(user => {
    return Object.entries(criteria).every(([key, value]) => {
      return user[key as keyof User] === value;
    });
  });
}

console.log('Users of age 23:');

filterUsers(persons, {
  age: 23,
}).forEach(logPerson);
