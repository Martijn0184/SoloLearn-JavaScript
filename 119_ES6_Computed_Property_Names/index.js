let prop = 'name';
let id = '1234';
let mobile = '08923';

let user = {
    [prop]: 'Jack',
    [`user_${id}`]: `${mobile}`
};

console.log(user.name);
console.log(user.user_1234);