import * as dateWizard from 'date-wizard';
import './module-augmentations/date-wizard';

interface User {
    type: 'user';
    name: string;
    age: number;
    occupation: string;
    registered: Date;
}

interface Admin {
    type: 'admin';
    name: string;
    age: number;
    role: string;
    registered: Date;
}

type Person = User | Admin;

const admins: Admin[] = [
  {
    type: 'admin',
    name: 'Eric Cartman',
    age: 10,
    role: 'Administrador',
    registered: new Date('2016-06-01T16:23:13'),
  },
  {
    type: 'admin',
    name: 'Stan Marsh',
    age: 10,
    role: 'Salvador del mundo',
    registered: new Date('2017-02-11T12:12:11'),
  },
  {
    type: 'admin',
    name: 'Kyle Broflovski',
    age: 10,
    role: 'Supervisor',
    registered: new Date('2018-01-05T11:02:30'),
  },
  {
    type: 'admin',
    name: 'Kenny McCormick',
    age: 10,
    role: 'Kenny',
    registered: new Date('2018-08-12T10:01:24'),
  },
  {
    type: 'admin',
    name: 'Butters Stotch',
    age: 10,
    role: 'Soporte al cliente',
    registered: new Date('2019-03-25T07:51:05'),
  },
];

const users: User[] = [
    { type: 'user', name: 'Randy Marsh', age: 45, occupation: 'Limpiador de chimeneas', registered: new Date('2016-02-15T09:25:13') },
    { type: 'user', name: 'Wendy Testaburger', age: 10, occupation: 'Astronauta', registered: new Date('2016-03-23T12:47:03') },
    { type: 'user', name: 'Chef', age: 40, occupation: 'Guía del desierto', registered: new Date('2017-02-19T17:22:56') },
    { type: 'user', name: 'Mr. Garrison', age: 50, occupation: 'Persona ordinaria', registered: new Date('2018-02-25T19:44:28') },
    { type: 'user', name: 'Toallin', age: 17, occupation: 'Encubierto', registered: new Date('2019-03-25T09:29:12') }
];

const isAdmin = (person: Person): person is Admin => person.type === 'admin';
const isUser = (person: Person): person is User => person.type === 'user';

function logPerson(person: Person, index: number) {
    let additionalInformation: string = '';
    if (isAdmin(person)) {
        additionalInformation = person.role;
    }
    if (isUser(person)) {
        additionalInformation = person.occupation;
    }
    let registeredAt = dateWizard(person.registered, '{date}.{month}.{year} {hours}:{minutes}');
    let num = `#${dateWizard.pad(index + 1)}`;
    console.log(
        ` - ${num}: ${person.name}, ${person.age}, ${additionalInformation}, ${registeredAt}`
    );
}

export {
    dateWizard
};

console.log('All users:');

([] as Person[])
    .concat(users, admins)
    .forEach(logPerson);

console.log();

console.log('Early birds:');

([] as Person[])
    .concat(users, admins)
    .filter((person) => dateWizard.dateDetails(person.registered).hours < 10)
    .forEach(logPerson);

// In case you are stuck:
// https://www.typescriptlang.org/docs/handbook/modules.html#ambient-modules
// https://www.typescriptlang.org/docs/handbook/declaration-merging.html
