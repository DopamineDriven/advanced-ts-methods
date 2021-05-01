"use strict";
function Swap(tuple) {
    const [first, second] = tuple;
    return [second, first];
}
const keyValuePair = [1, 'one'];
console.log(keyValuePair);
const valueKeyPair = Swap(keyValuePair);
console.log(valueKeyPair);
//# sourceMappingURL=index.js.map