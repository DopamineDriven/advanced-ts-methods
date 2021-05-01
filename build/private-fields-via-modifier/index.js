"use strict";
class Counter {
    constructor() {
        this._value = 0;
    }
    increment() {
        this._value += 1;
    }
    get count() {
        return this._value;
    }
}
const counter = new Counter();
counter.increment();
counter.increment();
counter.increment();
console.log(counter.count);
const counterArr = [...Array(counter.count).keys()];
console.log(counterArr.filter(x => x.toLocaleString()));
// private field below
class PrivateCounter {
    constructor() {
        this._value = 0;
    }
    increment() {
        this._value += 1;
    }
    get count() {
        return this._value;
    }
}
const privateCounter = new Counter();
// Property '_value' is private and only accessible within class 'Counter'.
// counter._value = 100;
// However, can access field with a private modifier outside the class it is declared in
// by using an index to access it! Not truly private
counter['_value'] = -100;
counter.increment();
counter.increment();
counter.increment();
console.log(counter['count']); // returns -97
// console.log(counter.count, 'accessed private field using indexing');
// const counterArr = [...Array(counter['count']).keys()];
// console.log(counterArr.filter(x => x.toLocaleString()));
// private modifier does not give us privacy at runtime
//# sourceMappingURL=index.js.map