// USE CASE: Statically type css declarations
type Dimension = 'block' | 'inline';
type Direction = 'start' | 'end';

/**
 * Generated String-Literal Types of @type {MarginProperty}
 * as inferred by TSIntellisense
 * @param {"margin-block-start" | "margin-block-end" | "margin-inline-start" | "margin-inline-end"}
 */
type MarginProperty = `margin-${Dimension}-${Direction}`;

/**
 * @type {MarginValue}
 * has the following inferred values
 * @param {`${number}` | `${number}px` | `${number}vw` | `${number}vh` | `${number}rem` | `${number}em` | `${number}%`}
 */
type MarginValue = `${number}${'px' | 'vw' | 'vh' | 'rem' | 'em' | '%' | ''}`;

/**
 * @type {MarginDeclaration}
 * has the following inferred values
 * @param {["margin-block-start" | "margin-block-end" | "margin-inline-start" | "margin-inline-end", `${number}` | `${number}px` | `${number}vw` | `${number}vh` | `${number}rem` | `${number}em` | `${number}%`]}
 */
type MarginDeclartion = [MarginProperty, MarginValue];

const margin: MarginDeclartion = ['margin-block-start', `16em`];

// ----------------------------------------------------------------------------
{
	function createGetterObject(obj: any): any {
		const newObj: any = {};
		for (const key of Object.keys(obj)) {
			const capitalizedKey = key[0].toUpperCase() + key.substr(1);
			const getterKey = `get${capitalizedKey}`;
			newObj[getterKey] = () => obj[key];
		}
		return newObj;
	}

	const userNuevo = createGetterObject({
		name: 'Andrew Ross',
		twitter: '@DopamineDriven'
	});
}

// statically describe the above with TS

{
	function createGetterObject<TObj extends Record<string, any>>(
		obj: TObj
	): PropGetters<TObj> {
		const newObj: any = {};
		for (const key of Object.keys(obj)) {
			const capitalizedKey = key[0].toUpperCase() + key.substr(1);
			const getterKey = `get${capitalizedKey}`;
			// extends Record<string, any> added to resolve obj[key] error
			newObj[getterKey] = () => obj[key];
		}
		return newObj;
	}
	// mapped type
	type PropGetters<TObj> = {
		// return value is an indexed access type
		// looking up property named TKey in TObj!
		[TKey in keyof TObj]: () => TObj[TKey];
	};
	const userNuevo = createGetterObject({
		name: 'Andrew Ross',
		twitter: '@DopamineDriven'
	});
}

function createGetterObject<TObj extends Record<string, any>>(
	obj: TObj
): PropGetters<TObj> {
	const newObj: any = {};
	for (const key of Object.keys(obj)) {
		const capitalizedKey = key[0].toUpperCase() + key.substr(1);
		const getterKey = `get${capitalizedKey}`;
		// extends Record<string, any> added to resolve obj[key] type error
		newObj[getterKey] = () => obj[key];
	}
	return newObj;
}

type PropGetters<TObj extends Record<string, any>> = {
	[TKey in string & keyof TObj as `get${Capitalize<TKey>}`]: () => TObj[TKey];
};

const userNuevo = Object.freeze(
	createGetterObject({
		id: 3111992,
		name: 'Andrew Ross',
		twitter: '@DopamineDriven'
	} as const)
);
type serializationOption = {
	formatting?: {
		indent?: number;
	};
};

function serializeToJSON(value: any, options?: serializationOption) {
	const Indent = options?.formatting?.indent ?? 2;
	return JSON.stringify(value, null, Indent);
}

const userObj = {
	id: userNuevo.getId(),
	name: userNuevo.getName(),
	twitter: userNuevo.getTwitter()
};

const getterToJSON = serializeToJSON(userObj, {
	formatting: {
		indent: 4
	}
});
console.log(getterToJSON);

// mapped type
// return value is an indexed access type
// looking up property named TKey in TObj!
// use in string & keyof Tobj as `get${TKey}` for template literal types!
// NOTE - IMPORTANT - The " = intrinsic" implies that we cannot write this type ourselves -- it is performed in the compiler
// type Capitalize<S extends string> = intrinsic
// use Capitalize Utility type to capitalize TKey as defined in the function
