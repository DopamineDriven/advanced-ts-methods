// mixins!
// if generic parameter <T> is a function Type, it extracts the return type
type ReturnTypeOf<T extends (...args: any) => any> = T extends (
	...args: any
) => infer U
	? U
	: any;

type One = ReturnTypeOf<() => string>;
type Two = ReturnTypeOf<typeof Math.random>;
type Three = ReturnTypeOf<typeof Array.isArray>;

/**
 * 
interface IterableIterator<T> extends Iterator<T> {
    [Symbol.iterator](): IterableIterator<T>;
}
 */
type Four = ReturnType<(c: typeof Math.random[]) => IterableIterator<typeof c>>;

// use built in ReturnType
/**
 * @type {ReturnType<T extends (...args: any) => any> = T extends (...args: any) => infer R ? R : any;}
 */

// ReturnType is VERY similar to InstanceType, the latter simply uses new to invoke Class calls for constructor functions
/**
 * @type {InstanceType<T extends new (...args: any) => any> = T extends new (...args: any) => infer R ? R : any;}
 */
