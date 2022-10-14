// explicit types
let character: string;
let age: number;
let isLoggedIn: boolean;

// age = 'luigi';
age = 20;

// isLoggedIn = 'true';
isLoggedIn = true;

// arrays
let ninjas: string[] = [];
ninjas.push('shaun');

// union types
let mixed: (string|number)[] = [];
mixed.push('hello');
mixed.push(20);
console.log(mixed);

let uid: string|number;
uid = '123';
uid = 123;

let ninjaOne: object;
ninjaOne = {name: 'yoshi', age: 30};

let ninjaTwo: {
    name: string,
    age: number,
    beltColor: string
}

ninjaTwo = {name: 'mario', age: 20, beltColor: 'black'};