import {
    strReverse,
    strToLower,
    strToUpper,
    strRandomize,
    strInvertCase
} from 'str-utils';


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

type Person = User | Admin;

const admins: Admin[] = [
    { type: 'admin', name: 'Montgomery Burns', age: 81, role: 'Propietario de la Planta Nuclear de Springfield' },
    { type: 'admin', name: 'Seymour Skinner', age: 44, role: 'Director' },
    { type: 'admin', name: 'Edna Krabappel', age: 41, role: 'Maestra' },
    { type: 'admin', name: 'Clancy Wiggum', age: 45, role: 'Jefe de Policía' },
    { type: 'admin', name: 'Kent Brockman', age: 50, role: 'Presentador de Noticias' }
];

const users: User[] = [
    { type: 'user', name: 'Homer Simpson', age: 39, occupation: 'Inspector de Seguridad' },
    { type: 'user', name: 'Marge Simpson', age: 36, occupation: 'Ama de Casa' },
    { type: 'user', name: 'Bart Simpson', age: 10, occupation: 'Estudiante' },
    { type: 'user', name: 'Lisa Simpson', age: 8, occupation: 'Estudiante' },
    { type: 'user', name: 'Maggie Simpson', age: 1, occupation: 'Bebé' }
];

const isAdmin = (person: Person): person is Admin => person.type === 'admin';
const isUser = (person: Person): person is User => person.type === 'user';

export const nameDecorators = [
    strReverse,
    strToLower,
    strToUpper,
    strRandomize,
    strInvertCase
];

function logPerson(person: Person) {
    let additionalInformation: string = '';
    if (isAdmin(person)) {
        additionalInformation = person.role;
    }
    if (isUser(person)) {
        additionalInformation = person.occupation;
    }
    const randomNameDecorator = nameDecorators[
        Math.round(Math.random() * (nameDecorators.length - 1))
    ];
    const name = randomNameDecorator(person.name);
    console.log(
        ` - ${name}, ${person.age}, ${additionalInformation}`
    );
}

([] as Person[])
    .concat(users, admins)
    .forEach(logPerson);

// In case you are stuck:
// https://www.typescriptlang.org/docs/handbook/modules.html#ambient-modules
