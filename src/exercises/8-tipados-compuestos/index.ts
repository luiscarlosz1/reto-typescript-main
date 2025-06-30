interface User {
  type: 'user';
  name: string;
  age: number;
  occupation: string;
}

interface Admin {
  type: 'admin';
  name: string;
  age: number;
  role: string;
}

type PowerUser = Omit<User, 'type'> & Omit<Admin, 'type'> & { type: 'powerUser' };

export type Person = User | Admin | PowerUser;

export const persons: Person[] = [
  {
    type: 'user',
    name: 'Bart Simpson',
    age: 25,
    occupation: 'Limpiador de chimeneas',
  },
  { type: 'admin', name: 'Marge Simpson', age: 32, role: 'Administradora' },
  { type: 'user', name: 'Lisa Simpson', age: 23, occupation: 'Astronauta' },
  {
    type: 'admin',
    name: 'Homero Simpson',
    age: 64,
    role: 'Salvador del Mundo',
  },
  {
    type: 'powerUser',
    name: 'Montgomery Burns',
    age: 45,
    role: 'Moderador',
    occupation: 'Acariciador de gatos',
  },
];

function isAdmin(person: Person): person is Admin {
  return person.type === 'admin';
}

function isUser(person: Person): person is User {
  return person.type === 'user';
}

function isPowerUser(person: Person): person is PowerUser {
  return person.type === 'powerUser';
}

export function logPerson(person: Person) {
  let additionalInformation: string = '';
  if (isAdmin(person)) {
    additionalInformation = person.role;
  }
  if (isUser(person)) {
    additionalInformation = person.occupation;
  }
  if (isPowerUser(person)) {
    additionalInformation = `${person.role}, ${person.occupation}`;
  }
  console.log(`${person.name}, ${person.age}, ${additionalInformation}`);
}

console.log('Admins:');
persons.filter(isAdmin).forEach(logPerson);

console.log();

console.log('Users:');
persons.filter(isUser).forEach(logPerson);

console.log();

console.log('Power users:');
persons.filter(isPowerUser).forEach(logPerson);
