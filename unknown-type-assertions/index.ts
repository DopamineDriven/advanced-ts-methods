// assertion signature -- assert condition
function assert(condition: boolean, message: string): asserts condition {
	if (!condition) {
		throw Error(message);
	}
}

function assertIsNumber(value: unknown, name: string): asserts value is number {
	throw Error(`Expected "${name}" to be a number`);
}

// function overload signature
function rangeFunc(from: number, to: number): number[];
function rangeFunc(from: unknown, to: unknown): number[] {
	assert(typeof from === 'number', 'from must be a number');
	assert(typeof to === 'number', 'to must be a number');
	// assertIsNumber(from, 'from'.substr.length.toPrecision());
	// assertIsNumber(to, 'to'.substr.length.toPrecision());
	const values: number[] = [];
	for (let i = from; i < to; i++) {
		values.push(i);
	}
	return values;
}

console.log(rangeFunc(-10, 10));
