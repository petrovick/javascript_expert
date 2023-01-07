
const assert = require('assert')

// --- ownKeys
const user = Symbol('user')
const databaseUser = {
    id: 1,
    [Symbol.for('password')]: 123,
    [user]: 'erickwendel'
}

console.log(databaseUser);

const objectKeys = [
    ...Object.getOwnPropertyNames(databaseUser),
    ...Object.getOwnPropertySymbols(databaseUser),
]

console.log('objectKeys:', objectKeys);
