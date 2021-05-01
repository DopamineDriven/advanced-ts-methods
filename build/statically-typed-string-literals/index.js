"use strict";
const margin = ['margin-block-start', `16em`];
// ----------------------------------------------------------------------------
function createGetterObjectTwo(obj) {
    const newObj = {};
    for (const key of Object.keys(obj)) {
        const capitalizedKey = key[0].toUpperCase() + key.substr(1);
        const getterKey = `get${capitalizedKey}`;
        newObj[getterKey] = () => obj[key];
    }
    return newObj;
}
const nuevoUser = createGetterObjectTwo({
    name: 'Andrew Ross',
    twitter: '@DopamineDriven'
});
// statically describe the above with TS
function createGetterObjectOne(obj) {
    const newObj = {};
    for (const key of Object.keys(obj)) {
        const capitalizedKey = key[0].toUpperCase() + key.substr(1);
        const getterKey = `get${capitalizedKey}`;
        // extends Record<string, any> added to resolve obj[key] error
        newObj[getterKey] = () => obj[key];
    }
    return newObj;
}
const useNuevo = createGetterObjectOne({
    name: 'Andrew Ross',
    twitter: '@DopamineDriven'
});
function createGetterObject(obj) {
    const newObj = {};
    for (const key of Object.keys(obj)) {
        const capitalizedKey = key[0].toUpperCase() + key.substr(1);
        const getterKey = `get${capitalizedKey}`;
        // extends Record<string, any> added to resolve obj[key] type error
        newObj[getterKey] = () => obj[key];
    }
    return newObj;
}
const userNuevo = Object.freeze(createGetterObject({
    id: 3111992,
    name: 'Andrew Ross',
    twitter: '@DopamineDriven'
}));
function serializeToJSON(value, options) {
    var _a, _b;
    const Indent = (_b = (_a = options === null || options === void 0 ? void 0 : options.formatting) === null || _a === void 0 ? void 0 : _a.indent) !== null && _b !== void 0 ? _b : 2;
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
//# sourceMappingURL=index.js.map