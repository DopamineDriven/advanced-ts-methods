type EmailRecipient = string | string[] | null | undefined;

type NonNullableEmailRecipient<T> = NonNullable<T>;

/**
 * @type {NonNullableEmailRecipientResolved}
 * @returns {string | string[]}
 */

type NonNullableEmailRecipientResolved = NonNullableEmailRecipient<EmailRecipient>;

{
	type EmailRecipient = string | string[] | null | undefined;

	// /**
	//  * @type {NonNullableEmailRecipient}
	//  * @returns {never}
	//  */
	// type NonNullableEmailRecipient = string extends null | undefined
	// 	? never
	// 	: string | string[] extends null | undefined
	// 	? never
	// 	: string[] | null extends null | undefined
	// 	? never
	// 	: null | undefined extends null | undefined
	// 	? never
	// 	: undefined;
	type NonNullableEmailRecipient = NonNullable<
		string | string[] extends null | undefined ? never : string | string[]
	>;
}

// --------------------------------------------------
// T extends U ? X : Y;
// SomeCondition ? SomeValue : SomeOtherValue

/**
 * 1. @type {NonNullish<T>} contains a single @param T
 * 2. @param T is assignable to null or undefined we want the type never
 * 3. else, we want @param T equal to @param T
 */
type NonNullish<T> = T extends null | undefined ? never : T;
/**
 * @type {A}
 * @returns {string}
 */
type A = NonNullish<string>;
/**
 * @type {B}
 * @returns {string}
 */
type B = NonNullish<string | null>;
/**
 * @type {C}
 * @returns {string}
 */
type C = NonNullish<string | null | undefined>;
/**
 * @type {D}
 * @returns {never}
 */
type D = NonNullish<null>;
/**
 * @type {E}
 * @returns {never}
 */
type E = NonNullish<null | undefined>;

{
	/**
	 * from es5.d.ts file
	 *
	 * @type {NonNullable<T> = T extends null | undefined ? never : T;}
	 */

	/**
	 * @type {A}
	 * @returns {string}
	 */
	type A = NonNullable<string>;

	/**
	 * @type {B}
	 * @returns {string}
	 */
	type B = NonNullable<string | null>;

	/**
	 * @type {C}
	 * @returns {string}
	 */
	type C = NonNullable<string | null | undefined>;

	/**
	 * @type {D}
	 * @returns {never}
	 */
	type D = NonNullish<null>;

	/**
	 * @type {E}
	 * @returns {never}
	 */
	type E = NonNullish<null | undefined>;
}
