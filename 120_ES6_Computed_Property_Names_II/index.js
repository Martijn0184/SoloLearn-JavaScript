var i = 0;
var a = {
    ['foo' + ++i]: i,
    ['foo' + ++i]: i,
    ['foo' + ++i]: i
};

console.log(a.foo1);
console.log(a.foo2);
console.log(a.foo3);