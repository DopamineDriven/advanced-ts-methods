'use strict';
var __classPrivateFieldGet =
	(this && this.__classPrivateFieldGet) ||
	function (receiver, privateMap) {
		if (!privateMap.has(receiver)) {
			throw new TypeError('attempted to get private field on non-instance');
		}
		return privateMap.get(receiver);
	};
var __classPrivateFieldSet =
	(this && this.__classPrivateFieldSet) ||
	function (receiver, privateMap, value) {
		if (!privateMap.has(receiver)) {
			throw new TypeError('attempted to set private field on non-instance');
		}
		privateMap.set(receiver, value);
		return value;
	};
var _value;
class TrulyPrivateCounter {
	constructor() {
		_value.set(this, 0);
	}
	increment() {
		__classPrivateFieldSet(
			this,
			_value,
			__classPrivateFieldGet(this, _value) + 1
		);
	}
	get count() {
		return __classPrivateFieldGet(this, _value);
	}
}
_value = new WeakMap();
const trulyPrivateCounter = new TrulyPrivateCounter();
trulyPrivateCounter.increment();
trulyPrivateCounter.increment();
trulyPrivateCounter.increment();
// trulyPrivateCounter.#value = 3
// the above returns a syntax error: Property '#value' is not accessible outside
// class 'TrulyPrivateCounter' because it has a private identifier.
// ES2015 or higher must be targeted when using #var private notation
console.log(trulyPrivateCounter.count);
//# sourceMappingURL=index.js.map
