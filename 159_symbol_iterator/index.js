const arr = ['0', '1', '4', 'a', '9', 'c', '16'];
const my_obj = {
    [Symbol.iterator]: function* () {
        for (let index of arr) {
            yield `${index}`;
        }
    }
};

const all = [...my_obj]
    .map(i => parseInt(i, 10))
    .map(Math.sqrt)
    .filter((i) => i < 4)
    .reduce((i, d) => i + d);

console.log(all);