"use strict";
// to support ES3 and Es5 (which do not support #var truly private syntax)
function createCounter() {
    let value = 0;
    return {
        increment() {
            value += 1;
        },
        get count() {
            return value;
        }
    };
}
const count = createCounter();
count.increment();
count.increment();
count.increment();
console.log(count.count);
// local var value inaccessible outside of createCounter function
// however, the compiled code doesn't hide our private vars nearly as well
