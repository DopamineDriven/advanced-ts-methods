"use strict";
// assertion signature -- assert condition
function assert(condition, message) {
    if (!condition) {
        throw Error(message);
    }
}
function assertIsNumber(value, name) {
    throw Error(`Expected "${name}" to be a number`);
}
function rangeFunc(from, to) {
    assert(typeof from === 'number', 'from must be a number');
    assert(typeof to === 'number', 'to must be a number');
    // assertIsNumber(from, 'from'.substr.length.toPrecision());
    // assertIsNumber(to, 'to'.substr.length.toPrecision());
    const values = [];
    for (let i = from; i < to; i++) {
        values.push(i);
    }
    return values;
}
console.log(rangeFunc(-10, 10));
//# sourceMappingURL=index.js.map