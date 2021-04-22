const obj1 = { foo: 'bar', x: 42 };
const obj2 = { foo: 'baz', y: 5 };

const clonedObj = { ...obj1 };
const mergedObj = { ...obj1, ...obj2 };

console.log(clonedObj);
console.log(mergedObj);