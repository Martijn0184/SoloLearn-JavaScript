let a, b, c = 4, d = 8;

[a, b = 6] = [2];
console.log(a);
console.log(b);

[c, d] = [d, c];
console.log(c);
console.log(d);
