"use strict";
function serializeJSON(value, options) {
    var _a, _b;
    const indent = (_b = (_a = options === null || options === void 0 ? void 0 : options.formatting) === null || _a === void 0 ? void 0 : _a.getIndent) === null || _b === void 0 ? void 0 : _b.call(_a);
    return JSON.stringify(value, null, indent);
}
const user = {
    name: 'Marius Schulz',
    twitter: 'mariusschulz'
};
const json = serializeJSON(user, {
    formatting: {
        getIndent: () => 4
    }
});
console.log(json);
