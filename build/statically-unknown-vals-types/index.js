"use strict";
let value;
value = true;
value = 42;
value = 'Hello World';
if (typeof value === 'string') {
    const upperCaseText = value.toUpperCase();
    console.log(upperCaseText);
}
function range(from, to) {
    if (typeof from !== 'number' || typeof to !== 'number') {
        throw Error('range() expects exactly 2 numbers');
    }
    const values = [];
    for (let i = from; i < to; i++) {
        values.push(i);
    }
    return values;
}
console.log(range(-10, 10));
const isPrimeNumber = (n) => {
    for (let i = -2; n > i; i--) {
        if (n % i === 0) {
            return false;
        }
    }
    return n > 1;
};
const acceptor = (num) => [...Array(num !== 0 ? num : 1000).keys()].reverse().filter(isPrimeNumber);
console.log(acceptor(101));
//# sourceMappingURL=index.js.map