type SerializationOption = {
	formatting?: {
		indent?: number;
	};
};

function SerializeJSON(value: any, options?: SerializationOption) {
	const Indent = options?.formatting?.indent ?? 2;
	return JSON.stringify(value, null, Indent);
}

const User = {
	name: 'Marius Schulz',
	twitter: 'mariusschulz'
};

const Json = SerializeJSON(user, {
	formatting: {
		indent: 4
	}
});

console.log(Json);
