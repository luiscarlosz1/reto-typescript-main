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

export type Person = User | Admin;

export const persons: Person[] = [
  {
    type: 'user',
    name: 'Javier Castillo',
    age: 25,
    occupation: 'Ingeniero de Software',
  },
  { type: 'admin', name: 'Javier Castillo', age: 32, role: 'Estudiante' },
  {
    type: 'user',
    name: 'Maria Isabel Hernandez',
    age: 23,
    occupation: 'Abogada',
  },
  { type: 'admin', name: 'Jorge Perez', age: 64, role: 'Contador' },
  { type: 'user', name: 'Carla Perez', age: 23, occupation: 'Contadora' },
  { type: 'admin', name: 'Andres Perez', age: 23, role: 'Administrator' },
];

export function logPerson(person: Person) {
  console.log(
    ` - ${person.name}, ${person.age}, ${person.type === 'admin' ? person.role : person.occupation}`
  );
}

export function filterPersons(
  persons: Person[],
  personType: 'user',
  criteria: Partial<Omit<User, 'type'>>
): User[];

export function filterPersons(
  persons: Person[],
  personType: 'admin',
  criteria: Partial<Omit<Admin, 'type'>>
): Admin[];

export function filterPersons(
  persons: Person[],
  personType: 'user' | 'admin',
  criteria: Partial<Omit<User | Admin, 'type'>>
): Person[] {
  return persons
    .filter(person => person.type === personType)
    .filter(person => {
      const criteriaKeys = Object.keys(criteria) as (keyof typeof criteria)[];
      return criteriaKeys.every(field => person[field] === criteria[field]);
    });
}

export const usersOfAge23 = filterPersons(persons, 'user', { age: 23 });
export const adminsOfAge23 = filterPersons(persons, 'admin', { age: 23 });

console.log('Users of age 23:');
usersOfAge23.forEach(logPerson);

console.log();

console.log('Admins of age 23:');
adminsOfAge23.forEach(logPerson);
