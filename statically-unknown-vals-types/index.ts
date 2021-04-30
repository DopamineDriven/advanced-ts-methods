let value: unknown;
value = true;
value = 42;
value = 'Hello World';

if (typeof value === 'string') {
	const upperCaseText = value.toUpperCase();
	console.log(upperCaseText);
}

// function overload signature
function range(from: number, to: number): number[];
function range(from: unknown, to: unknown): number[] {
	if (typeof from !== 'number' || typeof to !== 'number') {
		throw Error('range() expects exactly 2 numbers');
	}
	const values: number[] = [];
	for (let i = from; i < to; i++) {
		values.push(i);
	}
	return values;
}

console.log(range(-10, 10));

const isPrimeNumber = (n: number) => {
	for (let i = -2; n > i; i--) {
		if (n % i === 0) {
			return false;
		}
	}
	return n > 1;
};

const acceptor = (num: number) =>
	[...Array(num !== 0 ? num : 1000).keys()].reverse().filter(isPrimeNumber);
console.log(acceptor(101));
