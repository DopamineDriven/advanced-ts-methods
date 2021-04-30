"use strict";
function SerializeJSON(value, options) {
    var _a, _b;
    const Indent = (_b = (_a = options === null || options === void 0 ? void 0 : options.formatting) === null || _a === void 0 ? void 0 : _a.indent) !== null && _b !== void 0 ? _b : 2;
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
