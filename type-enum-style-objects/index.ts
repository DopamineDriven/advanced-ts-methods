const HTTPRequestMethod = Object.freeze({
	GET: 'GET',
	POST: 'POST'
} as const);

type ValuesOf<T> = T[keyof T]; // indexed access type -- accesses types of all properties in object
type HTTPRequestMethodType = ValuesOf<typeof HTTPRequestMethod>;

async function FetchJSON(url: string, method: HTTPRequestMethodType) {
	const response = await fetch(url, { method });
	return await response.json();
}

// FetchJSON('https://example.com/', HTTPRequestMethod.GET).then(data => {});
