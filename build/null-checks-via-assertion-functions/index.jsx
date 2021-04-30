"use strict";
function assertIsNonNullish(value, message) {
    if (value === null || value === undefined) {
        throw Error(message);
    }
}
var root = document.getElementById('root');
// if (root === null) {
// 	throw Error("Couldn't find DOM element #root");
// }
assertIsNonNullish(root, "Couldn't find DOM element #root");
root.addEventListener('click', function (e) {
    e.preventDefault();
    console.log;
});
