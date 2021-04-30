class TrulyPrivateCounter {
	#value = 0;

	increment() {
		this.#value += 1;
	}

	get count() {
		return this.#value;
	}
}

const trulyPrivateCounter = new TrulyPrivateCounter();

trulyPrivateCounter.increment();
trulyPrivateCounter.increment();
trulyPrivateCounter.increment();

// trulyPrivateCounter.#value = 3
// the above returns a syntax error: Property '#value' is not accessible outside
// class 'TrulyPrivateCounter' because it has a private identifier.
// ES2015 or higher must be targeted when using #var private notation

console.log(trulyPrivateCounter.count);
