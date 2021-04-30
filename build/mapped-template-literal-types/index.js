"use strict";
{
}
function generateGetterObject(obj) {
    const newObj = {};
    for (const key of Object.keys(obj)) {
        const capitalizedKey = key[0].toUpperCase() + key.substr(1);
        const getterKey = `get${capitalizedKey}`;
        newObj[getterKey] = () => obj[key];
    }
    return newObj;
}
const andrew = Object.freeze(generateGetterObject({
    id: 8675309,
    name: 'Andrew Ross',
    email: 'andrew@windycitydevs.io',
    twitter: '@Dopamine_Driven'
}));
function serializeJson(value, options) {
    var _a, _b;
    const indent = (_b = (_a = options === null || options === void 0 ? void 0 : options.formatting) === null || _a === void 0 ? void 0 : _a.indent) !== null && _b !== void 0 ? _b : 2;
    return JSON.stringify(value, null, indent);
}
const andrewObj = Object.freeze({
    id: andrew.getId(),
    name: andrew.getName(),
    email: andrew.getEmail(),
    twitter: andrew.getTwitter()
});
const jsonGetter = serializeJson(andrewObj, {
    formatting: {
        indent: 4
    }
});
console.log(jsonGetter);
