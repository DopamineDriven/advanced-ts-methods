function Swap<T, U>(tuple: readonly [T, U]): [U, T] {
	const [first, second] = tuple;
	return [second, first];
}

const keyValuePair: readonly [number, string] = [1, 'one'];
console.log(keyValuePair);
const valueKeyPair = Swap(keyValuePair);
console.log(valueKeyPair);
