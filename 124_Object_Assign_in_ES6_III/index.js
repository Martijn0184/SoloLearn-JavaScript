let person = {
    name: 'Jack',
    age: 18
};

let newPerson = Object.assign({}, person);
newPerson.name = 'Bob';

console.log(person.name);
console.log(newPerson.name);