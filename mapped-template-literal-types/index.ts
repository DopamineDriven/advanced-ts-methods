{
	/**
	 * @type {GetProps<TObj>}
	 * @type {TObj} in @type {TKey}
	 * The line [TKey in keyof TObj] gets all keys returned by the object
	 * That is, it produces a union type of all the property names
	 * Then, map all these property names to a function type, () => TObj[TKey]
	 * Where property name @property @name TObj[TKey] is represented by TKey @type
	 * @returns {TObj[TKey]} which is a lookup type -- aka, an indexed access type
	 *
	 * BOTTOM LINE - looking up type of property named TKey within TObj
	 */

	type GetProps<TObj> = {
		[TKey in keyof TObj]: () => TObj[TKey];
	};
}

/**
 * Now add a _KEY REMAPPING_ template literal type in
 * @type {GetProps<TObj> = { [TKey in keyof TObj]: () => TObj[TKey] }} using the as operator
 *
 * Current @type {GetProps<TObj>} = {[TKey in keyof TObj as `get${TKey}`]: () => TObj[TKey];}
 * typescript is unhappy with the `get${TKey}`call, so _add an Intersection type (&) as @type {[TKey in string & keyof TObj as `get${TKey}`]}
 *
 * Ensures that only properties having keys of type string are kept
 *
 * Wrap the _key remapping_ template literal @type {TKey} with @type {Capitalize<S extends string> = intrinsic} -- an intrinsic type
 * not able to be reproduced as it is strictly controlled by the compiler
 */

type GetProps<TObj extends Record<string, any>> = {
	[TKey in string & keyof TObj as `get${Capitalize<TKey>}`]: () => TObj[TKey];
};

function generateGetterObject<TObj extends Record<string, any>>(
	obj: TObj
): GetProps<TObj> {
	const newObj: any = {};
	for (const key of Object.keys(obj)) {
		const capitalizedKey = key[0].toUpperCase() + key.substr(1);
		const getterKey = `get${capitalizedKey}`;
		newObj[getterKey] = () => obj[key];
	}
	return newObj;
}

const andrew = Object.freeze(
	generateGetterObject({
		id: 8675309,
		name: 'Andrew Ross',
		email: 'andrew@windycitydevs.io',
		twitter: '@Dopamine_Driven'
	} as const)
);

type serializeOption = {
	formatting?: {
		indent?: number;
	};
};

function serializeJson(value: Record<string, any>, options?: serializeOption) {
	const indent = options?.formatting?.indent ?? 2;
	return JSON.stringify(value, null, indent);
}
const andrewObj = Object.freeze({
	id: andrew.getId(),
	name: andrew.getName(),
	email: andrew.getEmail(),
	twitter: andrew.getTwitter()
} as const);

const jsonGetter = serializeJson(andrewObj, {
	formatting: {
		indent: 4
	}
});
console.log(jsonGetter);
