function intersperse<T>(array: readonly T[], separator: T): T[] {
	const newArray: T[] = [];
	for (const element of array) {
		if (newArray.length !== 0) {
			newArray.push(separator);
		}
		newArray.push(element);
	}
	return newArray;
}

const values: readonly string[] = ['booksyA', 'booksyB', 'booksyC'];
// typeerror for mutating unless source set to readonly, too
const valuesWithSeparators = intersperse(values, 'Google');

console.log(values);
console.log(valuesWithSeparators);
