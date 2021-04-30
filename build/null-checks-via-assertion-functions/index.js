"use strict";
function assertIsNonNullish(value, message) {
    if (value === null || value === undefined) {
        throw Error(message);
    }
}
const root = document.getElementById('root');
// if (root === null) {
// 	throw Error("Couldn't find DOM element #root");
// }
assertIsNonNullish(root, "Couldn't find DOM element #root");
root.addEventListener('click', e => {
    e.preventDefault();
    console.log;
});
