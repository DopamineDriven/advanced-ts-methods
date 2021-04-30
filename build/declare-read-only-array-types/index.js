"use strict";
function intersperse(array, separator) {
    const newArray = [];
    for (const element of array) {
        if (newArray.length !== 0) {
            newArray.push(separator);
        }
        newArray.push(element);
    }
    return newArray;
}
const values = ['booksyA', 'booksyB', 'booksyC'];
// typeerror for mutating unless source set to readonly, too
const valuesWithSeparators = intersperse(values, 'Google');
console.log(values);
console.log(valuesWithSeparators);
