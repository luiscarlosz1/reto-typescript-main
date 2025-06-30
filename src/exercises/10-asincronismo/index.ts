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
    { type: 'admin', name: 'Rick Sanchez', age: 70, role: 'Científico' },
    { type: 'admin', name: 'Hombre Pajaro', age: 35, role: 'Líder Rebelde' }
];

const users: User[] = [
    { type: 'user', name: 'Morty Smith', age: 14, occupation: 'Estudiante' },
    { type: 'user', name: 'Summer Smith', age: 17, occupation: 'Estudiante' }
];

export type ApiResponse<T> =
    | { status: 'success'; data: T }
    | { status: 'error'; error: string };

export function promisify<T>(fn: (callback: (response: ApiResponse<T>) => void) => void): () => Promise<T> {
    return () => new Promise<T>((resolve, reject) => {
        fn((response) => {
            if (response.status === 'success') {
                resolve(response.data);
            } else {
                reject(new Error(response.error));
            }
        });
    });
}

type Promisified<T> = {
    [K in keyof T]: T[K] extends (cb: (res: ApiResponse<infer R>) => void) => void ? () => Promise<R> : never;
};

export function promisifyAll<T extends Record<string, Function>>(obj: T): Promisified<T> {
    const result = {} as Promisified<T>;
    for (const key in obj) {
        result[key] = promisify(obj[key] as any) as any;
    }
    return result;
}

const oldApi = {
    requestAdmins(callback: (response: ApiResponse<Admin[]>) => void) {
        callback({
            status: 'success',
            data: admins
        });
    },
    requestUsers(callback: (response: ApiResponse<User[]>) => void) {
        callback({
            status: 'success',
            data: users
        });
    },
    requestCurrentServerTime(callback: (response: ApiResponse<number>) => void) {
        callback({
            status: 'success',
            data: Date.now()
        });
    },
    requestCoffeeMachineQueueLength(callback: (response: ApiResponse<number>) => void) {
        callback({
            status: 'error',
            error: 'Numeric value has exceeded Number.MAX_SAFE_INTEGER.'
        });
    }
};

export const api = promisifyAll(oldApi);

function logPerson(person: Person) {
    console.log(
        ` - ${person.name}, ${person.age}, ${person.type === 'admin' ? person.role : person.occupation}`
    );
}

async function startTheApp() {
    console.log('Admins:');
    (await api.requestAdmins()).forEach(logPerson);
    console.log();

    console.log('Users:');
    (await api.requestUsers()).forEach(logPerson);
    console.log();

    console.log('Server time:');
    console.log(`   ${new Date(await api.requestCurrentServerTime()).toLocaleString()}`);
    console.log();

    console.log('Coffee machine queue length:');
    console.log(`   ${await api.requestCoffeeMachineQueueLength()}`);
}

startTheApp().then(
    () => {
        console.log('Success!');
    },
    (e: Error) => {
        console.log(`Error: "${e.message}", but it's fine, sometimes errors are inevitable.`);
    }
);

